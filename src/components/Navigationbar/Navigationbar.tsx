"use client";
import { useState } from "react";

export default function NavigationBar() {

    const [isMono, setIsMono] = useState(false)

    const switchColorTheme = () => {
        setIsMono(!isMono);
    }

  return (
    <nav className="flex p-4 gap-3">
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/spiningsaurus">Spinning Saurus</a>

    <div className="flex ml-auto gap-2">
    
    <button type="button" onClick={() => switchColorTheme}>Switch to {isMono? 'Colorful' : 'Monochrome'}</button>
    </div>
    
    </nav>
  );
}
