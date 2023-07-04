import React from "react";
import Image from "next/image";

export const HeroImage = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="flex items-center justify-center my-8">
      <div className="flex flex-col items-center justify-center gap-5 relative">
        <Image
          className="animate__animated animate__slideInLeft animate__slow"
          src={"/assets/star.svg"}
          width={isMobile ? 300 : 600}
          height={300}
          alt="stars"
        />
        <Image
          className="animate__animated animate__slideInRight animate__slow"
          src={"/assets/wars.svg"}
          width={isMobile ? 300 : 600}
          height={300}
          alt="wars"
        />

        <div className="absolute z-10 sm:w-[620px] w-[370px] text-justify top-[54%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] font-bacasime leading-tight sm:text-[40px] text-[30px] sm:tracking-[0.6rem] tracking-[0.1rem]">
          THE FORCE AWAKENS
          <span className="w-full inline-block" />
        </div>
      </div>
    </div>
  );
};
