import States from "./components/States";
import { FormA, FormB } from "./components/Forms";
import Effect from "./components/Effect";
import { Website } from "./components/Website";
import { EffectwithDeps } from "./components/EffectwithDeps";
import { Dummy } from "./components/Dummy";
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
    </>
  );
};

export default App;
