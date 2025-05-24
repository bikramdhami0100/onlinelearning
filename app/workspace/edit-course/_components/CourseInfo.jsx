"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Book, Clock, Loader, Settings, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from "sonner"

function CourseInfo({ course }) {
  const courseLayout = course?.courseJson?.course;
 const [loader,setLoader]=useState(false);
 const router=useRouter();
  const GenerateCourseContent=async()=>{
    setLoader(true);
    try {
         const response=(await axios.post('/api/generate-course-content',{courseId:course?.cid,courseTitle:course?.name,courseJson:courseLayout})).data;
    console.log(response,"response");
    toast.success("Content Generated")
    setLoader(false);
     router.push("/workspace")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
      setLoader(false); 
    }
  }
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 rounded-2xl shadow-lg border bg-white">
      {/* Course Content */}
      <div className="flex-1 bg-white rounded-2xl p-8 space-y-6 animate-fadeIn">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-600  text-transparent bg-clip-text">
          {courseLayout?.name}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {courseLayout?.description}
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {/* Duration */}
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
            <Clock className="text-blue-600 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-gray-800">Duration</h3>
              <p className="text-blue-600">2 hours</p>
            </div>
          </div>

          {/* Chapters */}
          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
            <Book className="text-green-600 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-gray-800">Chapters</h3>
              <p className="text-green-600">3 chapters</p>
            </div>
          </div>

          {/* Difficulty */}
          <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-300 transform hover:scale-105">
            <TrendingUp className="text-red-600 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-gray-800">Difficulty</h3>
              <p className="text-red-600">{courseLayout?.level}</p>
            </div>
          </div>
        </div>

        <Button onClick={GenerateCourseContent} className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-lg py-2 mt-6 flex gap-2 items-center justify-center transition-all duration-300 rounded-xl shadow-md">
          {loader && <Loader className="mr-2 h-4 w-4 animate-spin" />}
          <Settings className="w-5 h-5" />
           Generate Content
        </Button>
      </div>

      {/* Banner Section */}
      <div className="flex-1 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-2xl flex items-center justify-center p-6">
        <h2 className="text-white text-3xl font-bold text-center leading-snug animate-pulse">
          {courseLayout?.bannerImagePrompt || 'Empower Your Learning Journey! 🚀'}
        </h2>
      </div>
    </div>
  );
}

export default CourseInfo;
