import { useState, useContext, createContext } from "react";

const NameContext = createContext(null);
export const Comp1 = () => {
  const [name, setName] = useState("Aanshu Dwiwedi");
  return (
    <div>
      <NameContext.Provider value={{ name, age: 20, theme: "dark" }}>
        I am Parent component with name prop
        <Comp2 />
      </NameContext.Provider>
    </div>
  );
};

export const Comp2 = () => {
  return (
    <div>
      <>I am component 2 acting as middlemen</>
      <Comp3 />
    </div>
  );
};

export const Comp3 = () => {
  const { name } = useContext(NameContext);
  return (
    <div>
      <>I am component 3 using that name prop</>
      <br />
      Hello {name}
    </div>
  );
};
