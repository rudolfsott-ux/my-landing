'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Page() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Fake submission
    console.log({ email })
    setStatus('success')
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start sm:justify-center"
      style={{ backgroundImage: "url('/ranran-bg.png')" }}
    >
      {/* LAUNCHING JANUARY 2026 */}
      <motion.h2
        className="text-[#BDBDBD] font-outfit font-normal text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ letterSpacing: '6px', lineHeight: '72px' }}
      >
        LAUNCHING JANUARY 2026
      </motion.h2>

      {/* Join early adopters */}
      <motion.h1
        className="text-white font-outfit font-medium text-center mt-8 sm:text-4xl text-5xl leading-tight px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Join fellow early adopters shaping the future of car sharing
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-[#F7F7F7] font-outfit font-light text-center mt-6 sm:text-lg text-xl px-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Get early access to something exciting! Join the waiting list and stay in the loop on our launch.
      </motion.p>

      {/* Email input & button */}
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center w-full max-w-md px-4 sm:px-0 gap-4">
        <input
          type="email"
          placeholder="Your e-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-18 px-6 rounded-[36px] border-2 border-[#BDBDBD] bg-[#F7F7F7] text-[#BDBDBD] placeholder-[#BDBDBD] text-lg sm:text-base focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full h-18 rounded-[20px] bg-gradient-to-r from-[#0B0926D9] via-[#7F9FB9] to-[#CC5760B2] text-white font-medium text-lg hover:scale-105 transition-transform duration-300"
        >
          Join waiting list
        </button>
        {status === 'success' && <p className="text-green-600 mt-2 text-center">Submitted!</p>}
      </form>

      {/* Disclaimer */}
      <p className="text-[#F7F7F7] font-outfit font-light text-center mt-6 text-xs sm:text-sm max-w-md">
        We’ll never spam or share your email. Unsubscribe anytime.
      </p>

      {/* Follow us + social logos */}
      <div className="flex items-center justify-center mt-20 space-x-4 sm:mt-10">
        <p className="text-[#F7F7F7] font-outfit font-light text-sm sm:text-xs">Follow us</p>
        <img
          src="/logo1.png"
          className="w-5 h-5 hover:scale-110 transition-transform duration-300"
          alt="Logo 1"
        />
        <img
          src="/logo2.png"
          className="w-4 h-4 hover:scale-110 transition-transform duration-300"
          alt="Logo 2"
        />
        <img
          src="/logo3.png"
          className="w-4 h-4 hover:scale-110 transition-transform duration-300"
          alt="Logo 3"
        />
      </div>
    </div>
  )
}
