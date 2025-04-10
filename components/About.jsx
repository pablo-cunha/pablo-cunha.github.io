import React from 'react'
import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'


const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introdução</h4>
        <h2 className='text-center text-5xl font-Ovo'>Sobre mim</h2>
        <div className="flex w-full flex-col sm:items-center lg:flex-row items gap-20 my-20">
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='foto de perfil'
                className='w-full rounded-3xl'/>
            </div>
            <div className="flex-1">
                <p className='mb-10 max-w-2xl font-Ovo'>
                    Graduando em Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento web e
                    forte capacidade de aprendizado. Durante meu último estágio, desenvolvi habilidades sólidas em
                    resolução de problemas e adaptação a novos desafios. Busco oportunidades em empresas de
                    tecnologia onde possa aplicar e expandir meus conhecimentos em desenvolvimento de software.
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                        key={index}>
                            <Image src={icon} alt={title}
                            className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About