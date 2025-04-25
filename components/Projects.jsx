import { motion } from "motion/react"
import { projectData } from '@/assets/assets'
import React from 'react'

const Projects = ({isDarkMode}) => {

  return (
    <motion.div initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='portfolio' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 initial={{y: -20, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        className='text-center mb-2 text-lg font-Ovo'>
            Meu portfólio
        </motion.h4>
        <motion.h2 initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
        className='text-center text-5xl font-Ovo'>
            Meus últimos projetos
        </motion.h2>
        <motion.p initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay:0.7, duration: 0.5}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
           Bem-vindo ao meu porfólio! Veja uma amostra dos meus mais recentes
           projetos em desenvolvimento web.
        </motion.p>
        <motion.div initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay:0.3, duration: 0.6}}
        className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
            {
                projectData.map((project, index) => (
                    <div key={index} style={{backgroundImage: `url(${project.bgImage})`}}
                    className='aspect-square bg-no-repeat bg-cover bg-center
                    rounded-lg relative cursor-pointer group'>
                        <div className='bg-white w-10/12 rounded-md absolute
                        bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                        justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h3 className='font-semibold'>{project.title}</h3>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 
                            aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
                            group-hover:bg-purple-300 transition'>
                                <a href={project.link} target='_blank' rel="noopener noreferrer">
                                    <img src='/images/send-icon.png' alt='icone de enviar'
                                    className='w-5'/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </motion.div>
        <motion.a initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay:0.5, duration: 0.5}}
        href="https://github.com/pablo-cunha" target='_blank' rel="noopener noreferrer"
        className='w-max flex items-center justify-center gap-2
        text-gray-700 border-[0.5px] border-gray-700 rounded-full
        py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white
        dark:hover:bg-darkHover'>
            Ver mais <img src={isDarkMode ? '/images/right-arrow-bold-dark.png' : '/images/right-arrow-bold.png'} 
            alt='seta para a direita' className='w-4'/>
        </motion.a>
    </motion.div>
  )
}

export default Projects