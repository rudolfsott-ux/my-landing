"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Example: send to backend / API
      // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) });

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <motion.h2
        className="text-[#F7F7F7] font-outfit font-normal text-center tracking-widest text-lg md:text-xl lg:text-2xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        LAUNCHING JANUARY 2026
      </motion.h2>

      <motion.h1
        className="text-white font-outfit font-medium text-center text-3xl md:text-5xl lg:text-6xl mt-12 leading-snug tracking-[0.05em]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Join fellow early adopters shaping the future of car sharing
      </motion.h1>

      <motion.p
        className="text-[#F7F7F7] font-outfit font-light text-center text-base md:text-lg mt-6 tracking-[0.05em]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Get early access to something exciting! Join the waiting list and stay in the loop on our launch.
      </motion.p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-12 w-full max-w-lg gap-4">
        <input
          type="email"
          placeholder="Your e-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-6 py-4 rounded-full border border-gray-400 bg-[#F7F7F7] text-[#BDBDBD] font-outfit text-lg focus:outline-none"
        />

        <button
          type="submit"
          className="w-full px-6 py-4 rounded-xl bg-white text-black font-outfit font-medium hover:bg-gray-200 transition-all duration-300"
        >
          Join waiting list
        </button>

        {status === "success" && <p className="text-green-600 mt-2">Submitted!</p>}
        {status === "error" && <p className="text-red-600 mt-2">Submission failed. Try again.</p>}
      </form>

      {/* Lower logos */}
      <motion.div className="flex justify-center gap-8 mt-16">
        {["Logo1", "Logo2", "Logo3"].map((logo, idx) => (
          <motion.div
            key={idx}
            className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white font-outfit">{logo}</span>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
