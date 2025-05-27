"use client"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { PlayCircle, BookOpen, Clock, Award } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Progress } from "@/components/ui/progress"

function EnrollCourseCard({ course, key, enrollCourse }) {
  const courseLayout = course?.courseJson?.course;
  console.log(courseLayout, "courseLayout");

  // Improved regex to handle markdown bold and italic
  const match = courseLayout?.bannerImagePrompt?.match(/\*\*Slogan:\*\*\s*\*?"([^"]+)"\*?/);
  const slogan = match ? match[1] : "Empower Your Learning Journey! 🚀";

  // Generate random banner colors based on course ID for consistency
  const getBannerColors = () => {
    const colors = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
      'from-pink-500 to-rose-500',
      'from-emerald-500 to-cyan-500',
      'from-amber-500 to-orange-500',
      'from-violet-500 to-fuchsia-500',
      'from-sky-500 to-blue-500'
    ];
    
    // Use course ID to ensure consistent color for same course
    const index = course?.cid ? Math.abs(course.cid.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % colors.length : 0;
    return colors[index];
  };

  const CalculatePerProgress = () => {
    const completed = enrollCourse?.completedChapters?.length ?? 0;
    const total = course?.courseContent?.length ?? 1;
    return Math.floor((completed / total) * 100);
  };

  const progress = CalculatePerProgress();

  return (
    <div 
      key={course?.cid} 
      className="group relative overflow-hidden transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-white border border-gray-100 rounded-3xl animate-fadeIn"
    >
      {/* Animated Banner Section */}
      <div className={`relative h-32 bg-gradient-to-br ${getBannerColors()} overflow-hidden`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-white rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full animate-ping"></div>
        </div>
        
        {/* Course Icon */}
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-xl p-3 animate-slideInLeft">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        
        {/* Progress Badge */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 animate-slideInRight">
          <span className="text-white text-sm font-semibold">{progress}% Complete</span>
        </div>
        
        {/* Slogan */}
        {/* <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white/90 text-sm font-medium animate-slideInUp">{slogan}</p>
        </div> */}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Course Title */}
        <div className="animate-slideInUp animation-delay-100">
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {courseLayout?.name}
          </h2>
        </div>

        {/* Course Description */}
        <div className="animate-slideInUp animation-delay-200">
          <p className="text-gray-600 line-clamp-3 leading-relaxed">
            {courseLayout?.description}
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-4 text-sm text-gray-500 animate-slideInUp animation-delay-300">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course?.courseContent?.length || 0} Chapters</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            <span>Certificate</span>
          </div>
        </div>

        {/* Progress Section */}
        <div className="space-y-3 animate-slideInUp animation-delay-400">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-700">Learning Progress</h3>
            <span className="text-sm font-bold text-blue-600">{progress}%</span>
          </div>
          
          <div className="relative">
            <Progress value={progress} className="h-2" />
            <div 
              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 animate-pulse"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="text-xs text-gray-500">
            {enrollCourse?.completedChapters?.length || 0} of {course?.courseContent?.length || 0} chapters completed
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 animate-slideInUp animation-delay-500">
          <Link href={`/workspace/view-course/${course?.cid}`}>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105 group">
              <PlayCircle className="w-5 h-5 mr-2 group-hover:animate-spin" />
              {progress > 0 ? 'Continue Learning' : 'Start Learning'}
            </Button>
          </Link>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />
    </div>
  );
}

export default EnrollCourseCard;