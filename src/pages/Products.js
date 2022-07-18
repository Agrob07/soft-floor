import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ProductsList from "../Layouts/ProductsList";
import SideBar from "../Layouts/SideBar";

const Products = () => {
  const { id } = useParams();
  return (
    <div>
      <SideBar />
      {id ? <Outlet /> : <ProductsList />}
    </div>
  );
};

export default Products;
