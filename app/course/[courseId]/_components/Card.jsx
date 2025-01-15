import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
//study material card item
function Card({item,content}) {
  return (
    <div className={`border shadow-md rounded-lg p-5 flex flex-col items-center mt-5 ${content?.[item.type]?.length==null&&'grayscale'}`}>
        {content?.[item.type]?.length==null?
        <h2 className='p-1 px-5 text-white bg-red-500 rounded-full text-[10px] mb-2'>Generate</h2>
        :<h2 className='p-1 px-5 text-white bg-yellow-500 rounded-full text-[10px] mb-2'>Prepare</h2>}

        <Image src={item.image} alt = {item.title} width={100} height={100}/>
        <h2 className='font-medium'>{item.title}</h2>
        <p className='text-gray-500 text-sm text-center'>{item.description}</p>
        {content?.[item.type]?.length==null?
        <Button className="mt-3 w-full">Generate</Button>:
        <Button className="mt-3 w-full">View</Button>       }
    </div>
  )
}

export default Card