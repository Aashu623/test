import React, { useContext } from "react";
import { AppContext } from "./AppContext/AppContext";

function Home() {
  const { user } = useContext(AppContext);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-red-100 h-1/4 w-1/4 text-2xl font-bold flex justify-center items-center">
        <span>Home Page</span>
        {user && <span>Hello,{user}</span>}
      </div>
    </div>
  );
}

export default Home;
