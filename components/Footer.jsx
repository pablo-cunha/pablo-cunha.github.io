import React from 'react'
import { FaLinkedin } from "react-icons/fa6"
import { FaSquareGithub } from "react-icons/fa6";

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <img src={isDarkMode ? '/images/logo_dark.png' : '/images/logo.png'} 
            alt='imagem logo' className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <img src={isDarkMode ? '/images/mail_icon_dark.png' : '/images/mail_icon.png'}
                alt='imagem logo' className='w-6'/>
                dev.pablocunha@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-evenly border-t 
        border-gray-400 mx-[10%] mt-12 py-6'>
            <p>Desenvolvido por Pablo Cunha <br/> Rio de Janeiro, RJ - 2025</p>
            <div className='flex justify-center gap-2 mt-3'>
                <a href="https://www.linkedin.com/in/pablo-cunha/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin color={isDarkMode ? "#f0f0f0" : "#0f0f0f"} size='2.5em'/>
                </a>
                <a href="https://github.com/pablo-cunha" target="_blank" rel="noopener noreferrer">
                    <FaSquareGithub color={isDarkMode ? "#f0f0f0" : "#0f0f0f"} size='2.5em'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer