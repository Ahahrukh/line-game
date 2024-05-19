import React from 'react'
import Slider from './Slider'
import SingleLine from './SingleLine'
import background from '../../images/background.jpg'
const LineFilter = () => {
  return (
    <div className="w-full h-screen fixed flex inset-0 z-10" style={{backgroundImage:`url(${background})`}}>
        <div className='ml-10 w-1/4 h-screen'>
           <div className='border mt-4 py-1 bg-gray-300 bg-opacity-10 rounded-xl px-1 mx-auto w-5/6 flex justify-between'>
            <button className='w-36 py-2 text-white hover:bg-green-500 hover:rounded-lg bg-opacity-10'>Manual</button>
            <button className='w-36 py-2 text-white hover:bg-green-500 hover:rounded-lg bg-opacity-10'>Auto</button>
           </div>
           <div className='w-5/6 mx-auto bg-gray-400 h-3/4 mt-4 rounded-xl bg-opacity-10'>
              <div className='w-full px-4 py-2 text-left'>
                <label htmlFor="" className='text-white'>BET Amount</label>
                <Slider/>
              </div>
           </div>
           <button className='mt-4 border w-40 rounded-xl py-1 bg-green-400 text-white hover:bg-green-500'>BET</button>
        </div>
        <div className='text-white w-3/4 align-center text-8xl'>
          <div className='w-1/2 mx-auto mt-64'>
            <SingleLine/>
          </div>
        </div>
    </div>
  )
}

export default LineFilter