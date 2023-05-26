import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { About } from './About'
import { ProductsPage } from './ProductsPage'


export const UserRoutes = () => {
  return (
    <>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Productos</NavLink>
        <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
        </Routes>
    </>
  )
}