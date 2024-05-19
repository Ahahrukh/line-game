import React from 'react'
import { useState } from 'react';
const SingleLine = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          style={{
            // Custom styles for the thumb
            WebkitAppearance: 'none',
            appearance: 'none',
            '&::-webkit-slider-thumb': {
              WebkitAppearance: 'none',
              appearance: 'none',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: '#3b82f6', // Tailwind color `bg-blue-500`
            },
            '&::-moz-range-thumb': {
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: '#3b82f6', // Tailwind color `bg-blue-500`
            },
            '&::-ms-thumb': {
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: '#3b82f6', // Tailwind color `bg-blue-500`
            },
          }}
        />
    </div>
  )
}

export default SingleLine