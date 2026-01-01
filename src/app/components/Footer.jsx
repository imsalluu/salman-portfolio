export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* TOP */}
        <div className="flex flex-col items-center text-center">

          {/* BRAND */}
          <h2 className="text-[#ff7a00] font-bold text-xl tracking-wide mb-4">
            Salman Hossain
          </h2>
          <p className="text-gray-500 text-sm max-w-md mb-8">
            Flutter Developer focused on building scalable, high-performance
            mobile applications with clean UI and solid architecture.
          </p>

          {/* NAV */}
          <nav className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "Home",
              "Services",
              "About",
              "Portfolio",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 text-sm hover:text-[#ff7a00] transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* SOCIAL */}
          <div className="flex gap-4 mb-10">
            {[
              { label: "GitHub", link: "https://github.com/imsalluu" },
              { label: "LinkedIn", link: "https://www.linkedin.com/in/im-salluu/" },
              { label: "Facebook", link: "#" },
              { label: "Instagram", link: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                className="px-4 py-2 rounded-full border border-gray-600
                text-xs text-gray-400 hover:border-[#ff7a00]
                hover:text-[#ff7a00] transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CONTACT */}
          <div className="flex flex-col sm:flex-row gap-6 text-gray-400 text-sm mb-10">
            <span>📧 salman.fireai@gmail.com</span>
            <span>📱 Available for freelance & remote work</span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* BOTTOM */}
        <div className="flex justify-center items-center text-gray-500 text-xs">
  <p>
    © {new Date().getFullYear()}{" "}
    <span className="text-[#ff7a00] font-medium">
      Salman Hossain
    </span>
    . All rights reserved.
  </p>
</div>


      </div>
    </footer>
  );
}
