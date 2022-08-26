import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Post from './Post';


function Portal2() {
  return <div>
    <Navbar/>
     <Post/>
      </div> 
    
}

export default Portal2