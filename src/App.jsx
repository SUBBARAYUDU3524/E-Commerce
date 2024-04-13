import React from 'react'
import Nav from './Nav'
import Products from './Products'
import { Route, Routes } from 'react-router-dom'
import CartProducts from './CartProducts'


const App4 = () => {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/cartproducts' element={<CartProducts/>}/>
     
      </Routes>
    </div>
  )
}

export default App4
