import { motion } from "motion/react"
import React from 'react'
import { infoList } from '@/assets/assets'


const About = ({isDarkMode}) => {
  return (
    <motion.div initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>
            Introdução
        </motion.h4>
        <motion.h2 initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.4}}
        className='text-center text-5xl font-Ovo'>
            Sobre mim
        </motion.h2>
        <motion.div initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.7}}
        className="flex w-full flex-col sm:items-center lg:flex-row items gap-20 my-20">
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <img src='/images/github-profile.jpg' alt='foto de perfil'
                className='w-full rounded-3xl'/>
            </div>
            <div className="flex-1">
                <p className='mb-10 max-w-2xl font-Ovo'>
                    Sou um desenvolvedor fullstack com experiência em desenvolvimento de aplicações web e low-code.
                    Busco oportunidades em empresas de tecnologia onde possa aplicar e expandir meus conhecimentos em desenvolvimento de software.
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                        dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                        key={index}>
                            <img src={isDarkMode ? iconDark : icon} alt={title}
                            className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700
                            dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm
                            dark:text-white/80'>{description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default About