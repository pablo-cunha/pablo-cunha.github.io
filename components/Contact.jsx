import { motion } from "motion/react"
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
const Contact = () => {

  return (
    <motion.div initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Contato</h4>
        <h2 className='text-center text-5xl font-Ovo'>Entre em contato</h2>
        <p className='text-center text-xl max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
           Obrigado por visitar meu portfolio! Sinta-se à vontade para se 
           conectar e enviar uma mensagem no meu Linkedin.
        </p>
        <motion.div initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay:0.4, duration: 0.5}}
        className='flex justify-center items-center'>
            <a href="https://www.linkedin.com/in/pablo-cunha/" target='_blank'
            rel="noopener noreferrer">
                <button className='flex max-2xl bg-blue-600 hover:bg-blue-800
                text-white items-center gap-7 px-8 py-4 rounded-xl'>
                    <FaLinkedin size='2em' color='white'/> Linkedin
                </button>
            </a>
        </motion.div>

    </motion.div>
  )
}

export default Contact