import type { NextPage } from "next";
import { Contact } from "../FrontEnd/components/Contact";
import { useState, createContext, useContext } from "react";
import { Header } from "../FrontEnd/components/header";
import { GridPopUp } from "../FrontEnd/components/reUseable/GridPopUp";
import { Techs } from "../FrontEnd/components/Tech";

type IsBlured = {
  isBlured: boolean;
  setIsBlured: (b: boolean) => void;
};
const BlurContext = createContext<IsBlured>({
  isBlured: false,
  setIsBlured: () => false,
});
export const useBlurContext = () => useContext(BlurContext);

const Home: NextPage = () => {
  const [isBlured, setIsBlured] = useState(false);

  return (
    <BlurContext.Provider value={{ isBlured, setIsBlured }}>
      <Header />
      <Contact />
      <GridPopUp />
      <Techs />
    </BlurContext.Provider>
  );
};

export default Home;
