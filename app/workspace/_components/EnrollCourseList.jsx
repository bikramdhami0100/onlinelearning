"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EnrollCourseCard from './EnrollCourseCard';

function EnrollCourseList() {
    const [enrollCourseList,setEnrollCourseList]=useState();
    useEffect(()=>{
        GetEnrollCourseList();
    },[]);
    const GetEnrollCourseList=async()=>{
        const result=(await axios.get('/api/enroll-course')).data;
         setEnrollCourseList(result?.result);
        // console.log(result,"result");
    }

  return enrollCourseList&& (
     <div>
          <center className=' flex underline mb-4'><h2 className='font-bold text-4xl underline' >Continue Learning </h2></center>
         <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 min-w-2xs justify-center  items-center gap-3'>
            { 
                enrollCourseList?.map((course,index)=>{
                 return <EnrollCourseCard course={course?.courses} enrollCourse={course?.enrollCourse} key={index} />
                })
            }
        </div>
    </div>
  )
}

export default EnrollCourseList