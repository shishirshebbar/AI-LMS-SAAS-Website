import Image from 'next/image'
import React, { useState } from 'react'

function Tab({selectstudytype}) {
    const courses=[
        {
            name:'Exam',
            icon:'/exam.jpg'
        },
        {
            name:'Interview',
            icon:'/job.jpg'
        },
        {
            name:'Coding',
            icon:'/code.png'
        },
        {
            name:'Practice',
            icon:'/practice.png'
        },
        {
            name:'Other',
            icon:'/knowledge.png'
        }
    ]
    const [selectedcourse,setselectedcourse] = useState();
  return (
    <div>

        <h2 className='text-center mb-2 text-lg'>For which of the following options do you want to create a learning material?</h2>
        <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5'>
            {
                courses.map((course,index)=>(
                    <div key={index} className={`p-4  flex flex-col items-center justify-center  border rounded-xl hover:border-blue-900 cursor-pointer ${course?.name==selectedcourse&&'border-primary'}`} 
                    onClick={()=>{setselectedcourse(course.name);selectstudytype(course.name)}}
                    >
                        <Image src={course.icon} alt={course.name} width={80} height={50}/>
                        <h2 className='text-sm'>{course.name}</h2>
                        
                        </div>
                ))
            }
        </div>
    </div>
  )
}

export default Tab