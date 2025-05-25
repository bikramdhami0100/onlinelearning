
import React from 'react'
import EditCoursePage from '../../edit-course/[courseId]/page';

function ViewCourse() {
  return (
    <div>
      <EditCoursePage viewCourse={true}   />
    </div>
  )
}

export default ViewCourse