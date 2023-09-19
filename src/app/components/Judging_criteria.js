import React from 'react'
import Image from 'next/image'
import judgingCriteriaImg from '../../../public/icons/criteria_img.png'
import star from "../../../public/icons/sata gra.png"
import star_white from "../../../public/icons/star_white.png"

const Judging_criteria = () => {
  return (
    <section className='block md:flex justify-between md:h-auto] bg-[#140D27] m-auto text-center md:pl-[1.9rem] md:pt-0 pt-[3rem] border-b-2 pb-[3rem] relative'>
        {/* stars */}
        <Image src={star} alt='star image' className='absolute top-[1rem] left-[12rem] md:top-[4rem] md:left-[12rem]'/>

        <Image src={star_white} alt='star image' className='absolute top-[10rem] left-[16rem] md:top-[19rem] md:left-[21rem]'/>


        <div className='md:w-[50%] md:h-[100%] w-[70%] h-[70%] m-auto md:p-[3rem] md:pl-[3rem]'>
            <Image src={judgingCriteriaImg} alt='intro image' className='md:h-[100%] md:w-[90%] h-[80%] w-[80%] m-auto md:mb-0 mb-[1.4rem]'/>
        </div>

        <div className='md:w-[50%] w-[100%] md:mt-[1rem] md:text-left text-center bg-[#140D27]'>
            <p className='md:text-[2rem] text-[1.95rem] font-bold'> Judging Criteria<br />
                <span className='text-[#D434FE] font-extrabold'> Key attributes</span>
            </p>
            <p className='pt-[.7rem] md:text-[0.875rem] text-[0.85rem] leading-[1.4rem] md:w-[80%] w-[80%] md:m-0 m-auto p-0'>
            <span className='text-[#D434FE] font-extrabold'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
            </p>

            <p className='pt-[.7rem] md:text-[0.875rem] text-[0.85rem] leading-[1.4rem] md:w-[80%] w-[80%] md:m-[0] m-auto'>
            <span className='text-[#D434FE] font-extrabold'>Functionality: </span> 
             Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
            </p>

            <p className='pt-[.7rem] md:text-[0.875rem] text-[0.85rem] leading-[1.4rem] md:w-[80%] w-[80%] md:m-[0] m-auto'>
            <span className='text-[#D434FE] font-extrabold'>Impact and Relevance: </span> 
            Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social,economic, or environmental benefits..
            </p>

            <p className='pt-[.7rem] md:text-[0.875rem] text-[0.85rem] leading-[1.4rem] md:w-[80%] w-[80%] md:m-[0] m-auto'>
            <span className='text-[#D434FE] font-extrabold'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
            Judges would consider the complexity of the code, the use of advanced 
            technologies or algorithms, and the scalability of the solution.
            </p>

            <p className='pt-[.6rem] md:text-[0.875rem] text-[0.85rem] leading-[1.4rem] md:w-[80%] w-[80%] md:m-[0] m-auto'>
            <span className='text-[#D434FE] font-extrabold'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
            </p>

            <button className='h-[2.425rem] w-[10.75rem] mt-[.8rem] rounded-[0.25rem] bg-gradient-to-r from-[#FF26B9] via-[#D434FE] to-[#903AFF] text-[1rem] hover:scale-[109%] transition m-auto md:mt-[2rem]' >Register</button>
        </div>



        </section>
  )
}

export default Judging_criteria