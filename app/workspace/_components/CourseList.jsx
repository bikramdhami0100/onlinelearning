"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react'
import AddNewCourseDialog from './AddNewCourseDialog';

function CourseList() {
const [courseList,setCourseList]=useState([]);
  return (
    <div>
         <h2 className='font-bold text-3xl' >Course List</h2>
            { courseList?.length>0? courseList.map((course)=>(
                <div key={course.id} className='border rounded-xl p-4 shadow-md'>
                    <h3 className='font-bold text-xl'>{course.title}</h3>
                    <p>{course.description}</p>
                </div>
            )):(<>
               <div className='flex flex-col items-center justify-center p-6 border rounded-xl bg-secondary'>
                   <Image className=' ' alt='online-educaition' height={100} width={100} src="/online-education.svg" />
                   <h2 className='text-2xl font-bold  gap-1 my-2 '> No Courses Found</h2>
                   <AddNewCourseDialog>
                   <Button className={'cursor-pointer'}>+ Create New Course</Button>
                   </AddNewCourseDialog>
               </div>
            </>)
        
        }
       
    </div>
  )
}

export default CourseList