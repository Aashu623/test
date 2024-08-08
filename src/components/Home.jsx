import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Home() {
  const { user, isAuthenticated } = useContext(AppContext);
  return (
    <div className="container flex justify-center items-center h-screen w-screen">
      <div className="container flex justify-center items-center w-2/6 h-1/2 m-auto bg-red-100 ">
        {isAuthenticated ? (
          <span className="text-2xl font-bold">Hello, {user}</span>
        ) : (
          <span className="text-2xl font-bold">Not Authenticated.</span>
        )}
      </div>
    </div>
  );
}

export default Home;
