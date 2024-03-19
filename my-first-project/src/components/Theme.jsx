import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      I am theme. Currently I have {theme} theme enabled.
      <br />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};
