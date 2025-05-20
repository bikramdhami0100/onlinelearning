import { db } from '@/config/db'
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {email,name} = await req.json();
    console.log(email,name,"email,name");
   
    // if user already exist ?
    const users=await db.select().from(usersTable).where(eq(usersTable.email,email));

    //if not then insert new user
    if(users?.length==0){
        const result=await db.insert(usersTable).values({
            name,
            email,
        }).returning(usersTable);

        return NextResponse.json({ message: "User created",result:result});
    }
    return NextResponse.json({ message: "Hello World" ,user:users[0]});
    // return NextResponse.json({ message: "Hello World" });
    
}

export async function GET(req) {
    return NextResponse.json({ message: "Hello World" });
}