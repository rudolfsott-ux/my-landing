'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Page() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Reusable fade-in + slide-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      // Replace this with your Notion/API submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start bg-cover bg-center relative px-4 sm:px-6 lg:px-20"
      style={{ backgroundImage: "url('/ranran-bg.png')" }}
    >
      {/* LAUNCHING JANUARY 2026 */}
      <motion.h2
        className="font-outfit text-[#BDBDBD] font-normal text-[21px] sm:text-[24px] md:text-[28px] leading-[72px] tracking-[6px] text-center mt-28 sm:mt-36"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        LAUNCHING JANUARY 2026
      </motion.h2>

      {/* Headline */}
      <motion.h1
        className="font-outfit font-medium text-[36px] sm:text-[48px] md:text-[61px] leading-[1.2] tracking-[5%] text-white text-center mt-8 px-4 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Join fellow early adopters shaping the future of car sharing
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="font-outfit font-light text-[18px] sm:text-[20px] md:text-[24px] leading-[1.3] tracking-[5%] text-[#F7F7F7] text-center mt-6 max-w-xl px-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Get early access to something exciting! Join the waiting list and stay in the loop on our launch.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 mt-8 w-full max-w-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <input
          type="email"
          placeholder="Your e-mail address here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[72px] rounded-[36px] border-2 border-[#BDBDBD] bg-[#F7F7F7] px-6 text-[#BDBDBD] placeholder-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full h-[72px] mt-2 rounded-[20px] font-semibold text-white text-lg transition-all duration-300
            ${status === 'idle' ? 'bg-gradient-to-r from-[#0B0926D9] via-[#7F9FB9] to-[#CC5760B2] hover:scale-105 hover:shadow-lg' : ''}
            ${status === 'loading' ? 'bg-gray-500 cursor-not-allowed animate-pulse' : ''}
            ${status === 'success' ? 'bg-green-600 hover:scale-105' : ''}
            ${status === 'error' ? 'bg-red-600 hover:scale-105' : ''}
          `}
        >
          {status === 'idle' && 'Join waiting list'}
          {status === 'loading' && 'Submitting...'}
          {status === 'success' && 'Submitted!'}
          {status === 'error' && 'Try Again'}
        </button>
      </motion.form>

      {/* Privacy text */}
      <motion.p
        className="font-outfit font-light text-[12px] leading-[24px] tracking-[5%] text-[#F7F7F7] text-center mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        We’ll never spam or share your email. Unsubscribe anytime.
      </motion.p>

      {/* Follow us + logos */}
      <motion.div
        className="flex items-center gap-4 mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="font-outfit font-light text-[15px] leading-[27px] tracking-[5%] text-[#F7F7F7]">
          Follow us
        </p>
        <motion.img src="/logo1.png" alt="Logo 1" className="w-[21px] h-[21px]" whileHover={{ scale: 1.2 }} />
        <motion.img src="/logo2.png" alt="Logo 2" className="w-[16px] h-[16px]" whileHover={{ scale: 1.2 }} />
        <motion.img src="/logo3.png" alt="Logo 3" className="w-[16px] h-[15px]" whileHover={{ scale: 1.2 }} />
      </motion.div>
    </div>
  )
}
