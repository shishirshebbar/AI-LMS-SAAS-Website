"use client"

import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Item from './Item';

function Listofcourses() {

    const {user} = useUser();
    const [courselist,setcourselist] =useState([]);
    useEffect(()=>{
        user&&GetList();
    },[user])

    const GetList = async () => {
        try {
            const result = await axios.post('/api/courses', {
                createdBy: user?.primaryEmailAddress?.emailAddress
            });
            console.log(result);
            setcourselist(result.data.result);
        } catch (error) {
            // Log detailed error message
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error('Response Error:', error.response.data);
            } else if (error.request) {
                // Request was made but no response was received
                console.error('Request Error:', error.request);
            } else {
                // Something went wrong while setting up the request
                console.error('Error:', error.message);
            }
            alert('Something went wrong while fetching courses. Please try again later.');
        }
    }
    
  return (
    <div className='mt-10'>
        <h2 className='font-bold text-2xl'>
            Your study material
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-5'>
            {courselist?.map((course,index)=>{
               return <Item course={course} key={index}/>
            })}
        </div>
    </div>
  )
}

export default Listofcourses