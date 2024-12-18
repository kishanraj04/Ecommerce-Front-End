import React from 'react'
import ProductsCard from './ProductsCard'
import { useSelector } from 'react-redux'

function ProductsLists() {

 const productsArray = useSelector((state)=>state.items.products)

  return (
    <div className='h-auto gap-3 flex flex-wrap w-full justify-center items-center'>
        {
          productsArray.length==0 ? <h1>Product Is Not Avail..</h1> : <ProductsCard productArray={productsArray}/>
        }
    </div>
  )
}

export default ProductsLists