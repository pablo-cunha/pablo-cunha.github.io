import { motion } from "motion/react"
import { serviceData } from '@/assets/assets'
import React from 'react'

const Services = () => {

  return (
    <motion.div initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h2 initial={{y: -20, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        className='text-center text-5xl font-Ovo'>
            Minhas Competências
        </motion.h2>
        <motion.p initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay:0.4, duration: 0.5}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Competências conquistadas em meio acadêmico, cursos e bootcamps.
        </motion.p>
        <motion.div initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay:0.6, duration: 0.6}}
        className="grid grid-cols-auto gap-6 my-10">
            {
                serviceData.map(({icon, title, description, link}, index) => (
                    <div key={index}
                    className='border border-gray-400 rounded-lg px-8 py-12
                    hover:shadow-black cursor-pointer hover:bg-lightHover
                    hover:-translate-y-1 duration-500 dark:hover:bg-darkHover
                    dark:hover:shadow-white'>
                        <img src={icon} alt='icone de competência'/>
                        <h3  className="text-lg my-4 text-gray-700
                        dark:text-white">{title}</h3>
                        <p className='text-sm text-gray-600 leading-5
                        dark:text-white/80'>{description}</p>
                        {/* <a href={link} 
                        className='flex items-center gap-2 text-sm mt-5'>
                            Certificado: <img alt='icone de seta para a direita'
                            src={assets.right_arrow} className='w-4'/>
                        </a> */}
                    </div>
                ))
            }
        </motion.div>
    </motion.div>
  )
}

export default Services