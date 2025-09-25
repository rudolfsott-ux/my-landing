'use client'

import React, { useState } from 'react'

export default function Page() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | undefined>()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('idle')
    setErrorMsg(undefined)

    // Replace this with your server/API call
    console.log({ email })

    // Mock submission success
    setStatus('success')
  }

  return (
    <div
      className="relative w-[1930px] h-[1288px] mx-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/ranran-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Section 1: Main title */}
      <h2
        className="text-[#F7F7F7] font-normal text-[21px] leading-[72px] text-center flex items-center justify-center"
        style={{
          width: '703px',
          height: '143px',
          top: '224.79px',
          left: '596.44px',
          position: 'absolute',
          fontFamily: 'Outfit, sans-serif',
          letterSpacing: '6px', // positive letter spacing
        }}
      >
        LAUNCHING JANUARY 2026
      </h2>

      {/* Section 2: Subtitle */}
      <h3
        className="text-white font-medium text-[61px] leading-[61px] tracking-[0.05em] text-center flex items-center justify-center"
        style={{
          width: '1166px',
          height: '60px',
          top: '379.79px',
          left: '383.44px',
          position: 'absolute',
          fontFamily: 'Outfit, sans-serif',
        }}
      >
        Join fellow early adopters shaping the future of car sharing
      </h3>

      {/* Section 3: Call-to-action text */}
      <p
        className="text-white font-light text-[24px] leading-[27px] tracking-[0.05em] text-center flex items-center justify-center"
        style={{
          width: '657px',
          height: '35px',
          top: '545.79px',
          left: '617.44px',
          position: 'absolute',
          fontFamily: 'Outfit, sans-serif',
        }}
      >
        Get early access to something exciting!<br />
        Join the waiting list and stay in the loop on our launch.
      </p>

      {/* Section 4: Email input */}
      <input
        type="email"
        placeholder="Your e-mail address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-[#F7F7F7] border-[2px] border-[#BDBDBD] rounded-[36px] text-lg px-6 placeholder-[#BDBDBD]"
        style={{
          width: '574px',
          height: '72px',
          top: '651.79px',
          left: '661.44px',
          position: 'absolute',
        }}
        required
      />

      {/* Section 5: Gradient button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="text-white font-semibold text-lg flex items-center justify-center rounded-[20px]
                   bg-gradient-to-r from-[#0B0926D9] via-[#7F9FB9] to-[#CC5760B2] transition hover:brightness-110"
        style={{
          width: '570px',
          height: '72px',
          top: '758.79px',
          left: '661.44px',
          position: 'absolute',
        }}
      >
        Join waiting list
      </button>

      {/* Section 6: Disclaimer */}
      <p
        className="text-white font-light text-[12px] leading-[24px] tracking-[0.05em] text-center flex items-center justify-center"
        style={{
          width: '657px',
          height: '35px',
          top: '830.79px',
          left: '619.44px',
          position: 'absolute',
          fontFamily: 'Outfit, sans-serif',
        }}
      >
        We’ll never spam or share your email. Unsubscribe anytime.
      </p>

      {/* Section 7: Follow us */}
      <p
        className="text-[#F7F7F7] font-light text-[15px] leading-[27px] tracking-[0.05em] text-center flex items-center justify-center"
        style={{
          width: '137px',
          height: '22px',
          top: '1149.79px',
          left: '839.44px',
          position: 'absolute',
          fontFamily: 'Outfit, sans-serif',
        }}
      >
        Follow us
      </p>

      {/* Section 8: Social logos */}
      <img
        src="/logo1.png"
        alt="Logo 1"
        className="absolute"
        style={{ top: '1149.79px', left: '955.44px', width: '21px', height: '21px' }}
      />
      <img
        src="/logo2.png"
        alt="Logo 2"
        className="absolute"
        style={{ top: '1152.79px', left: '989.44px', width: '16px', height: '16px' }}
      />
      <img
        src="/logo3.png"
        alt="Logo 3"
        className="absolute"
        style={{ top: '1152.79px', left: '1018.44px', width: '16px', height: '15px' }}
      />

      {/* Submission feedback */}
      {status === 'success' && (
        <p className="text-green-600 text-center absolute top-[900px] left-[50%] -translate-x-1/2">
          Submitted!
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center absolute top-[900px] left-[50%] -translate-x-1/2">
          {errorMsg}
        </p>
      )}
    </div>
  )
}
