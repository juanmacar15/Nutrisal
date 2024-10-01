import React from 'react'

import toroNutrisal from '../assets/toro-nutrisal.png'

export const QuienesSomos = () => {
  return (
    <>
      <section className='text-gray-700 flex justify-center'>
        <div className="container  flex flex-col justify-center px-5 py-5 md:px-20 md:py-20 md:flex-row lg:px-60 items-center">
          <div className="lg:flex-grow md:w-1/2  md:pr-16  flex flex-col md:items-center md:text-left  md:mb-0 items-center text-center">
            <h1 className="title-font text-center lg:text-3xl text-xl mb-4 font-medium text-[#00c022]">¿Quienes Somos?</h1>
            <p className="mb-1 leading-relaxed text-sm lg:text-xl">Somos una empresa dedicada a la producción de sales mineralizadas/proteinadas para el consumo animal, en especial en bovinos en las etapas de levante, engorde, ceba y producción lactea.</p>
            <button class="flex mx-auto my-4 md:my-6 text-white bg-[#00c022] border-0 py-2 px-8 focus:outline-none hover:bg-[#289e2a] rounded text-lg hover:scale-125 duration-500"><a href={`https://wa.me/573217580062/?text=Buenas,%20tienes%20sal%20mineralizada%20disponible?`} target='_blank'>Adquirir producto</a></button>
          </div>
          <div className="mx-auto lg:max-w-[23%] lg:w-[50%] md:w-1/2 w-[70%]">
            <img className="object-cover object-center rounded" alt="toro-nutrisal" src={toroNutrisal} />
          </div>
        </div>
      </section>
    </>
  )
}
