"use client";
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UserDetailsContext } from "@/context/UserDetailsContext";
import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndexContext";
function Provider({children}) {
    const {user}=useUser();
    const [userDetails,setUserDetails]=useState();
    const [selectedChapterIndex,setSelectedChapterIndex]=useState(0);
    useEffect(()=>{
       user&&CreateNewUser();
    },[user]);
    const CreateNewUser=async()=>{
     const result=(await axios.post('/api/user',{email:user?.primaryEmailAddress?.emailAddress,name:user?.fullName})).data;
    //  console.log(result,"result");
     setUserDetails(result?.user);
    }
    
  return (
    <>
     
         <UserDetailsContext.Provider value ={{userDetails,setUserDetails}}>
          <SelectedChapterIndexContext.Provider  value={{selectedChapterIndex,setSelectedChapterIndex}}>

         {children}
          </SelectedChapterIndexContext.Provider>
         </UserDetailsContext.Provider>
    </>
  )
}

export default Provider