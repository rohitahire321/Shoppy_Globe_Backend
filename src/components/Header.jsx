import React from 'react'
import OIP from '../assets/OIP.jpg'
import {Link} from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <div className='bg-blue-950 w-full fixed top-0 left-0 z-50'>
      <nav className='flex justify-between px-12 items-center h-20'>
        <img src={OIP} className='w-15 h-15 rounded-4xl' alt="Logo"/>
        <ul className='flex gap-16 text-lg'>
          <div className='flex m-4'>
            <span className='mt-1'><IoIosHome /></span>
            <li className='px-2'> <Link to='/'>Home</Link> </li>
          </div>
          <div className='flex m-4'>
            <span className='mt-1'><CiSearch/></span>
            <li className='px-2 hover:text-blue-500'>Search</li>
          </div>
          <div className='flex m-4'>
            <span className='mt-1'><IoMdCart/></span>
            <li className='px-2'><Link to='/Cart'>Cart- {cartItems.length}</Link></li>
          </div>
        </ul>
      </nav>
      
      
    </div>
  )
}

export default Header
