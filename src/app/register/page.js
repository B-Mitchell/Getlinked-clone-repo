"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
// import images
import registerImg from "../../../public/icons/registerImg.png"
import human1 from "../../../public/icons/humanImg.png"
import human2 from "../../../public/icons/human2.png"
import congratulations from "../../../public/icons/congratulationRegister.png"
const register = () => {
    const [ modal , setModal ] = useState(false);

    const [teamName , setTeamName] = useState("");
    const [phone , setPhone] = useState(null);
    const [email , setEmail] = useState("");
    const [projectTopic , setProjectTopic] = useState("");
    const [category , setCategory] = useState("");
    const [grpSize , setGrpSize] = useState("");


    const [formData , setFormData] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(teamName+phone+projectTopic+category+grpSize );
        if (teamName  == '') {
            alert("please fill in your details.")
            
        } else if (phone == null) {
            alert("please fill in your details.")
        } else {
            setModal(true);
            setFormData([{
                team_name: teamName,
                phone_number: phone,
                school_email: email,
                project_Topic: projectTopic,
                category_batch: category,
                group_size: grpSize
            }]);
            console.log(formData);
            // clear out the input fields
            setTeamName('');
            setPhone(null);
            setEmail('');
            setProjectTopic('');
            setCategory('');
            setGrpSize('');
        }
        
    }
  return (
    <section className='bg-[#150E28] h-[100%]'>
        <Navbar />
        <p className='text-[#D434FE] text-[2rem] font-semibold md:mt-[3.4rem] md:hidden block mt-[4.3rem] pl-[4rem]'>Register</p>

        <div className='mt-[4.3rem] pt-[2rem] md:flex block w-[100%]'>
            <div className='md:w-[45%] w-[55%] m-auto'>
                <Image src={registerImg} alt='register image' />
            </div>

            {/* form */}
            <form className='md:bg-[#FFFFFF08] md:w-[50%] w-[100%] md:pl-[4rem] pl-[3.5rem] pb-[2rem]' onSubmit={handleSubmit}>
                <p className='text-[#D434FE] text-[2rem] font-semibold md:mt-[3.4rem] md:block hidden'>Register</p>
                <p className='flex text-[0.875rem] font-normal mt-[1.4rem]' >Be a part of this movement!<span className='flex'>
                    <Image src={human1} alt='human' /> 
                    <Image src={human2} alt='human' />
                    </span>
                </p>
                <p className='text-[1.5rem]'>CREATE YOUR ACCOUNT</p>

                {/* Name and phone input */}
                <div className='md:flex block  w-[88%] '>
                
                    <div>
                        <p className='text-[0.875rem] mb-[0.5rem] mt-[2rem]'>Team's Name</p>
                        <input placeholder='Enter the name of your group' className='bg-[#FFFFFF08] text-[0.875rem] text-[#FFFFFF40] h-[2.9375rem] border border-solid border-[#FFF] shadow-sm outline-none rounded-[0.25rem] w-[100%] p-[1rem] active:scale-[108%] transition' value={teamName} onChange={(e) => setTeamName(e.target.value)}/>
                    </div>

                    <div className='md:ml-[7%]'>
                        <p className='text-[0.875rem] mb-[0.5rem] mt-[2rem]'>Phone</p>
                        <input placeholder='Enter your phone number' className='bg-[#FFFFFF08] text-[0.875rem] text-[#FFFFFF40] h-[2.9375rem] border border-solid border-[#FFF] shadow-sm outline-none rounded-[0.25rem] w-[100%] p-[1rem] active:scale-[108%] transition' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>

                </div>

                {/* Email and project topic */}
                <div className='md:flex block w-[88%]'>
                
                    <div>
                        <p className='text-[0.875rem] mb-[0.5rem] mt-[1rem]'>Email</p>
                        <input placeholder='Enter your email address' className='bg-[#FFFFFF08] text-[0.875rem] text-[#FFFFFF40] h-[2.9375rem] border border-solid border-[#FFF] shadow-sm outline-none rounded-[0.25rem] w-[100%] p-[1rem] active:scale-[108%] transition' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className='md:ml-[7%]'>
                        <p className='text-[0.875rem] mb-[0.5rem] mt-[1rem]'>Project Topic</p>
                        <input placeholder='What is your group project topic' className='bg-[#FFFFFF08] text-[0.875rem] text-[#FFFFFF40] h-[2.9375rem] border border-solid border-[#FFF] shadow-sm outline-none rounded-[0.25rem] w-[100%] p-[1rem] active:scale-[108%] transition' value={projectTopic} onChange={(e) => setProjectTopic(e.target.value)}/>
                    </div>

                </div>
                {/* Category and group size */}
                <div className='flex w-[88%]'>
                
                    <div>
                        <p className='text-[0.875rem] mb-[0.5rem] mt-[1rem]'>Category</p>
                        <select className='bg-[#FFFFFF08] text-[0.875rem] text-[#FFFFFF40] h-[2.9375rem] border border-solid border-[#FFF] shadow-sm outline-none rounded-[0.25rem] w-[100%] px-[1.4rem] active:scale-[108%] transition' value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="" disabled selected>Select your category</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Full-stack">Full-stack</option>
                        </select>
                    </div>

                    <div className='ml-[7%]'>
                        <p className='text-[0.875rem] mb-[0.5rem] mt-[1rem]'>Group size</p>
                        <select className='bg-[#FFFFFF08] text-[0.875rem] text-[#FFFFFF40] h-[2.9375rem] border border-solid border-[#FFF] shadow-sm outline-none rounded-[0.25rem] w-[100%] px-[1rem] active:scale-[108%] transition' value={grpSize} onChange={(e) => setGrpSize(e.target.value)}>
                        <option value="" disabled selected>Select</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5 and above">5 and above</option>
                        </select>
                    </div>

                </div>
                <p className='text-[#FF26B9] text-[0.75rem] italic mt-[1.44rem]'>Please review your registration details before submitting</p>
                <div className='flex mt-[1rem]'>
                    <input type='checkBox' className='mr-[.3rem]' />
                    <p className='text-[0.75rem] active:scale-[108%] transition'>I agreed with the event terms and conditions  and privacy policy</p>
                </div>

                <button className='h-[3.225rem] w-[88%] mt-[1.3rem] rounded-[0.25rem] bg-gradient-to-r from-[#FF26B9] via-[#D434FE] to-[#903AFF] text-[1rem] hover:scale-[109%] transition block '>Register</button>
            </form>
        </div>
       
       {
        modal ? 
        <div className='bg-[#150E28] fixed inset-0 items-center z-50 bg-opacity-70'>
        <div className='border border-[#D434FE] rounded-[0.3125rem] md:w-[50%] w-[80%] m-auto md:mt-[5%] mt-[19.8%] pb-[1rem]'>

            <div className='w-[70%] m-auto'>
                <Image src={congratulations} alt='congrats' />
            </div>
            
            <p className='text-[1.8rem] font-semibold text-center '>Congratulations <br />you have successfully Registered!</p>

            <p className='text-[0.875rem] text-center mt-[.7rem]'>Yes, it was easy and you did it!<br />check your mail box for next step</p>

            <button className='h-[3.225rem] w-[50%] m-auto mt-[.8rem] rounded-[0.25rem] bg-gradient-to-r from-[#FF26B9] via-[#D434FE] to-[#903AFF] text-[1rem] hover:scale-[109%] transition block ' onClick={() => setModal(false)}>Back</button>
        </div>
       
    </div>
        : 
        <h2></h2>
       }
    </section>
  )
}

export default register