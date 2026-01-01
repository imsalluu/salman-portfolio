export default function Services() {
  const services = [
    {
      title: "App Development",
      desc: "Cross-platform mobile app development using Flutter for Android and iOS with clean architecture and high performance.",
    },
    {
      title: "UI Implementation",
      desc: "Pixel-perfect UI implementation from Figma or design files with responsive layouts and smooth animations.",
    },
    {
      title: "API Integration",
      desc: "Secure and efficient REST API integration with authentication, error handling, and real-time data sync.",
    },
    {
      title: "State Management",
      desc: "Scalable state management solutions to ensure predictable app behavior and long-term maintainability.",
    },
    {
      title: "Firebase Integration",
      desc: "Firebase authentication, database, storage, and push notification integration for modern mobile apps.",
    },
    {
      title: "App Publish",
      desc: "Complete app publishing support for Google Play Store and Apple App Store, including builds and store setup.",
    },
    {
      title: "App Maintenance",
      desc: "Ongoing app maintenance, updates, and improvements to keep applications stable and up to date.",
    },
    {
      title: "Bug Fixing",
      desc: "Debugging and fixing performance issues, crashes, and unexpected behaviors in existing Flutter apps.",
    },
    {
      title: "App Performance Optimization",
      desc: "Improving app speed, reducing load times, and optimizing UI rendering for smooth user experience.",
    },
    {
      title: "Third-Party Integration",
      desc: "Integration of third-party SDKs such as payment gateways, maps, analytics, and social logins.",
    },
  ];

  return (
    <section id="services" className="w-full bg-[#0b0b0b] py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-white text-2xl font-semibold mb-3">
            Services
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            I provide complete Flutter app solutions — from development and API
            integration to publishing, optimization, and long-term support.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#151515] rounded-2xl p-8 text-center
              shadow-[0_0_40px_rgba(0,0,0,0.6)]
              hover:shadow-[0_0_60px_rgba(255,122,0,0.15)]
              transition"
            >
              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div className="text-[#ff7a00]">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21h13a4 4 0 0 0-4-4h-5a4 4 0 0 0-4 4z" />
                  </svg>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-[#ff7a00] font-semibold mb-3">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
