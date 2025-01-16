import React from 'react'
import Header from '../Dashboard/_components/Header'

function layout({children}) {
  return (
    <div>
        <Header/>
        <div >
            {children}
        </div>
    </div>
  )
}

export default layout