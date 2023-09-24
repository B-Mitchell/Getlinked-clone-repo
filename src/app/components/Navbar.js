"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import getlinkedLOGO from "../../../public/icons/getlinked-logo.png";
import navCancel from "../../../public/icons/navCancel.png"
import Link from 'next/link';

const Navbar = () => {

  const [isOpen , setIsOpen] = useState(false)

  return (
    <nav className='h-[4.3125rem] bg-[#150E28] flex justify-between top-0 fixed w-[100%] '>  
        
        <div className='ml-[3.5rem] pt-[1.5rem] '>
            <Image src={getlinkedLOGO} alt='getlinked logo' />
        </div>
        
        <div className='md:flex md:justify-between sm:pt-[.5rem]  bg-[#150E28] '>

            <ul className='md:flex md:mr-[3rem] text-[1.125rem] hidden'>
                <li className='text-[#fff] p-[.5rem] pt-[1.3rem] hover:bg-gradient-to-r from-[#FF26B9] via-[#D434FE] to-[#903AFF] bg-clip-text text-opacity-60'> <Link href='/'>Timeline</Link> </li>
                <li className='text-[#fff] p-[.5rem] pt-[1.3rem] hover:bg-gradient-to-r from-[#FF26B9] via-[#D434FE] to-[#903AFF] bg-clip-text text-opacity-60'> <a href='#'>Overview</a></li>
                <li className='text-[#fff] p-[.5rem] pt-[1.3rem] hover:bg-gradient-to-r from-[#FF26B9] via-[#D434FE] to-[#903AFF] bg-clip-text text-opacity-60'> <a href='#'>FAQs</a> </li>
                <li className='text-[#fff] p-[.5rem] pt-[1.3rem] hover:bg-gradient-to-r from-[#FF26B9] via-[#D434FE] to-[#903AFF] bg-clip-text text-opacity-60' > <Link href='/contact'>Contact</Link></li>
            </ul>

            <button className='h-[3.225rem] w-[10.75rem] mr-[3.5rem] rounded-[0.25rem] bg-gradient-to-r from-[#FF26B9] via-[#D434FE] to-[#903AFF] text-[1rem] hover:scale-[109%] transition md:block hidden' ><Link href="/register">Register</Link></button>

            
            <svg className='mr-[3.5rem] md:hidden mt-[1.7rem] hover:cursor-pointer hover:scale-[109%] transition' onClick={() => setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
            <path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white"/>
            </svg>
        </div>

        {
          isOpen ? 
          <div className='fixed md:hidden w-[100%] h-[25rem] bg-[#150E28]  pl-[3rem] '>
          <Image className='right-0 fixed mr-[3.5rem] mt-[1.7rem] cursor-pointer hover:scale-[109%] transition' src={navCancel} alt='cancel navbar' onClick={() => setIsOpen(false)}/>
          <ul className='mt-[5rem]'>
            <li className='mt-[1rem] hover:scale-[103%] transition '><Link href='/'>Timeline</Link></li>
            <li  className='mt-[1rem] hover:scale-[103%] transition'><a href='#'>Overview</a></li>
            <li className='mt-[1rem] hover:scale-[103%] transition'><a href='#'>FAQs</a></li>
            <li className='mt-[1rem] hover:scale-[103%] transition'> <Link href='/contact'>Contact</Link></li>
          </ul>

          <Link href="/register">
          <button className='h-[3.225rem] w-[10.75rem] rounded-[0.25rem] bg-gradient-to-r from-[#FF26B9] via-[#D434FE] to-[#903AFF] text-[1rem] hover:scale-[109%] transition mt-[2.81rem]' >Register</button></Link>
        </div>
        : 
        console.log("Navbar active")
        }
    </nav>
  )
}

export default Navbar