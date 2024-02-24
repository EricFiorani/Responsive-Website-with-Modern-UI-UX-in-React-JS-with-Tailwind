import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient rounded-[10px] text-[18px] text-primary outline-none font-medium font-poppins ${styles}`}>
      Get Started
    </button>
  )
}

export default Button