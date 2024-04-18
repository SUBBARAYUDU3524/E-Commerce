import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from './Redux/Reducer/CartReducer'; // assuming deleteProduct action is imported from actions file
import "./App.css";
import { toast,ToastContainer} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const CartProducts = () => {
  const jsonData = useSelector(state => state.cartReducer.cartValues);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(deleteProduct(product.id));
    toast.error(`${product.name} successfully removed from the cart`)
  };

  return (
    <div className='container'>
      {jsonData.length > 0 ? jsonData.map(product =>
        <div  key={product.id}>
          <div className='card'>
            <img className='card-img-top' src={product.src} alt={product.name} />
            <p className='card-title'>{product.name} | {product.price}</p>
            <div className='card-body'>
              <button className='btn btn-primary ml-auto' onClick={() => handleRemove(product)}>Remove</button>
            </div>
          </div>
          </div>
        ) : <div style={{ textAlign: "center", color: "red" }}>NO CART ITEMS PRESENT HERE, PLEASE ADD ITEMS</div>}
        <ToastContainer/>
        </div>
  );
};

export default CartProducts;
