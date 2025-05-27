import React from 'react'
import WelcomeBanner from '../_components/WelcomeBanner'
import EnrollCourseList from '../_components/EnrollCourseList'

function MyLearning() {
  return (
    <div>
        <WelcomeBanner/>
       <h2 className='text-2xl font-bold p-4'>My Learning</h2>
       <EnrollCourseList/>
    </div>
  )
}

export default MyLearning