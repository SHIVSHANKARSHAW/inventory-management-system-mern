import React from 'react';
import './About.css'; 

export default function About() {
  return (
    <div className='about-container'>
      <div className='about-content'>
        <h1 className='about-title'>Inventory Management System - MERN CRUD App</h1>
        <p className='about-description'>
          This Inventory Management System is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a comprehensive solution for managing products in an inventory, including functionalities for creating, reading, updating, and deleting (CRUD) products.
        </p>
        <h2 className='about-subtitle'>Features</h2>
        <ul className='about-list'>
          <li><strong>Home Page:</strong> A welcoming page that provides an overview of the application and a link to the products section.</li>
          <li><strong>Products Page:</strong> Displays a list of all products in the inventory with options to update or delete each product. The page is designed to be modern, responsive, and visually appealing with animations.</li>
          <li><strong>Insert Product:</strong> A form to add new products to the inventory. The form includes fields for product name, price, and barcode. A modal prompts the user to confirm before inserting the product.</li>
          <li><strong>Update Product:</strong> A form to update existing product details. The form is pre-filled with the current product information, and a modal prompts the user to confirm before updating the product.</li>
          <li><strong>Search Functionality:</strong> Allows users to search for products by name. The search results are displayed in a table with options to update or delete each product.</li>
          <li><strong>About Page:</strong> Provides information about the application and its functionalities.</li>
        </ul>
        <h2 className='about-subtitle'>Backend</h2>
        <p className='about-description'>
          The backend is built using Node.js and Express.js. It connects to a MongoDB database to store product information. The backend provides RESTful APIs for the following operations:
        </p>
        <ul className='about-list'>
          <li><strong>Insert Product:</strong> Adds a new product to the database. If a product with the same barcode already exists, it returns an error.</li>
          <li><strong>Get Products:</strong> Retrieves a list of all products from the database.</li>
          <li><strong>Get Product by ID:</strong> Retrieves the details of a specific product by its ID.</li>
          <li><strong>Update Product:</strong> Updates the details of an existing product by its ID.</li>
          <li><strong>Delete Product:</strong> Deletes a product from the database by its ID.</li>
        </ul>
        <h2 className='about-subtitle'>Frontend</h2>
        <p className='about-description'>
          The frontend is built using React.js. It provides a user-friendly interface for interacting with the inventory management system. The frontend includes the following components:
        </p>
        <ul className='about-list'>
          <li><strong>Navbar:</strong> A navigation bar that provides links to the home, products, and about pages. It also includes a search bar for finding products.</li>
          <li><strong>Home:</strong> A welcoming page with an overview of the application.</li>
          <li><strong>Products:</strong> Displays a list of all products with options to update or delete each product.</li>
          <li><strong>InsertProduct:</strong> A form for adding new products to the inventory.</li>
          <li><strong>UpdateProduct:</strong> A form for updating existing product details.</li>
          <li><strong>SearchResults:</strong> Displays the search results for products.</li>
          <li><strong>About:</strong> Provides information about the application and its functionalities.</li>
        </ul>
      </div>
    </div>
  );
}
