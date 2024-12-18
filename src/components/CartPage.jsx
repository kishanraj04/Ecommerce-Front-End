import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { decreaseQty, increaseQty } from "./store/cartSlice";
import { getDataUsingId } from "./utils/getDataUsingId";
import { setCartStatus } from "./store/categorySlice";

function CartPage() {
  const cartItem = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch()

  return (
    <>
      <div className="h-auto w-full">
        {cartItem.map(({ id, images, title, price,qty }) => {
          return (
            <div className="w-full h-[30%] border-[2px] bg-slate-950 flex" key={id}>
              <div className="h-[100%] flex gap-3 w-[60%]">
                {/* images */}
                <img src={images[0]} alt="" className="h-[10rem] w-[30%]" />

                {/* details */}
                <div className="text-white flex items-center font-serif text-xl w-[30%]">
                  <h3>{title}</h3>
                </div>
              </div>

              <div className="text-white w-[40%] flex gap-16 items-center justify-center">
                {/* qty control */}
                <div className="flex gap-4 justify-between w-[30%]">
                  <span onClick={() =>{
                    const { id: itemId, qty } = getDataUsingId(id, cartItem);
                    if(qty<=1)
                    {
                      dispatch(setCartStatus({id,status:false}))
                    }
                    dispatch(decreaseQty({ id: itemId, type: 'decrease' }));
                    
                  }} >
                   
                    <FaMinus size={"2rem"} />
                  </span>
                  <p className="text-xl font-bold">{qty}</p>
                  
                  <span onClick={() => dispatch(increaseQty({id,type:'increase'})) } >
                  
                    <IoMdAdd size={"2rem"} />
                  </span>
                
                  
                </div>

                {/* price */}
                <div className="w-[10%]">
                  <p className="text-xl">Rs..{Math.round(price*qty)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CartPage;
