import React from "react";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import theface from "../assets/images/theface.jpg";

function PreLoader({ setLoader }) {
  useEffect(() => {
    setTimeout(() => setLoader(false), 3000);
  });
  return (
    <div className="loader flex flex-col justify-center items-center h-screen">
      <img
        src={theface}
        alt=""
        className="h-[90px] mb-2 w-[90px] animate-spin"
      />
      <h1 className="font-Akronim text-[32px] leading-7 my-2">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("ZeekCodes.").start();
          }}
        />
      </h1>
      <p className="text-[20px] tracking-widest">LOADING...</p>
    </div>
  );
}

export default PreLoader;
