import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = ['Home','About','Skills','Projects','Blog','Contact'];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 5vw',
        background: scrolled ? 'rgba(26,10,46,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.4s',
      }}>
        {/* Logo */}
        <a href="#home" style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: '1.4rem', color: 'var(--text)', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '.3rem',
        }}>
          <span style={{
            background: 'var(--accent)', color: '#fff',
            width: 32, height: 32, borderRadius: 8,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: '1rem',
          }}>N</span>
          <span>Naqib<span style={{ color: 'var(--accent2)' }}>.</span></span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} style={{
                color: 'var(--muted)', textDecoration: 'none',
                fontSize: '.88rem', fontWeight: 500,
                transition: 'color .2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >{l}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
          {/* Theme toggle */}
          <button onClick={toggleTheme} style={{
            width: 40, height: 40, borderRadius: 10,
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            color: 'var(--text)', cursor: 'pointer',
            fontSize: '1.1rem', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            transition: 'var(--transition)',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
          title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          >
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
          </button>

          {/* Hire me */}
          <a href="#contact" style={{
            padding: '.6rem 1.4rem', borderRadius: 10,
            background: 'var(--accent)', color: '#fff',
            textDecoration: 'none', fontWeight: 600,
            fontSize: '.85rem', border: '1px solid var(--accent2)',
            transition: 'var(--transition)',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--accent2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '.3rem'}}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Hire me</a>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} style={{
            display: 'none', width: 40, height: 40, borderRadius: 10,
            border: '1px solid var(--border)', background: 'var(--surface)',
            color: 'var(--text)', cursor: 'pointer', fontSize: '1.2rem',
            alignItems: 'center', justifyContent: 'center',
          }} id="mob-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 65, left: 0, right: 0, zIndex: 199,
          background: 'rgba(26,10,46,0.98)', backdropFilter: 'blur(20px)',
          padding: '1.5rem 5vw', borderBottom: '1px solid var(--border)',
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ display: 'block', color: 'var(--muted)', textDecoration: 'none', padding: '.75rem 0', borderBottom: '1px solid var(--border)', fontWeight: 500 }}
            >{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #mob-btn { display: flex !important; }
          nav ul { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
