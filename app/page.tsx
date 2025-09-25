'use client'

import React, { useState } from 'react'
import { motion, Variants, easeOut } from 'framer-motion'

export default function Page() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | undefined>()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('idle')
    setErrorMsg(undefined)

    try {
      console.log({ email })
      // TODO: call your API here
      setStatus('success')
    } catch (err) {
      setErrorMsg('Something went wrong!')
      setStatus('error')
    }
  }

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('/ranran-bg.png')" }}
    >
      {/* Section 1 */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center font-outfit font-normal text-[21px] leading-[72px] tracking-[6px] text-[#F7F7F7] mt-[224.79px] w-[703px]"
      >
        LAUNCHING JANUARY 2026
      </motion.h2>

      {/* Section 2 */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center font-outfit font-medium text-[61px] leading-[61px] tracking-[5%] text-white mt-[40px] w-[1166px]"
      >
        Join fellow early adopters shaping the future of car sharing
      </motion.h1>

      {/* Section 3 */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center font-outfit font-light text-[24px] leading-[27px] tracking-[5%] text-[#F7F7F7] mt-[120px] w-[657px]"
      >
        Get early access to something exciting!<br />
        Join the waiting list and stay in the loop on our launch.
      </motion.p>

      {/* Input and Button */}
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-[60px] gap-4"
      >
        <input
          type="email"
          placeholder="Your e-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[574px] h-[72px] rounded-[36px] border-2 border-[#BDBDBD] px-6 text-[#BDBDBD] bg-[#F7F7F7] placeholder-[#BDBDBD]"
          required
        />
        <button
          type="submit"
          className="w-[570px] h-[72px] rounded-[20px] bg-gradient-to-r from-[#0B0926D9] via-[#7F9FB9] to-[#CC5760B2] text-white font-medium"
        >
          Join waiting list
        </button>
        {status === 'success' && <p className="text-green-600 mt-2">Submitted!</p>}
        {status === 'error' && <p className="tex
