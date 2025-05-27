"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import AddHeader from "@/app/workspace/_components/AddHeader";
import ChapterListSideBar from "@/app/course/_components/ChapterListSideBar";
import ChapterContent from "@/app/course/_components/ChapterContent";
import axios from "axios";

function Course() {
  const { courseId } = useParams();
  const [courseInfo, setCourseInfo] = useState();

  useEffect(() => {
    courseId && GetEnrollCourseById();
  }, [courseId]);

  const GetEnrollCourseById = async () => {
    const result = (await axios.get("/api/enroll-course?courseId=" + courseId)).data;
    setCourseInfo(result?.result[0]);
  };

  console.log(courseInfo, "courseInfo");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <AddHeader hideSidebar={true} />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[300px] min-w-[250px] bg-white shadow-md border-r overflow-y-auto">
          <ChapterListSideBar courseInfo={courseInfo} />
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-white rounded-tl-2xl shadow-inner">
          <ChapterContent courseInfo={courseInfo} refreshData={()=>GetEnrollCourseById()} />
        </div>
      </div>
    </div>
  );
}

export default Course;
