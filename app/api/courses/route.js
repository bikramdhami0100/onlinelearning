import { db } from "@/config/db";
import { coursesTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
     const {searchParams} = new URL(req.url);
    const courseId = searchParams.get("courseId");
    console.log(courseId,"courseId");
    const result=await db.select().from(coursesTable).where(eq(coursesTable.cid,courseId));
    console.log(result,"result");
    return NextResponse.json({ message: "Hello World",result:result[0] });
}