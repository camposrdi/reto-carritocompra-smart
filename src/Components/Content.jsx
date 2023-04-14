import React from 'react'
import Header from './Header.jsx'

function Content({children}) {
  return ( 
    <>
     <Header />

    {children}
    
    <div> Footer </div>
    
    </>
  )
}

export default Content