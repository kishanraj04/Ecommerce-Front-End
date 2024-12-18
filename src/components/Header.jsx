import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { BiSolidCartAdd } from "react-icons/bi";
import { NavLink } from 'react-router-dom';



function Header() {

 const cartItem = useSelector((state)=>state.cart.cartItem)
 const cartItemqty = useSelector((state)=>state.cart.cartItemqty)

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

            <div className='flex justify-center items-center gap-6 w-[30%] h-[50%]'>
                  <button>login</button>
                  <div className='relative'>
                    <NavLink to="/cart">
                    <BiSolidCartAdd size={30}/>
                    </NavLink>
                    <p className='absolute -top-4 -right-1'>{cartItemqty}</p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Header