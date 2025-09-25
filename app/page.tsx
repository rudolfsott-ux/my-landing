'use client'

import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Page() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | undefined>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) {
      setStatus('error')
      setErrorMsg('Please enter a valid email address.')
      return
    }
    console.log({ email })
    setStatus('success')
    setErrorMsg(undefined)
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center relative px-4"
      style={{ backgroundImage: "url('/ranran-bg.png')" }}
    >
      {/* Section 1: LAUNCHING JANUARY 2026 */}
      <motion.h2
        className="text-[#BDBDBD] font-outfit font-normal text-[21px] tracking-[6px] leading-[72px] text-center mt-[224.79px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        LAUNCHING JANUARY 2026
      </motion.h2>

      {/* Section 2: Join fellow early adopters */}
      <motion.h1
        className="text-white font-outfit font-medium text-[61px] leading-[61px] tracking-[5%] text-center mt-[100px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Join fellow early adopters shaping the future of car sharing
      </motion.h1>

      {/* Section 3: Get early access */}
      <motion.p
        className="text-[#F7F7F7] font-outfit font-light text-[24px] leading-[27px] tracking-[5%] text-center mt-[40px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Get early access to something exciting!<br />
        Join the waiting list and stay in the loop on our launch.
      </motion.p>

      {/* Section 4: Email input + Join button */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-[60px] gap-4 w-full max-w-[574px]"
      >
        <input
          type="email"
          placeholder="Your e-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[72px] rounded-[36px] px-6 border-2 border-[#BDBDBD] bg-[#F7F7F7] text-[#BDBDBD] font-outfit placeholder-[#BDBDBD] focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-[570px] h-[72px] rounded-[20px] bg-gradient-to-r from-[#0B0926D9] via-[#7F9FB9] to-[#CC5760B2] text-white font-outfit font-semibold text-lg hover:opacity-90 transition"
        >
          Join waiting list
        </button>
        {status === 'success' && (
          <p className="text-green-600 mt-2 text-center">Submitted!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-2 text-center">{errorMsg}</p>
        )}
      </form>

      {/* Section 5: We’ll never spam */}
      <p className="text-[#F7F7F7] font-outfit font-light text-[12px] leading-[24px] tracking-[5%] text-center mt-[30px] w-[657px]">
        We’ll never spam or share your email. Unsubscribe anytime.
      </p>

      {/* Section 6: Follow us + logos */}
      <div className="flex items-center justify-center gap-4 mt-[300px]">
        <span className="text-[#F7F7F7] font-outfit font-light text-[15px] leading-[27px] tracking-[5%]">
          Follow us
        </span>
        <img src="/logo1.png" alt="Logo 1" className="w-[21px] h-[21px]" />
        <img src="/logo2.png" alt="Logo 2" className="w-[16px] h-[16px]" />
        <img src="/logo3.png" alt="Logo 3" className="w-[16px] h-[15px]" />
      </div>
    </div>
  )
}
