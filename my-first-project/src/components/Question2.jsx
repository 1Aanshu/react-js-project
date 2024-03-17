import { useState, useEffect } from "react";

export const Question2 = ({ time }) => {
  const [timeRemaining, setTimeRemaining] = useState(time);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining]);
  return <div>Question2</div>;
};
