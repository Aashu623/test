import { useEffect } from "react";
import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";

import { getAllProducts } from "./actions/productAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <div className="container flex">
        <Product />
        <Cart />
      </div>
    </>
  );
}

export default App;
