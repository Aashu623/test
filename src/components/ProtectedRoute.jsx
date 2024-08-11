import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ element: Element }) {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  useEffect(() => {
    if (!user) {
      alert("Login to access this route");
      navigate("/login");
    }
  }, [user, navigate]);

  return user && <Element />;
}

export default ProtectedRoute;
