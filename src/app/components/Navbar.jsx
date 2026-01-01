"use client";
import { useState, useEffect } from "react";
import Li from "./Li";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const sections = ["services", "about", "portfolio", "contact"];

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120; // navbar offset

      for (const id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          scrollY >= el.offsetTop &&
          scrollY < el.offsetTop + el.offsetHeight
        ) {
          setActive(id);
        }
      }

      if (window.scrollY < 200) {
        setActive("home");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 bg-[#0b0b0b] z-50 shadow-md">
      <div className="max-w-300 mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* LOGO */}
        <div className="text-[#ff7a00] font-bold text-lg tracking-wide">
          SALMAN
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8">
            <Li liText="Home" href="/" isActive={active === "home"} />
            <Li liText="Services" href="#services" isActive={active === "services"} />
            <Li liText="About me" href="#about" isActive={active === "about"} />
            <Li liText="Portfolio" href="#portfolio" isActive={active === "portfolio"} />
            <Li liText="Contact me" href="#contact" isActive={active === "contact"} />
          </ul>
        </nav>

    <a
  href="#contact"
  className="hidden md:block bg-[#ff7a00] text-white text-sm px-5 py-2 rounded-md hover:bg-[#ff8f26] transition"
>
  Hire Me
</a>


        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-[#0b0b0b] flex flex-col items-center gap-6 py-8 md:hidden shadow-lg">
           <Li liText="Home" href="/" isActive={active === "home"} onClick={() => setOpen(false)} />
           <Li liText="Services" href="#services" isActive={active === "services"} onClick={() => setOpen(false)} />
           <Li liText="About me" href="#about" isActive={active === "about"} onClick={() => setOpen(false)} />
           <Li liText="Portfolio" href="#portfolio" isActive={active === "portfolio"} onClick={() => setOpen(false)} />
           <Li liText="Contact me" href="#contact" isActive={active === "contact"} onClick={() => setOpen(false)} />

            <button className="bg-[#ff7a00] text-white text-sm px-6 py-2 rounded-md">
              Hire Me
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
