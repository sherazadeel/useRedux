import React from 'react'
import Home from '../Home'
import { Route, Routes } from 'react-router-dom'
import Products from '../Products'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
    </Routes>
    </>
  )
}

export default Router
