import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RefreshCcw } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

function Item({course}) {
  
  const now = new Date();
const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;


return (
  <div className='border rounded-lg shadow-md p-4'>

      <div>
          <div className='flex justify-between items-center'>
              <Image src={'/study.png'} alt="study" width={100} height={100}/>
              <h2 className='text-[10px] p-1 px-2 rounded-full bg-blue-500'>
                  {formattedDate}</h2> 
          </div>
          <h2 className='mt-3'>{course?.courseLayout?.course_title}</h2>
          <p className='text-xs text-gray-500 mt-2 line-clamp-3'>{course?.courseLayout?.summary}</p>
          {/* line-clamp-2 */}
        <div className='mt-3'>
          <Progress value={0}/>
        </div>
        <div className='mt-3 flex justify-end'>
          {course?.status=='Generating'?
          <h2 className='text-sm p-1 px-2 flex gap-2 items-center rounded-full bg-gray-500'>
            <RefreshCcw className='h-5 w-5 animate-spin'/>
            Generating...</h2>
          :
          <Button>View</Button>}
        </div>
      </div>

  </div>
)
}

export default Item