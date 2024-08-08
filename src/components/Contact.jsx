import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Contact() {
  const { user } = useContext(AppContext);
  return (
    <div className="container flex justify-center items-center h-screen w-screen">
      <div className="container flex justify-center items-center w-2/6 h-1/2 m-auto bg-red-100 ">
        <span className="text-2xl font-bold">Hello, {user}.</span>
        <span className="text-2xl font-bold">Contact Page</span>
      </div>
    </div>
  );
}

export default Contact;
