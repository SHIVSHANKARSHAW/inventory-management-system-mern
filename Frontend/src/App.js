import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import InsertProduct from "./components/InsertProduct";
import UpdateProduct from "./components/UpdateProduct";
import About from "./components/About";
import SearchResults from "./components/SearchResults";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar title="IMS" about="About"></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/insertproduct" element={<InsertProduct />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
