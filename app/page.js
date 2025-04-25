'use client'
import Navbar from "@/components/Navbar";
import Header from "@/components/Header"
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  // Setando dark mode de acordo com configuração do sistema
  useEffect(() => {
    if(localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [])

  useEffect(() => {

    if(darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }

  }, [darkMode])

  return (
    <>
      <Navbar isDarkMode={darkMode} setIsDarkMode={setDarkMode}/>
      <Header isDarkMode={darkMode}/>
      <About isDarkMode={darkMode}/>
      <Services isDarkMode={darkMode}/>
      <Projects isDarkMode={darkMode}/>
      <Contact isDarkMode={darkMode}/>
      <Footer isDarkMode={darkMode}/>
    </>
  );
}
