import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 50));
  }, []);

  const links = ['home','about','skills','work','contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.25rem 5vw',
      background: 'rgba(10,10,15,0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <a href="#home" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--text)', textDecoration: 'none' }}>
        naqib<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link}`} style={{
              color: 'var(--muted)', textDecoration: 'none',
              fontSize: '.85rem', fontWeight: 500,
              letterSpacing: '.08em', textTransform: 'uppercase',
              transition: 'color .2s'
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;