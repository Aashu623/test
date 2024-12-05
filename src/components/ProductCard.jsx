import React, { useState } from "react";
import {
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "../api/products";

function ProductCard({ product }) {
  const [updateProduct] = useUpdateProductMutation();
  const [updatedName, setUpdatedName] = useState("");

  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
  };
  const handleUpdateProduct = async (product) => {
    if (updatedName.length < 1) {
      alert("Please enter a valid name");
    }
    await updateProduct({
      id: product.id,
      body: { ...product, title: updatedName },
    });
  };
  return (
    <div className="continer">
      <div className="flex flex-col">
        <div key={product.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              alt={product.imageAlt}
              src={product.images[0]}
              className="h-full w-full object-fit object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-xl font-bold text-purple-700">
                <a href={product.href}>
                  <span />
                  {product.title}
                </a>
              </h3>
              <p className="mt-1 text-sm font-semibold text-gray-500">{product.color}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
          </div>
        </div>
        <div>
          <input
            type="text"
            className="border border-black p-2 w-full"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            placeholder="Enter product new name"
          />
          <button
            onClick={() => handleUpdateProduct(product)}
            className="text-sm w-full font-semibold bg-green-400 px-2 py-1 rounded-sm text-while-900"
          >
            Update name
          </button>
        </div>
      </div>
      <button
        className="text-sm w-full font-semibold bg-red-400 px-2 py-1 rounded-sm text-while-900"
        onClick={() => handleDeleteProduct(product.id)}
      >
        delete
      </button>
    </div>
  );
}

export default ProductCard;
