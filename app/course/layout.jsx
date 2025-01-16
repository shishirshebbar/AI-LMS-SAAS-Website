import React from 'react'
import Header from '../Dashboard/_components/Header'

function layout({children}) {
  return (
    <div>
        <Header/>
        <div className='mx-10 md:mx-36 lg:px-60 mt-10'>
            {children}
        </div>
    </div>
  )
}

export default layout