"use client"
import { Coursecount } from '@/app/_context/Coursecount'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { DollarSign,  HelpCircle,  PanelLeftDashed } from 'lucide-react'
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
            name:'FAQs',
            icon:HelpCircle,
            path:'/Dashboard/FAQ'

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

                <div className='mt-5'>
                    {menu.map((menu, index) => (
                        <Link key={index} href={menu.path} className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg cursor-pointer`}>
                            <menu.icon />
                            <h2>{menu.name}</h2>
                        </Link>
                    ))}
                </div>

            </div>
            <div className='border p-5 bg-slate-100 rounded-lg absolute bottom-10 w-[85%]'>
                <h2 className='text-lg'>Credit balance: {(10-totalcourses)}</h2>
                <Progress value={(totalcourses/5)*100}/>
                <h2 className='text-sm'>{(10-totalcourses)} out of 10 credits  left</h2>
                <Link href={'/Dashboard/Advance'} className='text-primary text-m mt-5'>Level up to do more.</Link>
            </div>
        </div>
    )
}

export default Sidebar