import React, { useEffect } from "react";

function Header({ newFn }) {
  useEffect(() => {
    console.log(newFn);
    console.log("Header rendered");
  });
  return <div>Header</div>;
}

export default React.memo(Header);
