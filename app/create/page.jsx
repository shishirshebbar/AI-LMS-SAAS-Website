"use client"
import React, { useState } from 'react'
import Tab from './_components/Tab'
import { Button } from '@/components/ui/button';
import Topic from './_components/Topic';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from "@/hooks/use-toast"




function page() {
    const { toast } = useToast()
    const [stage,setstage]=useState(0);
    const [formdata,setformdata] = useState([]);
    const {user} = useUser();
    const [loading,setloading] = useState(false);
    const router = useRouter();
    const input=(name,value)=>{
        setformdata(prev=>({
            ...prev,
            [name]:value
        }))
        console.log(formdata)

    }
    //save user input and to generate
    const generatecourse = async () => {
        
            const courseId = uuidv4();
            setloading(true); // Start loading before the API call
            const result = await axios.post('/api/generate-course', {
                courseId,
                ...formdata,
                createdBy: user?.primaryEmailAddress?.emailAddress,
            });
            setloading(false);
            router.replace('/Dashboard');
            toast({
                description: "Study material is generating,click on refresh button",
              })
          
            console.log(result.data.result.resp);
       
            
    };
    
    
  return (
    <div className='flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20'>
    <h2 className='font-bold text-4xl text-primary'>Create New Study Material</h2>
    <p className='text-gray-500 text-lg'>
        Use AI to create personalized and engaging study materials effortlessly.
    </p>
    <div className='mt-10'>
        {stage==0?<Tab selectstudytype={(value)=>input('courseType',value)}/>
        :<Topic
        settopic={(value)=>input('topic',value)}
        setdifficultylevel={(value)=>input('difficultyLevel',value)}
        />}
    </div>
    <div className='flex justify-between w-full mt-32'>
        {stage!=0?<Button variant="outline"
        onClick={()=>setstage(stage-1)}
        >Previous</Button>:'-'}
        {stage==0?<Button onClick={()=>setstage(stage+1)}>Next</Button>:
        <Button onClick={generatecourse} disabled={loading}>
            {loading?<Loader className='animate-spin'/>:'Generate'}
            </Button>}
    </div>
</div>

  )
}

export default page