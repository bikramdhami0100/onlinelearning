"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import AddHeader from '@/app/workspace/_components/AddHeader';
import ChapterListSideBar from '@/app/course/_components/ChapterListSideBar';
import ChapterContent from "@/app/course/_components/ChapterContent"
function Course() {
    const {courseId}=useParams();
      const [courseInfo,setCourseInfo]=useState();
    useEffect(()=>{
        GetEnrollCourseById();
    },[]);
    const GetEnrollCourseById=async()=>{
        const result=(await axios.get('/api/enroll-course?courseId='+courseId)).data;
         setCourseInfo(result?.result);
        // console.log(result,"result");
    }
  return (
    <div>
        <AddHeader hideSidebar={true}/>
        <div className=' flex gap-10'>
           <ChapterListSideBar/>
            <ChapterContent/>
        </div>
    </div>
  )
}

export default Course