import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import CartProducts from './CartProducts'


const Nav = () => {
  const data=useSelector(state=>state.CartReducer.cartValues)
  return (
    <center>
    <div className='bg-dark'>
    <Link to='/' className='btn btn-primary mr-auto p-2 btn3'>Home</Link>&nbsp;
      <Link to='/cartproducts' className='btn btn-primary m-3 p-2'>Cart Items : {data.length}</Link>&nbsp;
      <button className='btn btn-primary m-3 p-2'>Total Price : {0}</button>
    
    </div>
    </center> 
  )
}

export default Nav
