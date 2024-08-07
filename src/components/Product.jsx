import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    }
    fetchData();
  });

  return (
    <>
      <div className="container my-10 w-1/6 mx-auto border-2 border-black rounded-xl p-6 flex flex-col justify-center items-center gap-10">
        {list &&
          list.map((item) => {
            <span className="text-5xl text-blue-900 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-black ring-1 ring-inset ring-gray-500/10">
              {item.title}
            </span>;
          })}
      </div>
      <div className="container grid grid-cols-5 gap-5">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt={product.imageAlt}
                src={product.images[0]}
                className="h-full w-full object-contain object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
