import React from "react";
import Navbar from "../components/Header/Navbar.jsx";
import Products from "../components/Card/Products.jsx";
import NewProducts from "../components/Card/NewProducts.jsx";

const Index = () => {
  return (
    <>
      <Navbar />
      <NewProducts />
      <Products />
    </>
  );
};

export default Index;
