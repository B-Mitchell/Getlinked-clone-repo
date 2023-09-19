import React from 'react'
import Image from 'next/image'
import RGimage from "../../../public/icons/R_AND_G_img.png"

const RulesAndGuidelines = () => {
  return (
    <section className='block md:flex md:justify-between md:h-[30rem] bg-[#140D27] m-auto text-center md:pl-[2rem] md:pt-0 pt-[1rem] border-b-2 '>


        <div className='md:order-1 order-2 md:w-[50%] w-[100%] md:text-left text-center md:pt-[10%] bg-[#140D27] md:pl-[4rem]'>
            <p className='md:text-[2rem] text-[1.95rem] font-bold'> Rules and<br />
                <span className='text-[#D434FE] font-extrabold'>Guidelines</span>
            </p>
            <p className='pt-[1rem] md:text-[0.875rem] text-[0.9925rem] md:leading-[1.71875rem] leading-[1.71875rem] md:w-[100%] w-[60%] md:m-[0] m-auto'>
            Our tech hackathon is a melting pot of 
            visionaries, and its purpose is as clear as day:
            to shape the future. Whether you're a coding
            genius, a design maverick, or a concept 
            wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world 
            problems, pushing the boundaries of 
            technology, and creating solutions that can 
            change the world, that's what we're all about!
            </p>
        </div>

        <div className='md:order-2 order-1 md:w-[50%] md:h-[100%] w-[70%] h-[70%] m-auto md:p-[3rem] md:pl-[3rem]'>
            <Image src={RGimage} alt='intro image' className='md:h-[100%] md:w-[90%] h-[80%] w-[80%] m-auto'/>
        </div>

    </section>
  )
}

export default RulesAndGuidelines