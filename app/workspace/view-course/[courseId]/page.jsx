"use client"
import { useParams } from 'next/navigation';
import React from 'react'
import EditCoursePage from '../../edit-course/[courseId]/page';

function ViewCourse() {
  const {courseId}=useParams();
  return (
    <div>
      <EditCoursePage viewCourse={true}  courseId={courseId} />
    </div>
  )
}

export default ViewCourse