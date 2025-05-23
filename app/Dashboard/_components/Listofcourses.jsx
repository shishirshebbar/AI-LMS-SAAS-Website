"use client"

import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Item from './Item';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { Coursecount } from '@/app/_context/Coursecount';

function Listofcourses() {

    const {user} = useUser();
    const [courselist,setcourselist] =useState([]);
    const [loading,setloading]=useState(false);
    const {totalcourses,settotalcourses} = useContext(Coursecount)
    useEffect(()=>{
        user&&GetList();
    },[user])

    const GetList = async () => {
        try {
            setloading(true);
    
            const result = await axios.post('/api/courses', {
                createdBy: user?.primaryEmailAddress?.emailAddress
            });
    
            console.log(result);
            setcourselist(result.data.result);
            settotalcourses(result.data.result?.length)
        } catch (error) {
            if (error.response) {
                console.error('Response Error:', error.response.data);
            } else if (error.request) {
                console.error('Request Error:', error.request);
            } else {
                console.error('Error:', error.message);
            }
            alert('Something went wrong while fetching courses. Please try again later.');
            console.log("No")
        } finally {
            setloading(false);
        }
    };
    
    
  return (
    <div className='mt-10'>
        <h2 className='font-bold text-2xl flex justify-between items-center mb-5'>
            Your study material
            <Button variant="outline"
            onClick={GetList}
            className="border-primary"><RefreshCcw/>Refresh</Button>
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-5'>
            {loading==false?courselist?.map((course,index)=>{
               return <Item course={course} key={index}/>
            }):
            [1,2,3,4,5,6].map((item,index)=>(
                <div key={index} className='h-56 w-full bg-slate-200 rounded-lg animate-spin'></div>
            ))}
        </div>
    </div>
  )
}

export default Listofcourses