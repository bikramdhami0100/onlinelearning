"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Book,
  Clock,
  Loader,
  PlayCircle,
  Settings,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

function CourseInfo({ course, viewCourse }) {
  const courseLayout = course?.courseJson?.course;
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const GenerateCourseContent = async () => {
    setLoader(true);
    try {
      const response = (
        await axios.post("/api/generate-course-content", {
          courseId: course?.cid,
          courseTitle: course?.name,
          courseJson: courseLayout,
        })
      ).data;
      toast.success("Content Generated");
      router.push("/workspace");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoader(false);
    }
  };

  // Extract slogan using improved regex
  const match = courseLayout?.bannerImagePrompt?.match(
    /\*\*Slogan:\*\*\s*\*?"([^"]+)"\*?/
  );
  const slogan = match ? match[1] : "";

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 rounded-3xl shadow-xl border bg-white animate-fadeIn">
      {/* Left Side: Course Info */}
      <div className="flex-1 bg-white rounded-2xl p-6 space-y-6">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
          {courseLayout?.name}
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          {courseLayout?.description}
        </p>

        {/* Course Stats */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
          <StatCard
            icon={<Clock className="text-blue-600 w-7 h-7" />}
            title="Duration"
            value="2 hours"
            bg="blue"
          />
          <StatCard
            icon={<Book className="text-green-600 w-7 h-7" />}
            title="Chapters"
            value={`${courseLayout?.chapters?.length || 3} chapters`}
            bg="green"
          />
          <StatCard
            icon={<TrendingUp className="text-red-600 w-7 h-7" />}
            title="Difficulty"
            value={courseLayout?.level || "Beginner"}
            bg="red"
          />
        </div>

        {/* Action Button */}
        {!viewCourse ? (
          <Button
            onClick={GenerateCourseContent}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold text-lg py-2 mt-8 flex gap-2 items-center justify-center transition-all duration-300 rounded-xl shadow-lg"
          >
            {loader && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            <Settings className="w-5 h-5" />
            Generate Content
          </Button>
        ) : (
          <Link href={`/course/${course?.cid}`}>
            <Button className="w-full cursor-pointer bg-blue-600 text-white mt-8 hover:bg-blue-700">
              <PlayCircle className="w-5 h-5 mr-2" />
              Continue Learning
            </Button>
          </Link>
        )}
      </div>

   
    </div>
  );
}

function StatCard({ icon, title, value, bg }) {
  const colorMap = {
    blue: "bg-blue-50 hover:bg-blue-100",
    green: "bg-green-50 hover:bg-green-100",
    red: "bg-red-50 hover:bg-red-100",
  };
  return (
    <div
      className={`flex items-start gap-3 p-4 ${colorMap[bg]} rounded-xl transition-all duration-300 transform hover:scale-105`}
    >
      {icon}
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className={`text-${bg}-600 font-medium`}>{value}</p>
      </div>
    </div>
  );
}

export default CourseInfo;
