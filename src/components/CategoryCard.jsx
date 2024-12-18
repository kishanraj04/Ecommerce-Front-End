import React from 'react'
import { NavLink } from 'react-router-dom'

function CategoryCard({object}) {

  

  return (
   <>
    <div className="w-full h-[100%] flex justify-between mt-8 ">
        {object.map(({images,path}, idx) => (
          
           <NavLink to={`/${path}`} key={idx}>
             <img
              src={images}
              alt={`Image ${idx}`}
              className="h-[70%] w-[80%] object-cover rounded-[50%] object-cover"
            />
           </NavLink>
          
         
        ))}
      </div>
   </>
  )
}

export default CategoryCard