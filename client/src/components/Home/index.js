import React from "react";
import HeroSection from "./components/HeroSection";
import Steps from "./components/Steps/Steps";
import Contact from "./components/Contact/Contact";

import Container from "@material-ui/core/Container";
import VaccineDrive from "./components/VaccineDrive";


import { useSelector } from "react-redux";
const Home = () => {
  const { data , error , loading } = useSelector((state) => state.userLogin);
  return (
    <>
      <Container>
      {!loading && data &&(<VaccineDrive />)}
        
        <HeroSection />
        <Steps />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
