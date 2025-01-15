import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'
//course intro card
function Intro({course}) {
  return (
    <div className='flex gap-5 items-center p-10 border shadow-md  rounded-lg'>
        <Image src={'/study.png'} alt="study" width={100} height={100}/>
        <div>
            <h2 className='font-semibold text-2xl'>{course?.courseLayout?.course_title}</h2>
            <p className='mt-1'>{course?.courseLayout?.summary}</p>
            <Progress className="mt-3"/>
            <h2 className='mt-3 text-lg text-primary'>Total no. of chapters: {course?.courseLayout?.chapters?.length}</h2>
        </div>

    </div>
  )
}

export default Intro