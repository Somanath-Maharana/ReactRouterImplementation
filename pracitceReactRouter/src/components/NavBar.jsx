import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    

        <nav className='h-[5%] w-full bg-green-400 flex justify-center items-center gap-6 p-3'>
        <NavLink to="/home"><h2 className='text-green-600 hover:text-lime-500'>Home</h2></NavLink>
        <NavLink to="/login"><h2 className='text-green-600 hover:text-lime-500'>Log In</h2></NavLink>
        <NavLink to="/about"><h2 className='text-green-600 hover:text-lime-500'>About</h2></NavLink>
        </nav>
      
    
  )
}

export default NavBar
