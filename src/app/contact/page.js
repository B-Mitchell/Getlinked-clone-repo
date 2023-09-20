import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const contact = () => {
  return (
    <section  className='bg-[#150E28] h-[100%]'>
      <Navbar />

      <div className='md:flex md:pl-[6rem] mt-[4.3rem] pt-[1.3rem]'>

        <div className='md:w-[40%] md:block hidden'>
          <p className='text-[#D434FE] text-[2rem] font-semibold'>Get in touch</p>
          <p className='text-[#FFF] text-[1rem] font-normal mt-[1.06rem]'>Contact <br/>Information</p>
          <p className='text-[#FFF] text-[1rem] font-normal mt-[1.06rem]'>27,Alara Street<br />Yaba 100012<br />Lagos State</p>
          <p className='text-[#FFF] text-[1rem] font-normal mt-[1.31rem]'>Call Us : 07067981819</p>
          <p className='text-[#FFF] text-[1rem] font-normal mt-[1.37rem]'>we are open from Monday-Friday<br/>08:00am - 05:00pm</p>

          <p className='text-[#D434FE] text-[1rem] font-normal mt-[2.19rem]'>share on</p>
          <div className='flex w-[30%] justify-between p-[.3rem]'>
            {/* instagram */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white"/>
          </svg>
          {/* X */}
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 19 17" fill="none">
  <path d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z" fill="white"/>
          </svg>
          {/* facebook */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 11 20" fill="none">
  <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#F8F8F8"/>
          </svg>
          {/* linkedIn */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6.93994 5C6.93968 5.53043 6.72871 6.03904 6.35345 6.41392C5.97819 6.78881 5.46937 6.99927 4.93894 6.999C4.40851 6.99874 3.89991 6.78777 3.52502 6.41251C3.15014 6.03725 2.93968 5.52843 2.93994 4.998C2.94021 4.46757 3.15117 3.95897 3.52644 3.58408C3.9017 3.20919 4.41051 2.99874 4.94094 2.999C5.47137 2.99927 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46957 6.93994 5ZM6.99994 8.48H2.99994V21H6.99994V8.48ZM13.3199 8.48H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.9 14.9399 7.13 13.2799 10.16L13.3199 8.48Z" fill="#F8F8F8"/>
          </svg>

          </div>
        </div>

        {/* Contact Us */}
        <form className='md:w-[50%] w-[100%] m-auto md:bg-[#FFFFFF08] bg-[#150E28] h-auto pb-[1rem]'>
          <Link href="/" >
            <svg className='md:hidden block ml-[14.5%] cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
  <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_177_298)"/>
  <path d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667" stroke="white"/>
  <defs>
    <linearGradient id="paint0_linear_177_298" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
      <stop stop-color="#903AFF"/>
      <stop offset="1" stop-color="#FF26B9"/>
    </linearGradient>
  </defs>
            </svg>
          </Link>
        
          <p className='text-[#D434FE] text-[1.25rem] font-semibold ml-[14.5%] mt-[2rem]'>Questions or need assistance?</p>
          <p className='text-[#D434FE] text-[1.25rem] font-semibold ml-[14.5%] mt-[.7rem]'>Let us know  about it!</p>
          {/* Mobile view */}
          <p className='text-[0.75rem] text-[#FFF] ml-[14.5%] pt-[1.5rem] font-normal md:hidden block'>Email us below to any question related <br />to our event</p>

          <input placeholder='First Name' className='w-[70%] m-auto block bg-[#FFFFFF08] p-[.8rem] mt-[2.12rem]'/>
          <input placeholder='Topic' className='w-[70%] mt-[2.63rem] m-auto block bg-[#FFFFFF08] p-[.8rem] md:hidden '/>
          <input placeholder='Mail' className='w-[70%] mt-[2.63rem] m-auto block bg-[#FFFFFF08] p-[.8rem]'/>
          <textarea placeholder='Message' className='max-h-[10rem] min-h-[7.4375rem] min-w-[70%] mt-[2.44rem] m-auto block bg-[#FFFFFF08] p-[.8rem]'/>

          <button className='h-[3.225rem] w-[10.75rem] rounded-[0.25rem] bg-gradient-to-r from-[#FF26B9] via-[#D434FE] to-[#903AFF] text-[1rem] hover:scale-[109%] transition mt-[1.94rem] block m-auto'type='submit' >Submit</button>

          <div className='text-center md:hidden block'>
          <p className='text-[#D434FE] text-[1rem] font-normal mt-[2.19rem]'>share on</p>
          <div className='flex w-[30%] justify-between m-auto p-[.3rem]'>
            {/* instagram */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white"/>
          </svg>
          {/* X */}
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 19 17" fill="none">
  <path d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z" fill="white"/>
          </svg>
          {/* facebook */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 11 20" fill="none">
  <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#F8F8F8"/>
          </svg>
          {/* linkedIn */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6.93994 5C6.93968 5.53043 6.72871 6.03904 6.35345 6.41392C5.97819 6.78881 5.46937 6.99927 4.93894 6.999C4.40851 6.99874 3.89991 6.78777 3.52502 6.41251C3.15014 6.03725 2.93968 5.52843 2.93994 4.998C2.94021 4.46757 3.15117 3.95897 3.52644 3.58408C3.9017 3.20919 4.41051 2.99874 4.94094 2.999C5.47137 2.99927 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46957 6.93994 5ZM6.99994 8.48H2.99994V21H6.99994V8.48ZM13.3199 8.48H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.9 14.9399 7.13 13.2799 10.16L13.3199 8.48Z" fill="#F8F8F8"/>
          </svg>

          </div>
          </div>
        </form>

      </div>
    </section>
  )
}

export default contact