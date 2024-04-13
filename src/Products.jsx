import React from 'react'
import jsonData from './jsonData'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct } from './Redux/Reducer/CartReducer'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Products = () => {
    const data =useSelector(state=>state.CartReducer.cartValues)
    console.log(data)
  const dispatch=useDispatch()  
    console.log(jsonData)
    const handleadditem=(product)=>{
dispatch(addProduct(product))
toast.success(`${product.name} is successfully added`)
    }
    const handleremove = (product) => {
        // Check if the product exists in the cart before dispatching the delete action
        if (data.find(item => item.id === product.id)) {
            dispatch(deleteProduct(product.id));
            toast.error(`${product.name} is successfully removed`, { toastStyle: { backgroundColor: 'red' } });
        } else {
            toast.warn(`${product.name} does not exist in the cart`);
        }
    };
  return (
    <div className='container'>
 
      {jsonData.length>0 && jsonData.map(product =>
       <div className='' key={product.id}>
       <div className='card '>
        <img className='card-img-top' src={product.src} />
        <p className='card-title'>{product.name} | {product.price}</p>
        <div className='card-body'>
           <button className='btn btn-primary ml-auto' onClick={()=>handleadditem(product)}>Add</button>&nbsp;
           <button className='btn btn-primary ml-auto' onClick={()=>handleremove(product)}>Remove </button>
        </div>
       </div>
       </div>         
    )}
    <ToastContainer/>
    </div>
  )
}

export default Products
