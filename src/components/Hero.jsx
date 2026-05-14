import React from 'react';

const Hero = () => (
  <section id="home" style={{
    minHeight: '100vh', display: 'flex', alignItems: 'center',
    padding: '8rem 5vw 4rem',
    background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(108,99,255,.12) 0%, transparent 70%)',
  }}>
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontSize: '.78rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem', fontWeight: 500 }}>
        <span style={{ width: 32, height: 1, background: 'var(--accent)', display: 'inline-block' }}></span>
        Frontend Developer
      </div>

      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
        <span style={{ display: 'block' }}>Hi, I'm</span>
        <span style={{ display: 'block', color: 'var(--accent)' }}>Naqib</span>
        <span style={{ display: 'block', WebkitTextStroke: '2px var(--accent)', color: 'transparent' }}>Zakir.</span>
      </h1>

      <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 400, marginBottom: '2.5rem', fontWeight: 300, lineHeight: 1.8 }}>
        Crafting beautiful digital experiences with <strong style={{ color: 'var(--text)' }}>Blazor .NET, React, and modern web tech.</strong>
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="https://wa.me/+923075764607" target="_blank" rel="noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          padding: '.85rem 2rem', borderRadius: '100px',
          background: 'var(--accent)', color: '#fff',
          textDecoration: 'none', fontWeight: 500, fontSize: '.9rem',
          transition: 'all .3s'
        }}>Let's Talk</a>

        <a href="/mycv.pdf" download style={{
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          padding: '.85rem 2rem', borderRadius: '100px',
          background: 'transparent', color: 'var(--text)',
          border: '1px solid var(--border)',
          textDecoration: 'none', fontWeight: 500, fontSize: '.9rem',
        }}>Download CV</a>
      </div>

      <div style={{ marginTop: '3rem', display: 'flex', gap: '2.5rem' }}>
        {[['3+','Projects'],['5+','Technologies'],['85%','Blazor .NET']].map(([num, label]) => (
          <div key={label}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800 }}>{num}</div>
            <div style={{ fontSize: '.75rem', color: 'var(--muted)', letterSpacing: '.05em' }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;