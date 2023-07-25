import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiTailwindcss,
  SiJavascript,
  SiNuxtdotjs,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { DiCss3, DiSass } from "react-icons/di";
import { FaReact, FaVuejs } from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";

function Stacks() {
  return (
    <div className="stacks" id="skills">
      <h2>My Stacks</h2>
      <hr className="w-[40px] border-2 mb-4" />
      <p>Languages and technologies I work with.</p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="single  p-4">
          <AiFillHtml5 className="rounded-full text-[22px]" /> HTML
        </div>
        <div className="single  p-4">
          <DiCss3 className="rounded-full text-[22px]" /> CSS
        </div>
        <div className="single  p-4">
          <DiSass className="rounded-full text-[22px]" /> SCSS
        </div>
        <div className="single  p-4">
          <SiTailwindcss className="rounded-full text-[22px]" /> Tailwind CSS
        </div>
        <div className="single  p-4">
          <SiJavascript className="rounded-full text-[22px]" /> JavaScript
        </div>
        <div className="single  p-4">
          <FaVuejs className="rounded-full text-[22px]" /> Vue JS
        </div>
        <div className="single  p-4">
          <SiNuxtdotjs className="rounded-full text-[22px]" /> Nuxt JS
        </div>
        <div className="single  p-4">
          <FaReact className="rounded-full text-[22px]" /> React JS
        </div>
        <div className="single  p-4">
          <SiFirebase className="rounded-full text-[22px]" /> Firebase
        </div>
        <div className="single  p-4">
          <SiTypescript className="rounded-full text-[22px]" /> TypeScript
        </div>
        <div className="single  p-4">
          <BsWordpress className="rounded-full text-[22px]" /> WordPress
        </div>
        <div className="single  p-4">
          <TbBrandReactNative className="rounded-full text-[22px]" /> React
          Native
        </div>
      </div>
    </div>
  );
}

export default Stacks;
