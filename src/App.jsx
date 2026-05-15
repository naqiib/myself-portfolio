import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => { AOS.init({ duration: 700, once: true, offset: 80 }); }, []);

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Blog />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

const ScrollTop = () => {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const h = () => setVis(window.scrollY > 400);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  if (!vis) return null;
  return (
    <a href="#home" style={{
      position: 'fixed', bottom: '2rem', right: '2rem',
      width: 46, height: 46, borderRadius: 12,
      background: 'var(--accent)', color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textDecoration: 'none', fontSize: '1.3rem', zIndex: 100,
      boxShadow: '0 8px 24px rgba(139,47,201,.5)',
      transition: 'var(--transition)',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >↑</a>
  );
};

export default App;
