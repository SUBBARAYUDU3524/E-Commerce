import React from 'react'
import { useSelector } from 'react-redux'
import "./App.css"
const CartProducts = () => {
    const jsonData=useSelector(state=>state.CartReducer.cartValues)
  return (
    <div className='container'>
    {jsonData.length>0 ? jsonData.map(product =>
     <div className='' key={product.id}>
     <div className='card '>
      <img className='card-img-top' src={product.src} />
      <p className='card-title'>{product.name} | {product.price}</p>
      <div className='card-body'>
         <button className='btn btn-primary ml-auto'>Remove </button>
      </div>
     </div>
     </div>         
  ):<div style={{textAlign:"center",color:"red"}}>NO CART ITEMS PRESENT HERE,PLEASE ADD ITEMS</div>}
  </div>
  )
}

export default CartProducts
