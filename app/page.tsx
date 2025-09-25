"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as any, // TS strict fix
    },
  },
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Replace with API call when backend ready
      // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) });

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black px-6 py-12">
      {/* Launching text */}
      <motion.h2
        className="text-[#F7F7F7] font-outfit font-normal text-center tracking-[0.15em] text-[clamp(0.9rem,2vw,1.4rem)]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        LAUNCHING JANUARY 2026
      </motion.h2>

      {/* Main headline */}
      <motion.h1
        className="text-white font-outfit font-semibold text-center mt-10 leading-tight tracking-wide text-[clamp(2rem,5vw,3.5rem)] max-w-4xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Join fellow early adopters shaping the future of car sharing
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-[#E0E0E0] font-outfit font-light text-center mt-6 max-w-2xl text-[clamp(1rem,2vw,1.25rem)] tracking-wide"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Get early access to something exciting! Join the waiting list and stay in the loop on our launch.
      </motion.p>

      {/* Signup form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full max-w-xl"
      >
        <input
          type="email"
          placeholder="Your e-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-5 py-4 rounded-full border border-gray-600 bg-[#1A1A1A] text-white placeholder-gray-400 font-outfit text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white transition"
        />

        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-outfit font-medium text-base sm:text-lg hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          Join waiting list
        </button>
      </form>

      {/* Status messages */}
      {status === "success" && (
        <p className="text-green-500 mt-3 font-outfit">Thanks! You’re on the list 🚀</p>
      )}
      {status === "error" && (
        <p className="text-red-500 mt-3 font-outfit">Oops! Something went wrong. Try again.</p>
      )}

      {/* Logos */}
      <motion.div
        className="flex justify-center gap-10 mt-20 flex-wrap"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["Logo1", "Logo2", "Logo3"].map((logo, idx) => (
          <motion.div
            key={idx}
            className="w-24 h-24 bg-gray-800 rounded-xl flex items-center justify-center cursor-pointer shadow-md"
            whileHover={{ y: -6, scale: 1.08 }}
            transition={{ duration: 0.25 }}
          >
            <span className="text-white font-outfit text-sm">{logo}</span>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
