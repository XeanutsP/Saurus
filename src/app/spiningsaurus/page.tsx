"use client";

import { useState } from "react";

import LocalNavigation from "@/components/LocalNavigation/LocalNavigation";

export default function SpiningSaurus() {
  const [color, setColor] = useState({
    color:'red'
  })
  
  const changeColor = (colorname:string) => {
    setColor({
      color: colorname
    })
  }

  return (
    <div>
      <h1>Spining Saurus</h1>
      <p>Yea yea... If you wonder </p>
      <button onClick={() => changeColor("red")}></button>
      <LocalNavigation/>
    </div>
  );
}
