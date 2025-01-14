import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RefreshCcw } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

function Item({course}) {
  const studyMaterial = course?.courseLayout?.studyMaterial;
  return (
    <div className='border rounded-lg shadow-md p-4'>

        <div>
            <div className='flex justify-between items-center'>
                <Image src={'/study.png'} alt="study" width={100} height={100}/>
                <h2 className='text-[10px] p-1 px-2 rounded-full bg-blue-500'>
                    Date</h2> 
            </div>
            <h2 className='mt-3'>{studyMaterial?.title}</h2>
            <p className='text-xs text-gray-500 mt-2'>{studyMaterial?.description}</p>
            {/* line-clamp-2 */}
          <div className='mt-3'>
            <Progress value={0}/>
          </div>
          <div className='mt-3 flex justify-end'>
            {course?.status=='Generating'?
            <h2 className='text-sm p-1 px-2 flex gap-2 items-center rounded-full bg-gray-500'>
              <RefreshCcw className='h-5 w-5'/>
              Generating...</h2>
            :
            <Button>View</Button>}
          </div>
        </div>

    </div>
  )
}

export default Item