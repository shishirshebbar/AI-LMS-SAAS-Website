import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function Topic({settopic,setdifficultylevel}) {
  return (
    <div className='mt-10 w-full flex flex-col'>
        <h2>
    Enter the topic you wish to explore, and let our AI generate comprehensive and personalized LMS study material just for you.
</h2>
    <Textarea placeholder="Enter the topic for your study material here"  
    className="mt-2 w-full" onChange={(event)=>settopic(event.target.value)}/>
    <h2 className='mt-4'>Choose the difficulty level that suits your learning needs</h2>
    <Select onValueChange={(value)=>setdifficultylevel(value)}>
        <SelectTrigger className="w-full mt-3">
            <SelectValue placeholder="Complexity level"/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Moderate">Moderate</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
        </SelectContent>
    </Select>
    </div>
  )
}

export default Topic