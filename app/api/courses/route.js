import { db } from "@/config/db";
import { coursesTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq,  sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
     const {searchParams} = new URL(req.url);
    const courseId = searchParams.get("courseId");
    const userEmail = await currentUser();
  
    if(courseId==0){
        // const result=await db.select().from(coursesTable);
        const result=await db.select().from(coursesTable).where(sql`${coursesTable.courseContent}::jsonb != '{}'::jsonb`);
        return NextResponse.json({ message: "Hello World",result:result[0] });
    }

    if(courseId){
    const result=await db.select().from(coursesTable).where(eq(coursesTable.cid,courseId));
    console.log(result,"result");
    return NextResponse.json({ message: "Hello World",result:result[0] });
    }else{
        const result=await db.select().from(coursesTable).where(eq(coursesTable.userEmail,userEmail?.primaryEmailAddress?.emailAddress));
        return NextResponse.json({ message: "Hello World",result:result });
    }
}