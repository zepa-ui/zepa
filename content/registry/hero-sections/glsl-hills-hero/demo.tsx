"use client"

import { GLSLHills } from "./ui/glsl-hills";

export default function DemoOne() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden ">
    <GLSLHills/>
    <div className="space-y-6 pointer-events-none z-10 text-center absolute">
    <h1 className="font-semibold text-7xl whitespace-pre-wrap">
    <span className="italic text-6xl font-thin">Zepa Designs That Speak <br/> </span>
      Louder Than Words
        </h1>
        <p className="text-sm text-primary/60">
          We craft stunning visuals and user - friendly experiences that  <br/>  help your brand stand out and connect with your audience.
      </p>
           </div> 
      </div>
  )
}