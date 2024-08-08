import React, { useEffect, useContext } from "react";
import { AppContext } from "./AppContext/AppContext";
import { useNavigate } from "react-router-dom";
function Services() {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-red-100 h-1/4 w-1/4 text-2xl font-bold flex justify-center items-center">
        <span>Services Page</span>
      </div>
    </div>
  );
}

export default Services;
