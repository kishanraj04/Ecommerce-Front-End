import { setCartStatus } from "../store/categorySlice";

export const findCartItem = (id, cartItem, type) => {

  let data = "";
  if (type == "increase") {
    const cartValue = cartItem.find((item) => item.id == id);
    cartValue.qty += 1;
    data = cartValue;
  } else {
    const cartValue = cartItem.find((item) => item.id == id);
    cartValue.qty -= 1;
    data = cartValue;
  }

  const newCartItem = cartItem.map((item) => {
    if (item.id == id){
      return  data;
    } else {
      return item;
    }
  }).filter((item)=> {
    if(item.qty>=1)
    {
        return item
    }  
  });

  return newCartItem
};