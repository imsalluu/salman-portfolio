"use client";

import { useState } from "react";
import Image from "next/image";

import ecom from "../../assets/ecom.webp";
import food from "../../assets/food.png";
import fitness from "../../assets/fitness.webp";
import social from "../../assets/social.webp";
import wallet from "../../assets/wallet.webp";
import finence from "../../assets/finence.webp";
import management from "../../assets/management.jpg";
import salon from "../../assets/salon.webp";
import dash from "../../assets/dash.png";
import agency from "../../assets/agency.png";


const categories = [
  "All",
  "Mobile App",
  "Desktop App",
  "Braiding",
];

const projects = [
  { title: "E-Commerce Mobile App", category: "Mobile App", image: ecom },
  { title: "Food Delivery App", category: "Mobile App", image: food },
  { title: "Fitness Tracker App", category: "Mobile App", image: fitness },
  { title: "Finance Wallet App", category: "Mobile App", image: wallet },
  { title: "Social Media App", category: "Mobile App", image: social },
  { title: "Admin Dashboard App", category: "Desktop App", image: dash },
  { title: "Task Management App", category: "Desktop App", image: management },
  { title: "Agency / Startup Website", category: "Braiding", image: agency },
  { title: "Finance App", category: "Mobile App", image: finence },
  { title: "Beauty Salon App", category: "App Mobile Design", image: salon },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="w-full bg-[#0b0b0b] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Portfolio
          </h2>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm px-5 py-2 rounded-md transition
                  ${
                    active === cat
                      ? "bg-[#ff7a00] text-white"
                      : "bg-[#151515] text-gray-400 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#151515] rounded-2xl overflow-hidden
              hover:shadow-[0_0_50px_rgba(255,122,0,0.2)]
              transition"
            >
              {/* IMAGE WRAPPER (LIKE HERO IMAGE) */}
              <div className="relative h-[240px]">

                {/* IMAGE */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index < 3}
                />

                {/* DARK OVERLAY (LIKE HERO VECTOR LAYER) */}
                <div className="absolute inset-0 bg-black/50" />

                {/* CONTENT OVER IMAGE */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs">
                    {project.category}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
