import { useState, useEffect } from "react";
const Effect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    return () => clearTimeout(timer);
  });
  return <>{counter}</>;
};

export default Effect;
