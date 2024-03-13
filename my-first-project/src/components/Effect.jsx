import { useState, useEffect } from "react";
const Effect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  });
  return <>{counter}</>;
};

export default Effect;
