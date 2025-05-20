import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { db } from "@/config/db";
// import { useAuth } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
// const PROMPT=`Generate Learning Course depends on following details. in wich make sure to add course name , description,chapter name ,image prompt (create a modern ,flat-style 2d digital illustration representing user topic. include UI/UX elements such as mockup screens,text blocks,icons,buttons,and creative workspace tools. Add symbolic elements related to user course , like sticky notes ,design components,and visual aids. User a vibrant color palette(blues,purple oranges) with a clean and minimalist design style.)`
const PROMPT=`Generate Learning Course depends on following details. in wich make sure to add course name , description,chapter name ,image prompt (create a modern ,flat-style 2d digital illustration representing user topic. include UI/UX elements such as mockup screens,text blocks,icons,buttons,and creative workspace tools. Add symbolic elements related to user course , like sticky notes ,design components,and visual aids. User a vibrant color palette(blues,purple oranges) with a clean ,professional look. The illustration should feel creative tech-savvy,and educational ,ideal for visualizing concepts in user course banner in 3d format,topic user each chapters,Duration for each chapters etc , in json frmat only 
schema:{
"course":{
"name":"string",
"description":"string",
"category":"string",
"level":"string",
"inludeVideo":"Boolean",
"noOfChapters":"number",
"chapters":[
 {
  "chapterName":"string",
"duration":"string",
"topics":["string"],
"imagePrompt":"string"}]
}},User Input:`
export async function POST(req) {
  // To run this code you need to install the following dependencies:
  // npm install @google/genai mime
  // npm install -D @types/node
const formData=await req.json();
console.log(formData,"formData");
// const user=useAuth();
// const user=await currentUser();
    const ai = new GoogleGenAI({
      apiKey:process.env.GEMINI_API_KEY ,
    });
    const config = {
      responseMimeType: "text/plain",
    };
    const model = "gemini-2.0-flash";
     const contents = [
    {
      role: 'user',
      parts: [
        {
          text: PROMPT+JSON.stringify(formData),
        },
      ],
    },
  ];
  
    const response = await ai.models.generateContent({
      model,
      config,
      contents,
    });
    console.log(response?.candidates[0]?.content?.parts[0]?.text)
    const RawResponse=response?.candidates[0]?.content?.parts[0]?.text;
    const RawJson=RawResponse.replace("```json","").replace("```","");
    const JSONResp=JSON.parse(RawJson);
    //save to Database db
    // const result=await db.insert(coursesTable).values({
    //     // name:response.text().name,
    //     // description:response.text().description,
    //     // noOfChapters:response.text().noOfChapters,
    //     // includeVideo:response.text().includeVideo,
    //     // level:response.text().level,
    //     // category:response.text().category,
    //     // courseJson:response.text(),
    //     // userEmail:formData?.email,
    //     ...formData,
    //     courseJson:response.text(),
    //     userEmail:user?.primaryEmailAddress?.emailAddress
    // }).returning(coursesTable);

  return NextResponse.json({ response:JSONResp });
}
