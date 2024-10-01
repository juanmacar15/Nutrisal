import React from 'react'
import dinero from '../assets/dinero.png'
import calidad from '../assets/calidad.png'
import bienestar from '../assets/bienestar.png'

export const PorqueElejirnos = () => {
    return (
        <>
            <hr class="my-7 mx-[50px] md:mx-[110px] h-1 md:h-2 border-t-0 rounded-xl bg-[#95a899] " />
            <h1 className='title-font text-center py-[10px] md:py-[20px] md:text-3xl text-xl mb-4 font-medium text-[#00c022]'>¿Por Qué Elejirnos?</h1>
            <section classNameName="text-gray-600 body-font p">
                <div classNameName="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap m-4 text-gray-700">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className=" text-center">
                                <h2 className="text-gray-900  font-medium title-font tracking-wider text-lg">Por nuestra calidad</h2>
                                <hr class="my-1 mx-[50px] md:mx-[110px] h-1 md:h-1 border-t-0 rounded-xl bg-[#00c022] " />
                                <p className="leading-relaxed text-lg font-normal">Somos una empresa con altos estándares de calidad, asegurando que cada producto cumple con los requisitos más exigentes. Nuestro proceso de producción es supervisado minuciosamente para garantizar la consistencia, seguridad y efectividad en cada lote que fabricamos.</p>
                                <img alt="calidad" className="w-20 h-20 my-8 inline-block " src={calidad} />

                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <h2 className="text-gray-900  font-medium title-font tracking-wider text-lg">Por el bienestar de tus animales</h2>
                                <hr class="my-1 mx-[50px] md:mx-[110px] h-1 md:h-1 border-t-0 rounded-xl bg-[#00c022] " />
                                <p className="leading-relaxed text-lg font-normal">Nutrisal garantiza el contenido nutricional de sus productos, que además de minerales esenciales, incluye proteína vegetal (soya), nitrógeno no proteico, vitaminas y microorganismos que mejoran la digestión de los animales.</p>
                                <img alt="bienestar" className="w-20 h-20 my-8 inline-block" src={bienestar} />

                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <h2 className="text-gray-900  font-medium title-font tracking-wider text-lg">Por el bien de tu bolsillo</h2>
                                <hr class="my-1 mx-[50px] md:mx-[110px] h-1 md:h-1 border-t-0 rounded-xl bg-[#00c022] " />
                                <p className="leading-relaxed text-lg font-normal">Entendemos la importancia de ofrecer productos accesibles sin sacrificar calidad. Nuestros productos son los más económicos en relación calidad-precio. Optimizamos procesos para reducir costos y permitirte cuidar la salud de tus animales sin afectar tus finanzas.</p>
                                <img alt="dinero" className="w-20 h-20 my-8 inline-block" src={dinero} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="my-7 mx-[50px] md:mx-[110px] h-1 md:h-2 border-t-0 rounded-xl bg-[#95a899] " />

        </>
    )
}
