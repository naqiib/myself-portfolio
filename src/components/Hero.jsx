import React, { useEffect, useState } from 'react';

const roles = ['Frontend Developer', 'Blazor .NET Developer', 'UI/UX Designer', 'AWS Cloud Enthusiast'];

const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = roles[idx];
    let t;
    if (!del && txt.length < cur.length) t = setTimeout(() => setTxt(cur.slice(0, txt.length + 1)), 75);
    else if (!del && txt.length === cur.length) t = setTimeout(() => setDel(true), 2000);
    else if (del && txt.length > 0) t = setTimeout(() => setTxt(cur.slice(0, txt.length - 1)), 35);
    else { setDel(false); setIdx((idx + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [txt, del, idx]);

  const techs = ['HTML', 'CSS', 'React', 'Blazor', 'C#', 'C++', 'Python', 'AWS', 'SQL', 'Figma', 'Git', 'GitHub'];

  const socialLinks = [
    { href: 'https://github.com/naqiib', icon: '🐙' },
    { href: 'https://www.linkedin.com/in/naqib-zakir-303711183/', icon: '💼' },
    { href: 'https://www.behance.net/naqibullah6', icon: '🎨' },
    { href: 'https://web.facebook.com/naaqeeb.razy', icon: '📘' },
  ];

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      alignItems: 'center',
      padding: '7rem 5vw 6rem',
      position: 'relative',
      overflow: 'hidden',
      gap: '2rem',
    }}>
      {/* BG decorations */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Graph line like reference */}
        <svg style={{ position: 'absolute', top: 0, right: 0, width: '70%', opacity: .12 }} viewBox="0 0 800 300" fill="none">
          <polyline points="0,250 150,180 300,220 450,80 600,150 750,40 800,60" stroke="var(--accent2)" strokeWidth="2" fill="none"/>
        </svg>
        {/* Glow orbs */}
        <div style={{ position: 'absolute', top: '20%', right: '30%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(139,47,201,.2)', filter: 'blur(80px)' }}/>
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(180,79,255,.1)', filter: 'blur(60px)' }}/>
      </div>

      {/* LEFT content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, marginBottom: '.2rem', color: 'var(--text)' }}>
          Hello 👋,
        </p>

        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, lineHeight: 1.05, marginBottom: '1rem' }}>
          <span style={{ display: 'block', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--muted)', fontWeight: 700 }}>I'm Naqib Zakir</span>
          <span style={{ display: 'block', fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--text)' }}>
            {txt}<span style={{ borderLeft: '3px solid var(--accent2)', height: '0.9em', display: 'inline-block', verticalAlign: 'middle', marginLeft: 2, animation: 'blink 1s step-end infinite' }}/>
          </span>
        </h1>

        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 440, marginBottom: '2rem', fontWeight: 300, lineHeight: 1.8 }}>
          I build things for web — Full Stack development with modern technologies.
          BS IT @ Air University Islamabad.
        </p>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '.75rem', marginBottom: '2rem' }}>
          {socialLinks.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
              width: 42, height: 42, borderRadius: '50%',
              background: 'var(--surface)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', textDecoration: 'none',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >{s.icon}</a>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            padding: '.85rem 2rem', borderRadius: 12,
            background: 'var(--accent)', color: '#fff',
            textDecoration: 'none', fontWeight: 700, fontSize: '.95rem',
            display: 'inline-flex', alignItems: 'center', gap: '.4rem',
            transition: 'var(--transition)', border: '2px solid var(--accent)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >Got a project?</a>

          <a href="/mycv.pdf" download style={{
            padding: '.85rem 2rem', borderRadius: 12,
            background: 'transparent', color: 'var(--text)',
            textDecoration: 'none', fontWeight: 700, fontSize: '.95rem',
            display: 'inline-flex', alignItems: 'center', gap: '.4rem',
            border: '2px solid var(--surface2)', transition: 'var(--transition)',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.color = 'var(--accent2)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--surface2)'; e.currentTarget.style.color = 'var(--text)'; }}
          >My Resume</a>
        </div>
      </div>

      {/* RIGHT — Photo */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Outer glow ring */}
        <div style={{
          width: 'min(380px, 90vw)', height: 'min(380px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,79,255,.25) 0%, rgba(139,47,201,.1) 60%, transparent 80%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Ring border */}
          <div style={{
            position: 'absolute', inset: 10,
            borderRadius: '50%',
            border: '2px solid rgba(180,79,255,.4)',
          }}/>
          {/* Photo circle */}
          <div style={{
            width: 'min(280px, 70vw)', height: 'min(280px, 70vw)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid var(--accent)',
            background: 'var(--surface2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '7rem',
            boxShadow: '0 0 60px rgba(139,47,201,.4)',
          }}>
            {
             
              <img src="/perfil.png" alt="Naqib Zakir" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} />
            }
         
          </div>

          {/* Floating code brackets */}
          <span style={{ position: 'absolute', left: -10, top: '30%', fontSize: '5rem', fontFamily: 'monospace', color: 'rgba(180,79,255,.2)', fontWeight: 900, userSelect: 'none' }}>{'<'}</span>
          <span style={{ position: 'absolute', right: -20, bottom: '25%', fontSize: '5rem', fontFamily: 'monospace', color: 'rgba(180,79,255,.2)', fontWeight: 900, userSelect: 'none' }}>{'>'}</span>
        </div>
      </div>

      {/* Tech ticker */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'rgba(45,26,74,0.6)', backdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--border)',
        padding: '1rem 0', display: 'flex',
        justifyContent: 'center', flexWrap: 'wrap', gap: '2.5rem', zIndex: 1,
      }}>
        {techs.map(t => (
          <span key={t} style={{
            color: 'var(--muted)', fontSize: '.82rem', fontWeight: 600,
            letterSpacing: '.1em', textTransform: 'uppercase',
            transition: 'color .2s', cursor: 'default',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--accent-bright)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >{t}</span>
        ))}
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
};

export default Hero;
