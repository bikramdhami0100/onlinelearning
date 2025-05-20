"use client";
import {  UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <UserButton/>
    </div>
  );
}
