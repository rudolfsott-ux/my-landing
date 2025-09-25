'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Page() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | undefined>()

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg(undefined)

    if (!validateEmail(email)) {
      setStatus('error')
      setErrorMsg('Please enter a valid email address')
      return
    }

    try {
      await new Promise((res) => setTimeout(res, 1000))
      console.log({ email })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Try again.')
    }
  }

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between bg-cover bg-center px-4 sm:px-6 md:px-12"
      style={{ backgroundImage: "url('/ranran-bg.png')" }}
    >
      {/* Top Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex flex-col items-center justify-center mt-28 sm:mt-36 md:mt-48 text-center space-y-6 w-full"
      >
        {/* Launching Header */}
        <h1 className="font-outfit font-normal text-[#BDBDBD] tracking-[6px] text-[21px] sm:text-[24px] md:text-[28px] leading-[72px] max-w-[703px] mx-auto">
          LAUNCHING JANUARY 2026
        </h1>

        {/* Main Title */}
        <h2 className="font-outfit font-medium text-white tracking-[5%] text-[40px] sm:text-[50px] md:text-[61px] leading-[61px] max-w-[1166px] px-2 mx-auto">
          Join fellow early adopters shaping the future of car sharing
        </h2>

        {/* Subtitle */}
        <p className="font-outfit font-light text-white tracking-[5%] text-[18px] sm:text-[22px] md:text-[24px] leading-[27px] max-w-[657px] px-2 mx-auto">
          Get early access to something exciting! Join the waiting list and stay in the loop on our launch.
        </p>
      </motion.div>

      {/* Form Section */}
      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[574px]"
      >
        <input
          type="email"
          placeholder="Your e-mail address here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 border-2 border-[#BDBDBD] rounded-full p-4 placeholder-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full sm:w-auto"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full sm:w-auto py-4 px-8 rounded-xl font-semibold text-white text-lg transition-all duration-300
            ${status === 'idle' ? 'bg-gradient-to-r from-[#0B0926D9] via-[#7F9FB9] to-[#CC5760B2] hover:scale-105 hover:shadow-lg' : ''}
            ${status === 'loading' ? 'bg-gray-500 cursor-not-allowed' : ''}
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

      {/* Disclaimer */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-6 font-outfit font-light tracking-[5%] text-white/80 text-[12px] leading-[24px] max-w-[657px] text-center mx-auto px-2"
      >
        We’ll never spam or share your email. Unsubscribe anytime.
      </motion.p>

      {/* Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex items-center gap-4 mb-12"
      >
        <span className="text-white text-[15px] font-light tracking-[5%]">Follow us</span>
        <div className="flex gap-3">
          <img src="/logo1.png" alt="Logo 1" className="w-[21px] h-[21px]" />
          <img src="/logo2.png" alt="Logo 2" className="w-[16px] h-[16px]" />
          <img src="/logo3.png" alt="Logo 3" className="w-[16px] h-[15px]" />
        </div>
      </motion.div>

      {/* Submission feedback */}
      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute mt-4 text-green-500 text-center bottom-36 sm:bottom-36 md:bottom-36"
        >
          Submitted!
        </motion.p>
      )}
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute mt-4 text-red-500 text-center bottom-36 sm:bottom-36 md:bottom-36"
        >
          {errorMsg}
        </motion.p>
      )}
    </div>
  )
}
