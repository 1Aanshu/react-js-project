import States from "./components/States";
import { FormA, FormB } from "./components/Forms";
import Effect from "./components/Effect";
import { Website } from "./components/Website";
import { EffectwithDeps } from "./components/EffectwithDeps";
import { Dummy } from "./components/Dummy";
import { Comp1 } from "./components/Context";
const App = () => {
  return (
    <>
      <States />
      <hr />
      <hr />
      <FormA />
      <FormB />
      <hr />
      <Effect />
      <hr />
      <Website />
      <hr />
      <EffectwithDeps />
      <hr />
      <Dummy />
      <hr />
      <Comp1/>
    </>
  );
};

export default App;
