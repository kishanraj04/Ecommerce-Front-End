import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { apiCalling } from '../../api/apiCalling'


function CommonCategory() {

  const {pathname} = useLocation()
  useEffect( () => {
    (async function getAllData(){
      const options = {
        url : `https://dummyjson.com/products/category${pathname}`,
        method : "GET"
      }
      const response = await apiCalling(options)
      if(response){
        console.log(response);
      }
    })()
  },[pathname])

  
  return (
    <div>
        {/*
          loadingStatus==true?<h1>loading</h1>:<h1>sorry</h1>
        */}
        <h1>Hello</h1>
    </div>
  )
}

export default CommonCategory