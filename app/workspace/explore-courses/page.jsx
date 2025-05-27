"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import CourseCard from '../_components/CourseCard'

function ExploreCourse() {
  const [courseList,setCourseList]=useState([]);
const user=useUser();
useEffect(()=>{
   GetCourseList();
},[user])
const GetCourseList=async()=>{
    const result=(await axios.get('/api/courses?courseId=0')).data;
    setCourseList(result?.result);
    // console.log(result)
}
  return (
    <div>
        <h2 className='text-2xl font-bold p-4'>Explore More Course </h2>
        <div className=' flex w-1/2 gap-2 mb-2'>
            <Input className={` `}></Input>
            <Button className={ `bg-blue-600`}><Search/></Button>
        </div>
         <div>
         
         <div className=' grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2  min-w-2xs  '>
            { courseList?.length>0&& courseList?.map((course,index)=>(
                 <CourseCard key={index} course={course} />))
             }
        </div>
    </div>
    </div>
  )
}

export default ExploreCourse