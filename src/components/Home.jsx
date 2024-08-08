import React, { useState } from "react";

function Home() {
  const [user, setUser] = useState("");
  const [backgroundColor, setbackgroundColor] = useState("pink");
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div
        className="h-1/4 w-1/4 text-2xl font-bold flex flex-col gap-3 justify-center items-center border border-black rounded-lg"
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <span>Hello,{user}</span>

        <input
          type="text"
          placeholder="Enter your name"
          className="px-3 py-1 border rounded-lg"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter any color"
          className="px-3 py-1 border rounded-lg"
          onChange={(e) => setbackgroundColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Home;
