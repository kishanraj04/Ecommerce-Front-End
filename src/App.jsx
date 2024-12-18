import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider, useDispatch } from 'react-redux'
import store from './components/store/configureStore'
import { apiCalling } from './api/apiCalling'
import { getAllCategoryProductStart } from './components/store/categorySlice'

function App() {
  const [count , setCount] = useState(0)
  const dispatch = useDispatch()
  const options = {
    method : "GET",
    url : "https://dummyjson.com/products"
  }

  async function fetchData()
  {
    const data = await apiCalling(options)
    dispatch(getAllCategoryProductStart(data))
  }
  
  fetchData()

  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
