"use client"
import { db } from '@/utils/database';
import { USER } from '@/utils/dbschema';
import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

function Provider({children}) {

    const {user} = useUser();
    useEffect(()=>{
        user&&ifnewuser();
    },[user])
    const ifnewuser=async()=>{
        // //if user already exists
        // const result = await db.select().from(USER).where(eq(USER.email,user?.primaryEmailAddress?.emailAddress))
        // console.log(result);
        // //if not add to database
        // if(result?.length==0){
        //     const userresponse = await db.insert(USER).values({
        //         name:user?.fullName,
        //         email:user?.primaryEmailAddress?.emailAddress
        //     }).returning({id:USER.id});
        //     console.log(userresponse)
        // }
        const response = await axios.post('/api/create-user',{user:user})
        console.log(response.data);
    }
  return (
    <div>{children}</div>
  )
}

export default Provider