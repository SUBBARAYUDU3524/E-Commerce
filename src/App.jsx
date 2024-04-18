import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProducts from './CartProducts'
import Products from './Products'
import Home from './Home'
const App = () => {
  return (
    <div>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/CartProducts' element={<CartProducts/>} /> 
              <Route path='/products' element={<Products/>} /> 
          </Routes>
    
    </div>
  )
}

export default App
