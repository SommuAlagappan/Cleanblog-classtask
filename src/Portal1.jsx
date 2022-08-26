import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Content from './Content'


function Portal() {
  return <div>
     <Navbar/>
     <Header/>
     <Content/>
     <Footer/>
 
     
      </div> 
    
}

export default Portal