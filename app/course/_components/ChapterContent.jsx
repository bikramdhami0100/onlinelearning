"use client"
import { SelectedChapterIndexContext } from '@/context/SelectedChapterIndexContext';
import React, { useContext } from 'react'
import YouTube from 'react-youtube';

function ChapterContent({courseInfo}) {
  const course=courseInfo?.courses;
  const {selectedChapterIndex,setSelectedChapterIndex}=useContext(SelectedChapterIndexContext);
   const enrollCourse=courseInfo?.enrollCourse;
   const courseContent=course?.courseContent;
  //  console.log(courseContent,"courseContent");
   const videoData=courseContent?.[selectedChapterIndex]?.youtubeVideo;
   const topics=courseContent?.[selectedChapterIndex]?.courseData?.topics;
  //  console.log(courseData,"videoData");

  return (
    <div>
         <h2 className="text-2xl font-bold p-4"> {selectedChapterIndex+1}. {courseContent?.[selectedChapterIndex]?.courseData?.chapterName}</h2>
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