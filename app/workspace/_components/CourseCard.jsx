
"use client"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Book, Loader, PlayCircle, Settings } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

function CourseCard({ course, key }) {
  const courseLayout = course?.courseJson?.course;
  const [loader,setLoader]=useState(false);

  const onEnrollCourse=async()=>{
    setLoader(true);
    try {
      const result=(await axios.post('/api/enroll-course',{courseId:course?.cid})).data;
      console.log(result,"result");
      if(result?.message=="already enrolled"){
        toast.warning("Already Enrolled")
        setLoader(false);
        return;
      }
      toast.success("Enrolled Successfully")
      setLoader(false);
    } catch (error) {
      toast.error("Something went wrong")
      setLoader(false);
      console.log(error,"error")
    }
  }

  // console.log(courseLayout,"layout")
  const match = courseLayout?.bannerImagePrompt?.match(/Slogan:\s*"([^"]+)"/);
  const slogan = match ? match[1] : "";
  return (
    <div key={course?.cid} className=" transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md  aspect-video flex flex-wrap border p-4 rounded-2xl gap-2">
      <div>
        <h2 className=" text-blue-500">{course?.bannerImagePrompt}</h2>
      </div>
       {/* <h2>{course?.name}</h2> */}
        <h2 className="bg-gradient-to-l from-blue-600  to-pink-600 bg-clip-text text-transparent  py-2 font-bold">{slogan || 'Empower Your Learning Journey! 🚀'}</h2>
      <div>
        <h2 className="text-2xl font-bold">{courseLayout?.name}</h2>
        <p className=" line-clamp-3">{courseLayout?.description}</p>
        <div className=" flex justify-between items-center p-2">
          <h2 className="flex gap-2 items-center">
            <Book className="  w-6 h-6 text-blue-600 " />
            {courseLayout?.noOfChapters} Chapters
          </h2>
          {course?.courseContent?.length ? (
            <Button disabled={loader}  onClick={onEnrollCourse} className={" cursor-pointer bg-blue-600"}> {loader && <Loader className="mr-2 h-4 w-4 animate-spin" />} <PlayCircle size={"small"}/>  Enroll Course</Button>
          ) : (
           <Link href={`/workspace/edit-course/${course?.cid}`}>
            <Button  variant={"outline"}  className={" cursor-pointer text-sm ml-1 "}  >
            <Settings size={"small"}/>  Generate Content
            </Button>
           </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
