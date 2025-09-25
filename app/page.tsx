'use client'

import React, { useState } from 'react'
import { motion, Variants, easeOut } from 'framer-motion'

// Fade-up variant for single element
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut, delay: custom },
  }),
}

export default function Page() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | undefined>()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('idle')
    setErrorMsg(undefined)

    if (email) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg('Please enter a valid email')
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center px-4 md:px-0"
      style={{ backgroundImage: "url('/ranran-bg.png')" }}
    >
      {/* Launching text */}
      <motion.h2
        className="text-[#BDBDBD] font-outfit font-normal text-center mt-[225px] md:mt-[10vh] text-[21px] md:text-[3vw] leading-[72px] tracking-[6px]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        LAUNCHING JANUARY 2026
      </motion.h2>

      {/* Main headline */}
      <motion.h1
        className="text-white font-outfit font-medium text-center mt-[155px] md:mt-[8vh] text-[61px] md:text-[6vw] leading-[61px] tracking-[5%]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
      >
        Join fellow early adopters shaping the future of car sharing
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="text-[#F7F7F7] font-outfit font-light text-center mt-[85px] md:mt-[5vh] text-[24px] md:text-[2.5vw] leading-[27px] tracking-[5%] max-w-[90vw] md:max-w-[657px]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.4}
      >
        Get early access to something exciting! Join the waiting list and stay in the loop on our launch.
      </motion.p>

      {/* Email form */}
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-[70px] md:mt-[4vh] gap-4 w-full max-w-[574px]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.6}
      >
        <input
          type="email"
          placeholder="Your e-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[72px] rounded-[36px] border-2 border-[#BDBDBD] bg-[#F7F7F7] px-6 text-[#BDBDBD] text-lg placeholder-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <button
          type="submit"
          className="w-[570px] h-[72px] rounded-[20px] bg-gradient-to-r from-[#0B0926D9] via-[#7F9FB9] to-[#CC5760B2] text-white font-semibold text-lg hover:scale-105 transform transition-all duration-300"
        >
          Join waiting list
        </button>
        {status === 'success' && <p className="text-green-600 mt-2">Submitted!</p>}
        {status === 'error' && <p className="text-red-600 mt-2">{errorMsg}</p>}
      </motion.form>

      {/* Disclaimer */}
      <motion.p
        className="text-[#F7F7F7] font-outfit font-light text-center mt-[70px] text-[12px] leading-[24px] tracking-[5%] max-w-[657px]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.8}
      >
        We’ll never spam or share your email. Unsubscribe anytime.
      </motion.p>

      {/* Footer with Follow Us and Logos */}
      <motion.div
        className="flex items-center justify-center gap-4 mt-[320px] md:mt-[20vh]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <p className="text-[#F7F7F7] font-outfit font-light text-[15px] leading-[27px] tracking-[5%]">
          Follow us
        </p>
        <motion.img
          src="/logo1.png"
          alt="Logo 1"
          className="w-[21px] h-[21px]"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src="/logo2.png"
          alt="Logo 2"
          className="w-[16px] h-[16px]"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src="/logo3.png"
          alt="Logo 3"
          className="w-[16px] h-[15px]"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  )
}
