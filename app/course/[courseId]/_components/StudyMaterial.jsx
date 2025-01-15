import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

function StudyMaterial({courseId}) {
  const [content,setcontent] =useState();
  const material = [
    {
      title:'Notes',
      description:'Study our notes',
      image:'/notes.jpg',
      route:'/notes',
      type:'notes'
    },
    {
      title:'Cards',
      description:'Quick revision',
      image:'/card.jpg',
      route:'/cards',
      type:'cards'
    },
    {
      title:'Test',
      description:'Test your knowledge',
      image:'/quiz.jpg',
      route:'/quiz',
      type:'test'
    },
    {
      title:'Q&A',
      description:'Study our Q&As',
      image:'/quiz.jpg',
      route:'/quiz',
      type:'qa'
    }
  ]
  useEffect(()=>{
    Getmaterial();
  },[])
  const Getmaterial =async ()=>{
    const result = await axios.post('/api/material-type',{
      courseId:courseId,
      studyType:'ALL'
    })
    console.log(result?.data)
    setcontent(result.data)
  }
  return (
    <div className='mt-5'>
      <h2 className='font-medium text-xl text-center'>Study Material</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {material.map((item,index)=>(
          <Card item={item} key={index} content={content}/>
        ))}
      </div>
    </div>
  )
}

export default StudyMaterial