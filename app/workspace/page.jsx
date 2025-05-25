import React from 'react'
import WelcomeBAnner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'
import EnrollCourseList from './_components/EnrollCourseList';

function Workspace() {
  return (
    <div>
       <WelcomeBAnner/>
        <EnrollCourseList/>
       <CourseList/>
    </div>
  )
}

export default Workspace