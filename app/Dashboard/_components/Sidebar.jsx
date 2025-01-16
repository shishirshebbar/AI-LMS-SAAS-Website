"use client"
import { Coursecount } from '@/app/_context/Coursecount'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { DollarSign,  PanelLeftDashed, UserCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'

function Sidebar() {
    const {totalcourses,settotalcourses} = useContext(Coursecount);
    const menu=[
        {
            name:'Workspace',
            icon:PanelLeftDashed,
            path:'/Dashboard'

        },{
            name:'Advance',
            icon:DollarSign,
            path:'/Dashboard/Advance'

        },{
            name:'Bio',
            icon:UserCircle,
            path:'/Dashboard/Bio'

        }
    ]
    const path = usePathname();
    return (
        <div className='h-screen shadow-md '>
            
            <div className='mt-5'>
                <Link href={'/create'} className='w-full'>
                                <Button className="w-full rounded-lg mt-5 ">
                    Create new
                </Button>
                </Link>

                <div  className='mt-5'>
                    {menu.map((menu,index)=>(
                        <div key ={index} className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg cursor-pointer ${path==menu.path&&'bg-blue-50'}`}>
                            <menu.icon/>
                            <h2>{menu.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='border p-5 bg-slate-100 rounded-lg absolute bottom-10 w-[85%]'>
                <h2 className='text-lg'>Credit balance: {(5-totalcourses)}</h2>
                <Progress value={(totalcourses/5)*100}/>
                <h2 className='text-sm'>{totalcourses} out of 5 credits  left</h2>
                <Link href={'/Dashboard/Advance'} className='text-primary text-m mt-5'>Level up to do more.</Link>
            </div>
        </div>
    )
}

export default Sidebar