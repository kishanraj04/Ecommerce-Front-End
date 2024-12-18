import { getDataUsingId } from "./getDataUsingId";
import { addItem } from "../store/cartSlice";

export function handleAddCart({id,qty,productArray})
{  
    const products = getDataUsingId(id,productArray)
    return products
    
}