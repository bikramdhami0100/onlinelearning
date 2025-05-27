"use client"
import React, { useContext } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndexContext";

function ChapterListSideBar({courseInfo}) {
   const course=courseInfo?.courses;
   const enrollCourse=courseInfo?.enrollCourse;
   const courseContent=course?.courseContent;
     const completedChapter=enrollCourse?.completedChapters??[];
  // console.log(course,"this is data")
  // console.log(courseContent,"this is enroll data")
  const {selectedChapterIndex,setSelectedChapterIndex}=useContext(SelectedChapterIndexContext);
  return (
    <div className=" w-80 bg-secondary h-screen">
      <h2 className="text-2xl font-bold p-4">Chapters</h2>
      <Accordion type="single" collapsible>
        {
          courseContent?.map((chapter,index)=>(
            <AccordionItem
              onClick={()=>setSelectedChapterIndex(index)}
            value={chapter?.courseData?.chapterName} key={index}>
          <AccordionTrigger className={` ${completedChapter?.includes(index)?" text-green-600":""}  cursor-pointer`}>{index+1}. {chapter?.courseData?.chapterName}</AccordionTrigger>
          <AccordionContent>
             <div>
                 {chapter?.courseData?.topics?.map((topic,_index)=>(
                  <div key={_index} className={` ${completedChapter?.includes(index)?"bg-slate-200  text-green-600":" bg-white"}  p-3 cursor-pointer hover:bg-slate-100   my-1 rounded-lg`}>
                    {_index+1}. {topic?.topic}
                  </div>
                 ))}
             </div>
          </AccordionContent>
        </AccordionItem>
          ))
        }
      </Accordion>
    </div>
  );
}

export default ChapterListSideBar;
