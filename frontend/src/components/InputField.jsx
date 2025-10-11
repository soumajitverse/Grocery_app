import React from "react"

const InputField = ({ type, placeholder, name, handleChange }) => {
  return name === 'message' ? (
    <textarea
      className='w-full px-2 py-2.5 border border-gray-500/30 rounded-xl outline-none text-gray-500 focus:border-primary transition h-40'
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}   // this triggers handleChange when user types
      required
    />
  ) : (
    <input
      className="w-full px-2 py-2.5 border border-gray-500/30 rounded-xl outline-none text-gray-500 focus:border-primary transition"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}   // this triggers handleChange when user types
      required
    />
  )
}

export default InputField
