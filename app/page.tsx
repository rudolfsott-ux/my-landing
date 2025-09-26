"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
};

const fadeUpDelayed: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any, delay: 0.2 } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const socialContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.8 } },
};

const socialIcon: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main
      className="relative flex flex-col items-center justify-between min-h-screen bg-cover bg-center px-6 py-12"
      style={{ backgroundImage: "url('/ranran-bg.png')" }}
    >
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Launching text */}
        <motion.h2
          className="text-[#F7F7F7] font-outfit font-normal text-center tracking-[0.15em] text-[clamp(0.9rem,2vw,1.4rem)]"
          variants={fadeUpDelayed}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          LAUNCHING JANUARY 2026
        </motion.h2>

        {/* Main headline */}
        <motion.h1
          className="text-white font-outfit font-semibold text-center mt-10 leading-tight tracking-wide max-w-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
        >
          <div className="flex flex-col items-center">
            <motion.span className="block whitespace-nowrap text-center">
              Join fellow early adopters shaping the
            </motion.span>
            <motion.span className="block whitespace-nowrap text-center">
              future of car sharing
            </motion.span>
          </div>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-[#E0E0E0] font-outfit font-light text-center mt-6 max-w-2xl text-[clamp(1rem,2vw,1.25rem)] tracking-wide"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Get early access to something exciting! <br />
          Join the waiting list and stay in the loop on our launch.
        </motion.p>

        {/* Signup form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 mt-12 w-full max-w-xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.input
            type="email"
            placeholder="Your e-mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full max-w-[574px] h-[72px] px-5 rounded-[36px] border-2 border-[#BDBDBD] bg-[#F7F7F7] text-[#333] placeholder-[#BDBDBD] font-outfit text-base focus:outline-none focus:ring-2 focus:ring-white transition"
            variants={fadeUp}
          />

          <motion.button
            type="submit"
            className="w-full max-w-[570px] h-[72px] rounded-[20px] text-white font-outfit font-medium text-base sm:text-lg transition-all duration-300"
            style={{
              background:
                "linear-gradient(90deg, #0B0926D9 0%, #7F9FB9 50%, #CC5760B2 100%)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
            variants={fadeUp}
            whileHover={{
              scale: 1.03,
              y: -2,
              background:
                "linear-gradient(90deg, #0B0926D9 0%, #7F9FB9 52%, #CC5760B2 100%)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", duration: 0.6 }}
          >
            Join waiting list
          </motion.button>

          <motion.p
            className="text-[#F7F7F7B0] font-outfit font-light text-center mt-6 max-w-[657px] text-[12px] leading-[24px] tracking-[0.05em]"
            variants={fadeUp}
          >
            We’ll never spam or share your email. Unsubscribe anytime.
          </motion.p>
        </motion.form>

        {/* Status messages */}
        {status === "success" && (
          <p className="text-green-500 mt-3 font-outfit">Thanks! You’re on the list 🚀</p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-3 font-outfit">Oops! Something went wrong. Try again.</p>
        )}
      </div>

      {/* Social Logos pinned to bottom */}
      <motion.div
        className="fixed bottom-4 left-0 right-0 w-full flex items-center justify-center gap-4"
        variants={socialContainer}
        initial="hidden"
        animate="visible" // always animate on load
      >
        <motion.span
          className="text-[#F7F7F7] font-outfit text-sm mr-2"
          variants={socialIcon}
        >
          Follow us
        </motion.span>

        <motion.a
          href="#"
          aria-label="Logo1"
          variants={socialIcon}
          whileHover={{ scale: 1.15, y: -3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image src="/logo1.png" alt="Logo1" width={21} height={21} />
        </motion.a>

        <motion.a
          href="#"
          aria-label="Logo2"
          variants={socialIcon}
          whileHover={{ scale: 1.15, y: -3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image src="/logo2.png" alt="Logo2" width={16} height={16} />
        </motion.a>

        <motion.a
          href="#"
          aria-label="Logo3"
          variants={socialIcon}
          whileHover={{ scale: 1.15, y: -3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image src="/logo3.png" alt="Logo3" width={16} height={15} />
        </motion.a>
      </motion.div>
    </main>
  );
}
