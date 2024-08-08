import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const btn = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setCount((count) => count + 1);
    };

    const buttonElement = btn.current;

    if (buttonElement) {
      buttonElement.addEventListener("click", handleClick);
    }

    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener("click", handleClick);
      }
    };
  });
  return (
    <div className="flex w-screen h-screen">
      <div className="container flex flex-col w-2/6 bg-red-100 p-10 gap-5 items-center self-center">
        <span className="text-2xl">Button click count: {count}</span>
        <button
          className="text-2xl border p-2 border-black  rounded-sm"
          ref={btn}
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
