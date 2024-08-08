import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/productAction";

function Cart() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl">Cart Items </h1>
      <div className="container grid grid-cols-3 gap-5 p-10">
        {cartItems &&
          cartItems.map((cartItem) => (
            <div key={cartItem.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={cartItem.imageAlt}
                  src={cartItem.images[0]}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={cartItem.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {cartItem.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{cartItem.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {cartItem.price}
                </p>
                <p
                  className="text-sm font-medium text-gray-900"
                  onClick={() => dispatch(removeFromCart(cartItem.id))}
                >
                  Remove
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cart;
