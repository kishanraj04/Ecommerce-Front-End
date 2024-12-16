import React from 'react'
import { FaSearch } from "react-icons/fa";


function Header() {
  return (
    <div className='flex bg-black h-[5rem] text-white justify-between items-center shadow-lg'>


        <div className='ml-[2rem]'>
             logo
        </div>


        <div className='flex justify-center items-center mr-[3rem] w-[40%] h-[100%] justify-evenly'>

            <div className='h-full flex items-center w-[70%]'>
                 <input type="text" className='h-[50%] w-[80%] ' placeholder='Search Your Products ...'/>
                 
                 <div className='w-[20%] h-[50%] flex justify-center items-center bg-red-600 rounded-r-xl'>
                 <span><FaSearch/></span>
                 </div>
            </div>

            <div>
                  <button>login</button>
            </div>
        </div>
    </div>
  )
}

export default Header