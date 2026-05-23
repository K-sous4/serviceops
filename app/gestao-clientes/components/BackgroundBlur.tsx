import React from 'react'

export default function BackgroundBlur() {
  return (
    <>
      <div className="fixed top-[-10%] right-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
    </>
  )
}
