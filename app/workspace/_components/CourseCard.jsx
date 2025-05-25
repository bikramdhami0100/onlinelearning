import { Button } from "@/components/ui/button";
import { Book, Settings } from "lucide-react";
import React from "react";

function CourseCard({ course, key }) {
  const courseLayout = course?.courseJson?.course;
  // console.log(course,"this is course")
  return (
    <div key={key} className=" border p-2 rounded-2xl gap-2">
      <div>
        <h2 className=" text-blue-500">{course?.bannerImagePrompt}</h2>
      </div>
      <div>
        <h2 className="text-2xl font-bold">{courseLayout?.name}</h2>
        <p className=" ">{courseLayout?.description}</p>
        <div className=" flex justify-between items-center p-2">
          <h2>
            <Book />
          </h2>
          {course?.courseContent?.length ? (
            <Button>Start Learning</Button>
          ) : (
            <Button>
              {" "}
              <Settings /> Generate Content
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
