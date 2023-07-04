import React from "react";
import { StarsCanvas } from "./Stars";
import { NavBar } from "./Navbar";
import { HeroImage } from "./Hero";

export const Hero = () => {
  return (
    <div className="relative z-0 bg-primary h-auto pb-16">
      <StarsCanvas />
      <NavBar />
      <HeroImage />
    </div>
  );
};
