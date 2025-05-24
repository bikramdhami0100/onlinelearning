 import { NextResponse } from "next/server";

 const PROMPT=`Depends on Chapter name and Topic Generate content for each topic in HTML and give  response in JSON format.
 Schema:{
    "chapterName":<>,
    {"topics":<>,
    "content":<>
}
}
:User Input:
 `
export async function POST(req) {
    const {courseId,courseTitle,courseJson}=await req.json();
    const promises=courseJson?.chapters?.mapa( async(course)=>{

    })
    return NextResponse.json({ message: "Hello World" });
}