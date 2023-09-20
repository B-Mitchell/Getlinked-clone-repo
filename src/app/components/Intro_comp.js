import React from 'react'
import Image from 'next/image'
import intro_comp from "../../../public/icons/intro_comp_img.png"
// import bigIdea from "../../../public/icons/big_idea_comp.png"

const Intro_comp = () => {
  return (
    <section className='block md:flex justify-between md:h-[30rem] bg-[#140D27] m-auto text-center md:pl-[1.9rem] md:pt-0 pt-[1rem] border-b-2 pb-[3rem]'>

        <div className='md:w-[50%] md:h-[100%] w-[70%] h-[70%] m-auto md:p-[3rem] md:pl-[3rem]'>
            <Image src={intro_comp} alt='intro image' className='md:h-[100%] md:w-[90%] h-[80%] w-[80%] m-auto md:mb-0 mb-[1.4rem]'/>
        </div>

        <div className='md:w-[50%] w-[100%] md:text-left text-center md:pt-[10%] bg-[#140D27] '>
            <p className='md:text-[2rem] text-[1.95rem] font-bold'> Introduction to getlinked<br />
                <span className='text-[#D434FE] font-extrabold'> tech Hackathon 1.0</span>
            </p>
            <p className='pt-[1rem] md:text-[0.875rem] text-[0.9925rem] md:leading-[1.71875rem] leading-[1.71875rem] md:w-[70%] w-[80%] md:m-[0] m-auto'>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!
            </p>
        </div>


    </section>
  )
}

export default Intro_comp