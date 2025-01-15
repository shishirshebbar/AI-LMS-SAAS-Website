//Chapter list
import React from 'react'

function List({course}) {
    const Chapters = course?.courseLayout?.chapters;
  return (
    <div className='mt-5'>
        <h2 className='font-medium text-xl'>
        Chapters
        </h2>

        <div className='mt-3'>
            {Chapters?.map((chapter,index)=>(
                <div className='mt-3 flex items-center gap-5 p-4 border shadow-md mb-2 rounded-lg cursor-pointer'>
                    <div>
                        <h2 className='font-medium'>{chapter?.chapter_title}</h2>
                        <p className='text-gray-500 text-sm'>{chapter?.summary}</p>
                        </div>
                </div>
            ))}
        </div>
        </div>
  )
}

export default List