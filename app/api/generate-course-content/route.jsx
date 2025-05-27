 import { NextResponse } from "next/server";
// import { ai } from "../generate-course-layout/route";
import axios from "axios";
import { db } from "@/config/db";
import { coursesTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { GoogleGenAI } from "@google/genai";

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
  const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
    const {courseId,courseTitle,courseJson}=await req.json();
    const promises=courseJson?.chapters?.map( async(chapters)=>{
    const config = {
      responseMimeType: "text/plain",
    };
    const model = "gemini-2.0-flash";
     const contents = [
    {
      role: 'user',
      parts: [
        {
          text: PROMPT+JSON.stringify(chapters),
        },
      ],
    },
  ];
  
    const response = await ai.models.generateContent({
      model,
      config,
      contents,
    });
    const RawResponse=response?.candidates[0]?.content?.parts[0]?.text;
    const RawJson=RawResponse.replace("```json","").replace("```","");
    const JSONResp=JSON.parse(RawJson);
   // Get Youtube video
   const youtubeData=await GetYoutubeVideo(chapters?.chapterName);
    return {courseData:JSONResp,youtubeVideo:youtubeData};

    })

    const CourseContent=await Promise.all(promises);
    // console.log(CourseContent,"CourseContent");
    // save to DB
    const dbResp=await db.update(coursesTable).set({
        courseContent:CourseContent
    }).where(eq(coursesTable.cid,courseId));
 console.log(dbResp,"dbResp");
    return NextResponse.json({ message:"success" ,courseName:courseTitle , CourseContent:CourseContent });
}

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search'
const apiKey = process.env.YOUTUBE_VIDEO_API_KEY;
const maxResults = 4;
const GetYoutubeVideo=async(topic)=>{
    const params={
        q:topic,
        part:'snippet',
        type:'video',
        maxResults:maxResults,
        key:apiKey
    }
    // const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${topic}&type=video&maxResults=${maxResults}&key=${apiKey}`;
  
    try {
    const resp=(await axios.get(YOUTUBE_BASE_URL,{params})).data;
 console.log(resp)
  console.log(resp.items,"this is items")
  const youtubeVideoListREsp=resp.items;
  const youtubeVideoList=[];
  youtubeVideoListREsp.forEach((video)=>{
    youtubeVideoList.push({
      videoId:video?.id?.videoId,
      title:video?.snippet?.title,
    //   description:video?.snippet?.description,
    //   thumbnail:video?.snippet?.thumbnails?.default?.url
    })

  
  })
    // return videoId;
    return youtubeVideoList;
    } catch (error) {
      console.error('Error fetching YouTube video:', error);
      return null;
    }
  }
