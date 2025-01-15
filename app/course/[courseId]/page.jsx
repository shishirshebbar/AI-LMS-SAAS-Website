"use client"
import Header from '@/app/Dashboard/_components/Header';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Intro from './_components/Intro';
import StudyMaterial from './_components/StudyMaterial';
import List from './_components/List';

function Course() {
    const {courseId}  = useParams();
    const [course,setcourse] = useState();
    useEffect(()=>{
        Getcourse();
    },[]);

    const Getcourse = async () => {
        
          const result = await axios.get('/api/courses?courseId=' + courseId);
          console.log(result); 
          setcourse(result.data.result);
      
       
      };
      
  return (
    <div>

        <Header/>
        <div className='mx-10 md:mx-36 lg:px-60 mt-10'>
            <Intro course={course}/>
            <StudyMaterial courseId={courseId}/>
            <List course={course}/>

        </div>
    </div>
  )
}

export default Course