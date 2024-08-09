import React from "react";
import { useEffect } from "react";
import { useAddProductMutation, useGetProductsQuery } from "../api/products";
import { product as item } from "./product";
import ProductCard from "./ProductCard";
function Products() {
  const { data: products, error } = useGetProductsQuery();
  const [addProduct] = useAddProductMutation();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);
  return (
    <>
      <div className="container grid grid-cols-5 gap-5 p-10">
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </div>

      <button onClick={() => addProduct(item)}>Add</button>
    </>
  );
}

export default Products;
