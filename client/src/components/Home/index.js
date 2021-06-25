import React from "react";
import HeroSection from "./components/HeroSection";
import Steps from "./components/Steps/Steps";
import Contact from "./components/Contact/Contact";

import Container from "@material-ui/core/Container";

const Home = () => {
  return (
    <>
      <Container>
        <HeroSection />
        <Steps />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
