import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './SearchResults.css';

export default function SearchResults() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        const filteredProducts = response.data.filter(product =>
          product.ProductName.toLowerCase().includes(query.toLowerCase())
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [query]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/deleteproduct/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="search-results-container">
      <h2>Search Results for "{query}"</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Barcode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.ProductName}</td>
              <td>{product.ProductPrice}</td>
              <td>{product.ProductBarcode}</td>
              <td>
                <Link to={`/updateproduct/${product._id}`} className="btn btn-primary btn-sm me-2">Update</Link>
                <button onClick={() => handleDelete(product._id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
