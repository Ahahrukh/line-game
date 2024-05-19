import React from 'react'
import { useState } from 'react';
const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className='grid'>
      <div  className='h-full'>
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
        <div className="w-full flex justify-between text-white py-2">
            <button className='bg-gray-400 w-10 h-8 rounded-lg text-xl pb-1 hover:bg-red-500 bg-opacity-20' onClick={()=>value>0?setValue(+value-10):null}>-</button>
            <div className='w-2/3 border rounded-lg text-center pt-1 bg-gray-600 bg-opacity-20'>$ : {value}</div>
            <button className='bg-gray-400 w-10 h-8 rounded-lg text-xl pb-1 hover:bg-green-500 bg-opacity-10' onClick={()=>value<100?setValue(+value+10):null}>+</button>
        </div>
        <div className='w-full'>
            <label htmlFor="" className='text-white'>Number Of Rounds</label>
            <div className='flex justify-between'>
                <button className="px-2 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">10</button>
                <buttton className="px-2 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">24</buttton>
                <buttton className="px-2 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">50</buttton>
                <buttton className="px-2 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">75</buttton>
                <buttton className="px-2 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">100</buttton>
                <buttton className="px-2 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">500</buttton>
                <buttton className="px-2 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">1000</buttton>
            </div>
            <label htmlFor="" className='text-white'>Lost limit</label>
            <div className='flex justify-between'>
                <button className="px-1 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">5x Bet</button>
                <buttton className="px-1 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">20x Bet</buttton>
                <buttton className="px-1 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">50x Bet</buttton>
                <buttton className="px-1 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">No Limit</buttton>
                <buttton className="px-1 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">Custom</buttton>
            </div>
            <label htmlFor="" className='text-white'>Single Win Limit</label>
            <div className='flex justify-between'>
                <button className="px-1 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">5x Bet</button>
                <buttton className="px-1 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">20x Bet</buttton>
                <buttton className="px-1 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">50x Bet</buttton>
                <buttton className="px-1 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">No Limit</buttton>
                <buttton className="px-1 text-white bg-gray-300 rounded-md text-sm hover:bg-red-300 bg-opacity-20">Custom</buttton>
            </div>
        </div>
        </div>
        <div className='border flex justify-between px-2 pt-1 h-10 rounded-lg text-white text-bold mt-64'>
            <h1 className='font-bold'>Demo Balance : </h1>
            <h1 className='font-bold'>$4000</h1>
        </div>
      </div>
  )
}

export default Slider