"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        timeline: formData.get("timeline"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      setSuccess("Message sent successfully!");
      e.target.reset();
    } else {
      setSuccess("Something went wrong. Try again.");
    }

    setLoading(false);
  }

  return (
    <section id="contact" className="w-full bg-[#0b0b0b] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-white text-2xl font-semibold mb-2">
            Contact me
          </h2>
          <p className="text-gray-500 text-sm">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="max-w-[900px] mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            <input
              name="name"
              required
              placeholder="Name"
              className="bg-[#151515] text-gray-300 placeholder-gray-500 text-sm
              px-5 py-3 rounded-lg outline-none focus:ring-1 focus:ring-[#ff7a00]"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="bg-[#151515] text-gray-300 placeholder-gray-500 text-sm
              px-5 py-3 rounded-lg outline-none focus:ring-1 focus:ring-[#ff7a00]"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              className="bg-[#151515] text-gray-300 placeholder-gray-500 text-sm
              px-5 py-3 rounded-lg outline-none focus:ring-1 focus:ring-[#ff7a00]"
            />

            <select
              name="service"
              className="bg-[#151515] text-gray-500 text-sm
              px-5 py-3 rounded-lg outline-none focus:ring-1 focus:ring-[#ff7a00]"
            >
              <option>Service Of Interest</option>
              <option>Flutter App Development</option>
              <option>API Integration</option>
              <option>App Publish</option>
              <option>Bug Fixing</option>
            </select>

            <input
              name="timeline"
              placeholder="Timeline"
              className="bg-[#151515] text-gray-300 placeholder-gray-500 text-sm
              px-5 py-3 rounded-lg outline-none focus:ring-1 focus:ring-[#ff7a00]"
            />

            <textarea
              name="message"
              required
              rows="4"
              placeholder="Project Details..."
              className="bg-[#151515] text-gray-300 placeholder-gray-500 text-sm
              px-5 py-3 rounded-lg outline-none resize-none
              focus:ring-1 focus:ring-[#ff7a00]"
            />
          </div>

          {/* BUTTON */}
         <div className="flex flex-col items-center gap-4">

  {success && (
    <p className="text-sm text-green-500">
      {success}
    </p>
  )}

  <button
    type="submit"
    disabled={loading}
    className="
      bg-[#ff7a00] text-white text-sm font-medium
      px-10 py-3 rounded-md
      hover:bg-[#ff8f26]
      transition
      disabled:opacity-60
      disabled:cursor-not-allowed
    "
  >
    {loading ? "Sending..." : "Send Message"}
  </button>
</div>

        </form>

      </div>
    </section>
  );
}
