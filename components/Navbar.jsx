import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const mobileMenuRef = useRef();

    const openMenu = () => {
        mobileMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        mobileMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        })
    }, [])

  return (
    <>
        {/* Menu Desktop */}
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt='Imagem de fundo' 
            className='w-full'/>
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
        flex items-center justify-between z-50 
        ${isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
            <a href="#top">
                <Image src={assets.logo} className='w-28 cursor-pointer mr-14'
                alt='Logotipo'/>
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
            ${isScrolled ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#about">Sobre</a></li>
                <li><a className='font-Ovo' href="#services">Competências</a></li>
                <li><a className='font-Ovo' href="#portfolio">Portfolio</a></li>
                <li><a className='font-Ovo' href="#contacts">Contato</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                <button>
                    <Image src={assets.moon_icon} alt='Icone de lua' className='w-6'/>
                </button>
                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500
                rounded-full ml-4 font-Ovo'>
                    Contato <Image src={assets.arrow_icon} className='w-3' alt='Icone de seta'/>
                </a>
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt='Icone de menu'
                    className='w-6'/>                    
                </button>
            </div>

            {/* Menu Mobile */}     
            <ul ref={mobileMenuRef} className='flex md:hidden flex-col gap-4 py-4 px-10 fixed -right-64
            top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={assets.close_black} alt='Icone de fechar'
                    className='w-5 cursor-pointer'/>
                </div>
                <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#about">Sobre</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#services">Serviços</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#portfolio">Portfolio</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#contacts">Contato</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar