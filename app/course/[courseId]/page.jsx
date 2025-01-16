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

      
        <div >
            <Intro course={course}/>
            <StudyMaterial courseId={courseId} course={course}/>
            <List course={course}/>

        </div>
    </div>
  )
}

export default Course