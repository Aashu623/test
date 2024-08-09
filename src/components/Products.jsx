import React from "react";
import { useEffect } from "react";
import { useGetProductsQuery } from "../api/products";
import ProductCard from "./ProductCard";
function Products() {
  const { data: products, error } = useGetProductsQuery();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);
  return (
    <>
      <div className="container grid grid-cols-5 gap-5 p-10">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>

      
    </>
  );
}

export default Products;
