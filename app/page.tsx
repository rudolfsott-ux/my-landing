"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } },
};

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    if (email.includes("@")) setStatus("success");
    else setStatus("error");
  };

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-start overflow-hidden">
      {/* Background */}
      <img
        src="/ranran-bg.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <motion.h2
        className="text-[#BDBDBD] font-outfit font-normal text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ fontSize: "clamp(21px, 3vw, 21px)", lineHeight: "72px", letterSpacing: "6px" }}
      >
        LAUNCHING JANUARY 2026
      </motion.h2>

      <motion.h1
        className="text-white font-outfit font-medium text-center mt-16 max-w-[90%]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ fontSize: "clamp(40px, 6vw, 61px)", lineHeight: "1.2", letterSpacing: "5%" }}
      >
        Join fellow early adopters shaping the future of car sharing
      </motion.h1>

      <motion.p
        className="text-[#F7F7F7] font-outfit font-light text-center mt-8 max-w-[90%]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: "27px", letterSpacing: "5%" }}
      >
        Get early access to something exciting! <br />
        Join the waiting list and stay in the loop on our launch.
      </motion.p>

      {/* Email form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-10 w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Your e-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-18 rounded-full border-2 border-[#BDBDBD] bg-[#F7F7F7] px-6 text-[#BDBDBD] text-lg focus:outline-none"
        />
        <button
          type="submit"
          className="mt-6 w-full h-18 rounded-[20px] bg-gradient-to-r from-[#0B0926D9] via-[#7F9FB9] to-[#CC5760B2] text-white font-outfit font-medium text-lg"
        >
          Join waiting list
        </button>
        {status === "success" && (
          <p className="text-green-600 mt-2">Submitted!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">Please enter a valid email</p>
        )}
      </form>

      <motion.p
        className="text-[#F7F7F7] font-outfit font-light text-center mt-6 max-w-[90%]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ fontSize: "12px", lineHeight: "24px", letterSpacing: "5%" }}
      >
        We’ll never spam or share your email. Unsubscribe anytime.
      </motion.p>

      {/* Follow us & logos */}
      <div className="flex items-center justify-center mt-12 space-x-4">
        <p className="text-[#F7F7F7] font-outfit font-light text-center text-sm">
          Follow us
        </p>
        <motion.img
          src="/logo1.png"
          alt="Logo1"
          className="w-5 h-5 cursor-pointer"
          whileHover={{ scale: 1.2 }}
        />
        <motion.img
          src="/logo2.png"
          alt="Logo2"
          className="w-4 h-4 cursor-pointer"
          whileHover={{ scale: 1.2 }}
        />
        <motion.img
          src="/logo3.png"
          alt="Logo3"
          className="w-4 h-3.5 cursor-pointer"
          whileHover={{ scale: 1.2 }}
        />
      </div>

      <div className="h-24"></div>
    </div>
  );
}
