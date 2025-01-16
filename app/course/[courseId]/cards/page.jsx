"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Carditem from './_components/Carditem';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function cards() {
    const {courseId} = useParams();
    const [flashcards,setflashcards] = useState([]);
    const [isFlipped,setisFlipped] = useState();
    const [api,setApi] =useState();
    useEffect(()=>{
      Getcards();
    },[])
    useEffect(()=>{
      if(!api){
          return ;
      }
      api.on('select',()=>{
        setisFlipped(false)
      })
    },[api])
    const Getcards =async ()=>{
    const result = await axios.post('/api/material-type',{
        courseId:courseId,
        studyType:'cards',

    });
    setflashcards(result?.data)
    console.log('Card: ',result.data)
  }
  const handleClick =()=>{
    setisFlipped(!isFlipped)
  }
  return (
    <div>
      <h2 className='font-bold text-2xl'>Study Cards</h2>
      <p>Study Cards: Your ultimate tool for mastering concepts!</p>
      <div >
        <Carousel setApi={setApi}>
          <CarouselContent>
            {flashcards?.content&&flashcards.content?.map((flashcard,index)=>(
                <CarouselItem key={index}  className='flex items-center justify-center'>
                  <Carditem handleClick={handleClick}
                isFlipped={isFlipped}
                flashcard={flashcard}
                /></CarouselItem>
             ))}         
           </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      
      </div>
    </div>
  )
}

export default cards