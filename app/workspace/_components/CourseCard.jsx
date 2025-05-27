"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Book, BookOpen, Loader, PlayCircle, Settings, Clock, Users } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

function CourseCard({ course }) {
  const courseLayout = course?.courseJson?.course;
  const [loader, setLoader] = useState(false);

  const onEnrollCourse = async () => {
    setLoader(true);
    try {
      const result = (await axios.post('/api/enroll-course', { courseId: course?.cid })).data;
      console.log(result, "result");
      if (result?.message === "already enrolled") {
        toast.warning("Already Enrolled");
        setLoader(false);
        return;
      }
      toast.success("Enrolled Successfully");
      setLoader(false);
    } catch (error) {
      toast.error("Something went wrong");
      setLoader(false);
      console.log(error, "error");
    }
  };

  const getBannerColors = () => {
    const colors = [
      'from-purple-500 via-purple-600 to-pink-500',
      'from-blue-500 via-blue-600 to-cyan-500',
      'from-green-500 via-green-600 to-teal-500',
      'from-orange-500 via-orange-600 to-red-500',
      'from-indigo-500 via-indigo-600 to-purple-500',
      'from-pink-500 via-pink-600 to-rose-500',
      'from-emerald-500 via-emerald-600 to-cyan-500',
      'from-amber-500 via-amber-600 to-orange-500',
      'from-violet-500 via-violet-600 to-fuchsia-500',
      'from-sky-500 via-sky-600 to-blue-500'
    ];

    // Use course ID to ensure consistent color for same course
    const index = course?.cid 
      ? Math.abs(course.cid.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % colors.length 
      : 0;
    return colors[index];
  };

  // Extract slogan from banner image prompt
  const match = courseLayout?.bannerImagePrompt?.match(/Slogan:\s*"([^"]+)"/);
  const slogan = match ? match[1] : "";

  return (
    <div className="group relative overflow-hidden transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-gray-200 rounded-3xl bg-white">
      {/* Gradient Banner */}
      <div className={`relative h-48 bg-gradient-to-br ${getBannerColors()} overflow-hidden`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-6 right-6 w-20 h-20 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/25 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full animate-ping delay-700"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-12 w-6 h-6 bg-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-4 h-4 bg-white/30 rounded-full animate-bounce delay-500"></div>
        </div>

        {/* Course Icon */}
        <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
          <BookOpen className="w-8 h-8 text-white drop-shadow-lg" />
        </div>

        {/* Slogan/Badge */}
        {slogan && (
          <div className="absolute bottom-4 left-6 bg-black/20 backdrop-blur-md rounded-full px-4 py-2">
            <span className="text-white text-sm font-medium">{slogan}</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title and Description */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {courseLayout?.name || "Course Title"}
          </h2>
          <p className="text-gray-600 line-clamp-3 leading-relaxed">
            {courseLayout?.description || "Course description not available"}
          </p>
        </div>

        {/* Course Stats */}
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Book className="w-4 h-4 text-blue-500" />
            <span className="font-medium">{courseLayout?.noOfChapters || 0} Chapters</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-500" />
            <span className="font-medium">Self-paced</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-500" />
            <span className="font-medium">Online</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {course?.courseContent?.length ? (
            <Button
              disabled={loader}
              onClick={onEnrollCourse}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {loader ? (
                <>
                  <Loader className="mr-2 h-5 w-5 animate-spin" />
                  Enrolling...
                </>
              ) : (
                <>
                  <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  Enroll Course
                </>
              )}
            </Button>
          ) : (
            <Link href={`/workspace/edit-course/${course?.cid}`}>
              <Button
                variant="outline"
                className="w-full border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:bg-blue-50 group"
              >
                <Settings className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                Generate Content
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Subtle border animation on hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
}

export default CourseCard;