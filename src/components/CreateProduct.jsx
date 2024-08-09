import React, { useState } from "react";
import { useAddProductMutation, useGetProductsQuery } from "../api/products";

function CreateProduct() {
  const { data: products } = useGetProductsQuery();

  const [addProduct] = useAddProductMutation();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = () => {
    addProduct({
      id: products[products.length - 1].id + 1,
      title: title,
      price: price,
      color: color,
      images: [images],
      imageAlt: title,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-2/6 m-auto mb-5"
    >
      <input
        type="text"
        className="border border-black p-2 rounded-md "
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="border border-black p-2 rounded-md "
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        className="border border-black p-2 rounded-md "
        placeholder="Enter color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        className="border border-black p-2 rounded-md "
        placeholder="Enter link"
        value={images}
        onChange={(e) => setImages(e.target.value)}
      />
      <input
        type="submit"
        className="bg-blue-200 border border-black p-2 rounded-md "
      />
    </form>
  );
}

export default CreateProduct;
