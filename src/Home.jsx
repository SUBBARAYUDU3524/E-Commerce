import React from 'react';
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
   navigate('/products')
  }
  return (
    <div className='hero-section'>
      <h1>
        <span>E-Commerce</span> <span>Project</span>
      </h1>
      <p className='home-welcome'>
        Welcome to the E-Commerce project, keep upskilling here.
      </p>
      <Link to='/products'>
      <button className="book-button"onClick={handleSubmit} >
      Please Click Here To See The Products
      </button>
      </Link>
    </div>
  );
}

export default Home;
