import React from 'react'
import Navbar from './Navbar'
import Careosal from './Careosal'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <header><Navbar/></header>
        
        <main className='mainpageset'>{children}</main>
        <footer><Footer/></footer>
  
      
    </div>
  )
}

export default Layout
