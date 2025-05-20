"use client"
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader, Sparkle } from "lucide-react";
import axios from "axios";

function AddNewCourseDialog({ children }) {
    const [loader,setLoader]=useState(false);
    const [formData,setFormData]=useState({
        name:"",
        description:"",
        noOfChapters:1,
        includeVideo:false,
        level:"beginner",
        category:""
    });
    const onHandleInputChange=(field,value)=>{
       
        setFormData((prev)=>({
            ...prev,
            [field]:value
        }))

        // console.log(formData,"this is form data")
    }

    const onGenerateCourse=async()=>{
        setLoader(true);
        console.log(formData)
      try{
        const result=(await axios.post('/api/generate-course-layout',{...formData})).data;
        console.log(result,"result");
    }catch(error){
        console.log(error,"error")
    }finally{
        //  setLoader(false) ;
    }
    }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a new Course Using AI</DialogTitle>
            <DialogDescription>
              <div className=" flex flex-col gap-3 mt-3">
                <div>
                  <label>Course Name</label>
                  <Input onChange={(e)=>onHandleInputChange('name',e.target.value)} placeholder="Enter Course Name"></Input>
                </div>
                <div>
                  <label>Course Description (Optional)</label>
                  <Textarea onChange={(e)=>onHandleInputChange('description',e.target.value)} placeholder="Enter Course Description"></Textarea>
                </div>
                <div>
                  <label>No. Of chapters</label>
                  <Input
                    min={1}
                    placeholder="No of chapters"
                    type={"number"}
                    onChange={(e)=>onHandleInputChange('noOfChapters',e.target.value)}
                  ></Input>
                </div>
                <div className=" flex items-center gap-1 cursor-pointer">
                  <label> Include Video</label>
                  <Switch onCheckedChange={()=>onHandleInputChange('includeVideo',!formData?.includeVideo)} />
                </div>
                <div  >
                  <label>Difficulty level</label>
                  <Select onValueChange={(value)=>onHandleInputChange('level',value)} className=" flex flex-1">
                    <SelectTrigger className={`w-full`} >
                      <SelectValue placeholder="Select Difficulty level" />
                    </SelectTrigger>
                    <SelectContent >
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="advance">Advance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label>Category</label>
                  <Input onChange={(e)=>onHandleInputChange('category',e.target.value)} placeholder="Category (Seperated by comma)"></Input>
                </div>
                <div className=" w-full bg-sidebar-primary rounded-md flex text-center cursor-pointer justify-center items-center">
                   <Button onClick={onGenerateCourse}> {loader && <Loader className="mr-2 h-4 w-4 animate-spin" />} <Sparkle/> Generate Course</Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddNewCourseDialog;
