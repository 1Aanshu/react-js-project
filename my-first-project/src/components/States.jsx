import { useState } from "react";

const States = () => {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("");
  return (
    <div>
      Hi, I am {color} color
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setColor(text)}>Turn {text}</button>
    </div>
  );
};

export default States;
