import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import purple_flare from "../../../public/icons/Purple-Lens-Flare-PNG.png"
import heroImgMan from "../../../public/icons/heroImgman.png"
import heroImgH  from "../../../public/icons/heroimguni.png"
import chain from "../../../public/icons/chain.png"
import fire from "../../../public/icons/fire.png"
import starr from "../../../public/icons/starr.png"
import star2 from "../../../public/icons/sata gra.png"

const Hero_comp = () => {
  return (
    <section className=' border-t-[0.0625rem] border-[#FFFFFF2E] border-b-[0.0625rem] mt-[4.3rem] bg-[#150E28]'>
      
      <div className='w-[100%] md:text-right text-center mt-2 relative'>
      <Image src={starr} alt='bright star' className='absolute top-[3rem] left-[5rem] animate-spin'/>
      <Image src={star2} alt='bright star' className='absolute top-[30rem] left-[20rem] animate-spin'/>
        <p className='md:text-[2.25rem] text-[1rem] font-bold  mr-[10%]'>Igniting a Revolution in HR Innovation</p>
        <svg className='md:ml-[75.5%] w-[8rem] ml-[51%]' xmlns="http://www.w3.org/2000/svg" width="255" height="17" viewBox="0 0 255 17" fill="none">
  <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5"/>
        </svg>
      </div>

      <div className='md:flex block'>
        <div className='md:w-[50%] md:pl-[2rem] md:text-left text-center'>
            <p className='md:text-[4rem] text-[2.7rem] font-bold leading-none block mt-2'>get linked Tech <br /> hackathon <span className='text-[#D434FE]'>1.0
            <Image src={chain} alt='chain' className='inline-block'/>
            <Image src={fire} alt='fire' className='inline-block'/>
            </span></p>
            <p >Participate in getlinked tech Hackathon 2023 stand a chance <br /> to win a Big prize</p>
            <Link href="/register">
              <button className='h-[3.225rem] w-[10.75rem] rounded-[0.25rem] bg-gradient-to-r from-[#FF26B9] via-[#D434FE] to-[#903AFF] text-[1rem] hover:scale-[109%] transition mt-[2.01rem]' >Register</button>
            </Link>

            <div className='flex mt-[3rem] text-[3rem] md:justify-start justify-center'>
              <p className='pr-[.7rem]'>00 <span className='text-[0.575rem]'>H</span></p>
              <p className='pr-[.7rem]'>00 <span className='text-[0.575rem]'>M</span></p>
              <p className='pr-[.7rem]'>00 <span className='text-[0.575rem]'>S</span></p>
            </div>  
        </div>

        {/* image comp */}
        <div className='md:w-[50%] relative'>
          <Image src={heroImgMan} alt='hero Image' />
          <Image src={heroImgH} alt='hero Image' className='absolute top-0 left-0 h-[99%] animate-pulse'/>
        </div>
        

      </div>
    </section>
  )
}

export default Hero_comp