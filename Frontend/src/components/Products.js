import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Products.css'; 
import { Modal, Button } from 'react-bootstrap';
export default function Products() {
  useEffect(() => {
    getProducts();
  }, []);

  const [productData, setProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducts = async () => {
    try {
      const res = await fetch('http://localhost:3001/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (res.status === 201) {
        console.log('Data Retrieved.');
        setProductData(data);
      } else {
        console.log('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await fetch(`http://localhost:3001/deleteproduct/${selectedProduct._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setProductData(productData.filter(product => product._id !== selectedProduct._id));
      setShowModal(false);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const sortAscending = () => {
    const sortedProducts = [...productData].sort((a, b) => a.ProductName.localeCompare(b.ProductName));
    setProductData(sortedProducts);
  };

  const sortDescending = () => {
    const sortedProducts = [...productData].sort((a, b) => b.ProductName.localeCompare(a.ProductName));
    setProductData(sortedProducts);
  };

  return (
    <div className='container-fluid p-5 products-container'>
      <div className='products-header'>
        <h1 className='products-title'>Products Inventory</h1>
      </div>
      <div className='add_button'>
        <NavLink to='/insertproduct' className='btn btn-primary fs-5'>
          + Add New Product
        </NavLink>
      </div>
      <div className='table-responsive mt-3'>
        <table className='table table-striped table-hover mt-3 fs-5'>
          <thead>
            <tr className='tr_color'>
              <th scope='col'>Serial No</th>
              <th scope='col' className='product-name-header'>
                Product Name
                <div className='sort-buttons'>
                  <button className='sort-button' onClick={sortAscending}>&uarr;</button>
                  <button className='sort-button' onClick={sortDescending}>&darr;</button>
                </div>
              </th>
              <th scope='col'>Product Price</th>
              <th scope='col'>Product Barcode</th>
              <th scope='col'>Update</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((element, id) => (
              <tr key={element._id} className='product-row'>
                <th scope='row'>{id + 1}</th>
                <td>{element.ProductName}</td>
                <td>{element.ProductPrice}</td>
                <td>{element.ProductBarcode}</td>
                <td>
                  <NavLink to={`/updateproduct/${element._id}`} className='btn btn-primary'>
                    <i className='fa-solid fa-pen-to-square'></i>
                  </NavLink>
                </td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleDeleteClick(element)}>
                    <i className='fa-solid fa-trash'></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
