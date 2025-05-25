"use client"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Book, Loader, PlayCircle, Settings } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress"

function EnrollCourseCard({course,key ,enrollCourse}) {
      const courseLayout = course?.courseJson?.course;
   console.log(courseLayout,"courseLayout")
  const match = courseLayout?.bannerImagePrompt?.match(/Slogan:\s*"([^"]+)"/);
  const slogan = match ? match[1] : "";
 const CalculatePerProgress=()=>{
    return (enrollCourse?.completedChapters?.length ??0/course?.courseContent?.length)*100;
 }
  return (
    <div key={course?.cid} className=" transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md apsect-video flex flex-wrap border p-4 rounded-2xl gap-2">
      <div>
        <h2 className=" text-blue-500">{courseLayout?.bannerImagePrompt}</h2>
      </div>
       {/* <h2>{course?.name}</h2> */}
        <h2 className="bg-gradient-to-l from-blue-600  to-pink-600 bg-clip-text text-transparent  py-2 font-bold">{slogan || 'Empower Your Learning Journey! 🚀'}</h2>
      <div>
        <h2 className="text-2xl font-bold">{courseLayout?.name}</h2>
        <p className=" line-clamp-3">{courseLayout?.description}</p>
        <div className="">
         <h2 className=" flex justify-between "> Progress <span>{CalculatePerProgress()}%</span></h2>
         <Progress value={CalculatePerProgress()} />
         <Link href={`/workspace/view-course/${course?.cid}`} >
         <Button className={` cursor-pointer w-full mt-2 p-2`}> <PlayCircle size={"small"}/>  Start Learning </Button>
         </Link>
        </div>
      </div>
    </div>
  )
}

export default EnrollCourseCard