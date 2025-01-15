import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1 className='home-title'>Welcome to Inventory Management System</h1>
        <p className='home-description'>Manage your inventory efficiently and effectively.</p>
        <Link to='/products' className='home-button'>Go to Products Section</Link>
      </div>
    </div>
  );
}
