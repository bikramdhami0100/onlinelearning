"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CourseInfo from '../_components/CourseInfo'
import ChapterTopicList from '../_components/ChapterTopicList';

function EditCoursePage() {
    const {courseId}=useParams();
    const [courseData,setCourseData]=useState();
    const [loader,setLoader]=useState(false);
    const getCourseData=async()=>{
        setLoader(true);
        const result=(await axios.get('/api/courses?courseId='+courseId)).data;
        setCourseData(result?.result);
        setLoader(false);
    }
    
    useEffect(()=>{
       courseId&& getCourseData();
    },[courseId])
  return (
    <div>
         <CourseInfo course={courseData}/>
        <ChapterTopicList course={courseData}/>
    </div>
  )
}

export default EditCoursePage