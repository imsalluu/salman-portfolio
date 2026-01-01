"use client"

import Image from "next/image";
import myimg from "../../assets/profile.png";


export default function About() {

    const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // console.log("Button Clicked")
  };

  return (
    <section id="about" className="w-full bg-[#0b0b0b] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-white text-2xl font-semibold mb-2">
            About Me
          </h2>
          <p className="text-gray-500 text-sm">
Building high-quality Flutter applications with performance, scalability, and user experience in mind.          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start min-h-[420px]">
            {/* Circle */}
            <div className="absolute top-12 w-[360px] h-[360px] rounded-full bg-[#1a1a1a]" />

            {/* Image */}
            <Image
              src={myimg}
              alt="Profile"
              className="relative z-10 w-[300px] object-cover grayscale"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>
            <p className="text-gray-400 text-sm leading-7 mb-8">
              I am a Flutter Developer passionate about building modern, high-performance mobile applications for Android and iOS. I focus on creating clean, scalable, and user-friendly apps that solve real-world problems and deliver smooth user experiences.

              With hands-on experience in Flutter, REST API integration, Firebase services, and state management, I transform ideas into fully functional applications—from concept to deployment. I pay close attention to performance, code quality, and UI consistency to ensure long-term maintainability.

              I enjoy working closely with clients to understand their goals, provide technical guidance, and deliver reliable solutions. My objective is to build apps that are not only visually appealing but also efficient, secure, and ready for production.
            </p>

           <button
  onClick={handleDownloadCV}
  className="bg-[#ff7a00] text-white text-sm px-6 py-2 rounded-md hover:bg-[#ff8f26] transition"
>
  ⬇ Download CV
</button>

          </div>
        </div>
      </div>
    </section>
  );
}
