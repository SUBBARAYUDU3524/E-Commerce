import React from 'react';
import { toast,ToastContainer} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import jsonData from './jsonData';
import Navigation from './Navigation'
import './Products.css';
import { addProduct, deleteProduct } from './Redux/Reducer/CartReducer';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
  const data = useSelector(state => state.cartReducer.cartValues);
  const price=useSelector(state=>state.cartReducer.totalprice)
  console.log(data)
  const dispatch = useDispatch();
  
  const handleaddProduct = (product) => {
    dispatch(addProduct(product));
    toast.success(`${product.name} Product added successfully`); 
  }
  
  const handledeleteProduct = (product) => {
    const productExists = data.find(item => item.id === product.id);
    
    if (productExists) {
      dispatch(deleteProduct(product.id));
      toast.error(`${product.name} successfully removed from the cart`); 
    } else {
      toast.warn(`${product.name} is not in the cart`);
    }
  }
  
  
  return ( 
    <div>
      <Navigation data={data} price={price}/>
      <div className=' container'> 
        {jsonData.length > 0 && jsonData.map((product, index) => (
          <div key={index}>
            <div className='card-img-top'>
              <img src={product.src} alt="" />
              <p className='card-title'>{product.name} | ₹ {product.price}</p>
              <div className='card-body'>
                <button className='neumorphic-button' onClick={() => handleaddProduct(product)}>Add</button>
                <button className='neumorphic-button' onClick={() => handledeleteProduct(product)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Products;
