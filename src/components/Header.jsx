import React from 'react'
import nutrisalImg from '../assets/nutrisal.png'

export const Header = () => {
  return (
    <div className=' flex justify-center bg-vacas bg-no-repeat bg-cover md:bg-50%  bg-center py-8 md:py-[100px] '>
        <img className=' w-[300px] md:w-[550px] hover:scale-110 md:hover:scale-115 duration-500' src={nutrisalImg} alt="" />
    </div>
  )
}
