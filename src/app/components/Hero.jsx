"use client"
import Image from "next/image";
import vector from "../../assets/Vector.png";
import myimg from "../../assets/profile.png";


export default function Hero() {

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // console.log("Button Clicked")
  };

  const socials = {
  IG: "https://instagram.com/",
  IN: "https://www.linkedin.com/in/im-salluu/",
  FB: "https://facebook.com/",
  GH: "https://github.com/imsalluu",
};


return (
    <section id="/" className="w-full py-20 bg-linear-to-r from-[#0b0b0b] via-[#0e0e0e] to-[#0b0b0b]">
      <div className="max-w-300 mx-auto px-6 pt-10 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* ================= LEFT ================= */}
        <div className="relative">

          <div>
            <p className="text-gray-400 text-sm mb-2">
              Hi I am
            </p>

            <h3 className="text-gray-300 text-base mb-3">
              Salman Hossain
            </h3>

            <h1 className="text-[#ff7a00] text-[42px] leading-tight font-bold mb-6">
              Flutter Developer
            </h1>

            {/* SOCIAL */}
            {/* SOCIAL */}
<div className="flex gap-3 mb-8 relative z-10">
  {["IG", "IN", "FB", "GH"].map((icon) => (
    <a
      key={icon}
      href={socials[icon]}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full border border-gray-600
      text-gray-400 flex items-center justify-center text-xs"
    >
      {icon}
    </a>
  ))}
</div>


            {/* BUTTONS */}
            <div className="flex gap-4 mb-8">
              <a href="#contact">

              <button className="bg-[#ff7a00] text-white text-sm px-6 py-2 rounded-md">
                Hire Me
              </button>
              </a>

              <button
                onClick={handleDownloadCV}
                className="border border-gray-500 text-gray-300 text-sm
  px-6 py-2 rounded-md
  hover:border-[#ff7a00] hover:text-[#ff7a00]
  transition"
              >
                Download CV
              </button>

            </div>

            {/* STATS */}
            <div className="flex bg-[#151515] rounded-lg overflow-hidden w-[420px] mb-4">
              <div className="flex-1 px-6 py-4 text-center border-r border-gray-700">
                <h2 className="text-[#ff7a00] font-bold text-lg">2+</h2>
                <p className="text-gray-400 text-xs">Experiences</p>
              </div>

              <div className="flex-1 px-6 py-4 text-center border-r border-gray-700">
                <h2 className="text-[#ff7a00] font-bold text-lg">25+</h2>
                <p className="text-gray-400 text-xs">Project done</p>
              </div>

              <div className="flex-1 px-6 py-4 text-center">
                <h2 className="text-[#ff7a00] font-bold text-lg">80+</h2>
                <p className="text-gray-400 text-xs">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* VECTOR — EXACT POSITION LIKE IMAGE */}
          <div className="absolute top-0 left-0 w-130 pointer-events-none">
            <Image
              src={vector}
              alt="vector"
              className="w-full h-auto"
              priority
            />
          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative flex justify-center items-center mt-24 lg:mt-0">
          <div className="absolute w-[420px] h-[420px] rounded-full bg-[#1a1a1a]" />

          <Image
            src={myimg}
            alt="Profile"
            width={280}
            height={480}
            className="relative z-10 grayscale object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
