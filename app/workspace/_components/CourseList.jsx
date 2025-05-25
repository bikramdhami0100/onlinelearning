"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import AddNewCourseDialog from './AddNewCourseDialog';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import CourseCard from './CourseCard';

function CourseList() {
const [courseList,setCourseList]=useState([]);
const user=useUser();
useEffect(()=>{
   GetCourseList();
},[user])
const GetCourseList=async()=>{
    const result=(await axios.get('/api/courses')).data;
    setCourseList(result?.result);
    // console.log(result)
}
  return (
    <div>
         <h2 className='font-bold text-3xl' >Course List</h2>
         <div className=' flex  min-w-2xs justify-center items-center gap-4'>
          
            { courseList?.length>0? courseList.map((course,index)=>(
                 <CourseCard key={index} course={course} />
            )):(<>
               <div className='flex flex-col items-center justify-center p-6 border rounded-xl bg-secondary'>
                   <Image className=' ' alt='online-educaition' height={100} width={100} src="/online-education.svg" />
                   <h2 className='text-2xl font-bold  gap-1 my-2 '> No Courses Found</h2>
                   <AddNewCourseDialog>
                   <Button className={'cursor-pointer'}>+ Create New Course</Button>
                   </AddNewCourseDialog>
               </div>
            </>) }
        </div>
    </div>
  )
}

export default CourseList