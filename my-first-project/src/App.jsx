import States from "./components/States";
import { FormA, FormB } from "./components/Forms";
import Effect from "./components/Effect";
import { Website } from "./components/Website";
import { EffectwithDeps } from "./components/EffectwithDeps";
import { Dummy } from "./components/Dummy";
import { Comp1 } from "./components/Context";
import { Theme } from "./components/Theme";
import { ProductCall, UserCall } from "./components/PageCall";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
const App = () => {
  return (
    <>
      <Navbar />
      <hr />
      <Profile />
      <hr />
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
      <Comp1 />
      <hr />
      <Theme />
      <hr />
      <ProductCall id={1} />
      <UserCall id={1} />
    </>
  );
};

export default App;
