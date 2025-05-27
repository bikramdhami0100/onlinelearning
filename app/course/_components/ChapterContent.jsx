"use client"
import { Button } from '@/components/ui/button';
import { SelectedChapterIndexContext } from '@/context/SelectedChapterIndexContext';
import axios from 'axios';
import { CheckCircle, Loader, X } from 'lucide-react';
import React, { useContext, useState } from 'react'
import YouTube from 'react-youtube';
import { toast } from 'sonner';

function ChapterContent({courseInfo,refreshData}) {
  const course=courseInfo?.courses;
  const {selectedChapterIndex,setSelectedChapterIndex}=useContext(SelectedChapterIndexContext);
  const [loading,setLoading]=useState(false);
   const enrollCourse=courseInfo?.enrollCourse;
   const courseContent=course?.courseContent;
   console.log(enrollCourse,"this is enroll course")
  //  console.log(courseContent,"courseContent");
   const videoData=courseContent?.[selectedChapterIndex]?.youtubeVideo;
   const topics=courseContent?.[selectedChapterIndex]?.courseData?.topics;
  //  console.log(courseData,"videoData");
  const completedChapter=enrollCourse?.completedChapters??[];
const markChapterCompleted=async()=>{
  //  if(completedChapter?.length==0){
  setLoading(true);
    completedChapter?.push(selectedChapterIndex);
    const result=await axios.put("/api/enroll-course",{courseId:course?.cid,completedChapters:completedChapter}).data;
    console.log(result,"client result completed ")
    refreshData();
    toast.success("Chapter Marked Completed")
  //  }
  setLoading(false);
}

const markInCompleteChapter=async()=>{
  //  if(completedChapter?.length==0){
  setLoading(true);
  const completedChap=completedChapter?.filter(item=>item!=selectedChapterIndex);
    completedChapter?.push(selectedChapterIndex);
    const result=await axios.put("/api/enroll-course",{courseId:course?.cid,completedChapters:completedChap}).data;
    console.log(result,"client result completed ")
    refreshData();
    toast.success("Chapter Marked Incompleted")
  //  }
  setLoading(false);
}
  return (
    <div>
         <div className=' flex justify-between items-center'>
         <h2 className="text-2xl font-bold p-4"> {selectedChapterIndex+1}. {courseContent?.[selectedChapterIndex]?.courseData?.chapterName}</h2>
         {
          !completedChapter?.includes(selectedChapterIndex)?<>
              <Button 
              className={"bg-blue-600 cursor-pointer"}
            onClick={markChapterCompleted}
          >  {loading ?<Loader className="mr-2 h-4 w-4 animate-spin" /> : <CheckCircle className="w-5 h-5" />}
              Mark as Completed</Button>
          </>:<>
            <Button variant={"outline"} onClick={markInCompleteChapter}>{loading ?<Loader className="mr-2 h-4 w-4 animate-spin" /> : <X className="w-5 h-5" />}Mark Incompleted</Button>
          </>
         }
         </div>

         <h2 className='text-2xl font-bold p-4'>Related video </h2>
         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
             {
                   videoData?.map((video,index)=>(
                    <div key={index} className="p-3 cursor-pointer hover:bg-slate-100 bg-white  my-1 rounded-lg">
                        <YouTube videoId={video?.videoId} opts={{ width: '300', height: '200' }} />
                    </div>
                   ))
             }
         </div>

         <div>
             {
               topics?.map((topic,index)=> (
                <div key={index} className="p-3  cursor-pointer hover:bg-slate-300 bg-slate-200  my-1 rounded-lg">
                    <h2 className="text-2xl font-bold p-4 text-blue-700"> {index+1}. {topic?.topic}</h2>
                    <div className='' dangerouslySetInnerHTML={{__html:topic?.content}}
                       style={{
                        lineHeight:'1.5',
                        fontSize:'1.1rem'
                       }}
                    ></div>
                    {/* <div>{topic?.content}</div> */}
                </div>
               ))
             }
         </div>
    </div>
  )
}

export default ChapterContent