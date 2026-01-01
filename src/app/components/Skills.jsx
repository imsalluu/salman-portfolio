export default function Skills() {
  const skills = [
    {
      title: "Flutter Development",
      items: [
        "Flutter SDK",
        "Material & Cupertino UI",
        "Custom Widgets",
        "Responsive Layouts",
      ],
    },
    {
      title: "State Management",
      items: [
        "GetX",
        "Provider",
        "Riverpod (Basic)",
        "Clean Architecture",
      ],
    },
    {
      title: "Backend & APIs",
      items: [
        "REST API Integration",
        "JSON Handling",
        "Authentication",
        "Error Handling",
      ],
    },
    {
      title: "Firebase",
      items: [
        "Firebase Auth",
        "Cloud Firestore",
        "Push Notifications",
        "Firebase Storage",
      ],
    },
    {
      title: "App Deployment",
      items: [
        "Android App Bundle",
        "Play Store Publish",
        "iOS TestFlight",
        "Release Management",
      ],
    },
    {
      title: "Tools & Workflow",
      items: [
        "Git & GitHub",
        "Postman",
        "VS Code",
        "Figma to Flutter",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full bg-[#0b0b0b] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-white text-2xl font-semibold mb-2">
            Skills
          </h2>
          <p className="text-gray-500 text-sm">
            Technologies and tools I use to build production-ready Flutter apps
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-[#151515] rounded-2xl p-6
              hover:shadow-[0_0_40px_rgba(255,122,0,0.12)]
              transition"
            >
              <h3 className="text-[#ff7a00] font-semibold mb-4">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-gray-300
                    bg-[#1f1f1f] px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
