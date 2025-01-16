"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
    const {courseId} =useParams();
    const [notes,setnotes] = useState();
    const [count,setcount]  = useState(0);
    const router = useRouter();
    useEffect(()=>{
        Getnotes();
    },[])
    const Getnotes=async()=>{
        const result = await axios.post('/api/material-type',{
            courseId:courseId,
            studyType:'notes'
        });
        console.log(result?.data);
        setnotes(result?.data)
    }
  return notes&& (
    <div>
        <div className='flex gap-5 items-center'>
            {count!=0&&<Button  variant ="outline" size="sm"
            onClick={()=>setcount(count-1)}
            >Previous</Button>}
            {notes?.map((item,index)=>(
                <div key={index} className={`w-full h-2 rounded-full ${index<count?'bg-primary':'bg-gray-300'}`}></div>
            ))}
            <Button size="sm" 
            onClick={()=>setcount(count+1)}
            >Next</Button>
        </div>
            <div className='mt-10'>
            <div dangerouslySetInnerHTML={{
    __html: (notes[count]?.notes || '')?.replace(/[{}"\s,\[\]\n]+/g, ' ')
}} />
            {notes?.length==count&&<div className='flex items-center gap-10 flex-col justify-center'>
                    <h2>The end</h2>
                    <Button  onClick={()=>router.back()}>Go back</Button>
                </div>}


            </div>
    </div>
  )
}

export default page