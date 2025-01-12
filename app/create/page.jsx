"use client"
import React, { useState } from 'react'
import Tab from './_components/Tab'
import { Button } from '@/components/ui/button';
import Topic from './_components/Topic';

function page() {
    const [stage,setstage]=useState(0);
    const [formdata,setformdata] = useState([]);
    const input=(name,value)=>{
        setformdata(prev=>({
            ...prev,
            [name]:value
        }))
        console.log(formdata)

    }
  return (
    <div className='flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20'>
    <h2 className='font-bold text-4xl text-primary'>Create New Study Material</h2>
    <p className='text-gray-500 text-lg'>
        Use AI to create personalized and engaging study materials effortlessly.
    </p>
    <div className='mt-10'>
        {stage==0?<Tab selectstudytype={(value)=>input('studyType',value)}/>
        :<Topic
        settopic={(value)=>input('topic',value)}
        setdifficultylevel={(value)=>input('difficultyLevel',value)}
        />}
    </div>
    <div className='flex justify-between w-full mt-32'>
        {stage!=0?<Button variant="outline"
        onClick={()=>setstage(stage-1)}
        >Previous</Button>:'-'}
        {stage==0?<Button onClick={()=>setstage(stage+1)}>Next</Button>:<Button>Generate</Button>}
    </div>
</div>

  )
}

export default page