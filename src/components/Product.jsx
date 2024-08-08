import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/productAction";

function Product() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl">Products </h1>
      <div className="container grid grid-cols-3 gap-5 p-10">
        {products &&
          products.map((product) => (
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
                <p
                  className="text-sm font-medium text-gray-900"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to cart
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Product;
