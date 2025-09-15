import React from "react"

// Reusable Input Field Component
const InputField = ({ type, placeholder, name, handleChange }) => {
  return (
    <input
      className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}   // ✅ this triggers handleChange when user types
      required
    />
  )
}

export default InputField
