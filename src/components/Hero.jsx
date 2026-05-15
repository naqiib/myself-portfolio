import React, { useEffect, useState } from 'react';

const roles = ['Full Stack Developer', 'Blazor .NET Developer', 'React Developer', 'AWS Cloud Enthusiast'];

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
    {
      href: 'https://github.com/naqiib',
      label: 'GitHub',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      href: 'https://www.linkedin.com/in/naqib-zakir-303711183/',
      label: 'LinkedIn',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      href: 'https://www.behance.net/naqibullah6',
      label: 'Behance',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.673 1.45.673 2.38 0 .75-.14 1.4-.42 1.96-.28.56-.67 1.03-1.16 1.4-.48.37-1.05.64-1.71.82-.66.18-1.35.27-2.07.27H0V4.5h6.938v.003zM3.33 10.05h3.087c.6 0 1.09-.14 1.46-.41.37-.27.555-.7.555-1.3 0-.32-.057-.58-.17-.8-.115-.22-.27-.39-.467-.52-.197-.13-.424-.22-.683-.27-.258-.05-.535-.07-.83-.07H3.33v3.37zm0 5.5h3.52c.3 0 .59-.03.87-.09.28-.06.53-.16.75-.31.22-.14.4-.34.53-.57.13-.24.2-.54.2-.9 0-.72-.2-1.24-.6-1.55-.4-.31-.93-.46-1.6-.46H3.33v3.88zM19.63 9.14c-.41-.42-.94-.63-1.61-.63-.45 0-.83.08-1.14.23-.31.15-.57.35-.77.58-.2.24-.34.5-.44.78-.1.28-.16.56-.18.83h4.66c-.06-.74-.31-1.36-.72-1.79h.19zm.71 8.33c-.54.52-1.3.78-2.29.78-.71 0-1.32-.12-1.82-.37-.5-.25-.92-.57-1.24-.96-.33-.4-.57-.84-.72-1.33-.15-.49-.24-.98-.26-1.47h7.2c.03-1.76-.43-3.13-1.37-4.08-.94-.95-2.24-1.42-3.9-1.42-.78 0-1.5.13-2.15.4-.65.27-1.2.65-1.67 1.13-.47.48-.83 1.06-1.09 1.71-.26.65-.38 1.37-.38 2.14 0 .8.12 1.53.38 2.19.26.66.63 1.23 1.1 1.7.47.47 1.04.83 1.7 1.08.66.25 1.39.38 2.19.38 1.06 0 1.95-.24 2.68-.73.73-.49 1.25-1.27 1.57-2.35h-1.96c-.07.32-.35.68-.73 1.01l-.01-.02z"/>
        </svg>
      ),
    },
    {
      href: 'https://web.facebook.com/naaqeeb.razy',
      label: 'Facebook',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
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
          Hello,
        </p>

        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, lineHeight: 1.05, marginBottom: '1rem' }}>
          <span style={{ display: 'block', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--muted)', fontWeight: 700 }}>I'm Naqib Zakir</span>
          <span style={{ display: 'block', fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--text)' }}>
            {txt}<span style={{ borderLeft: '3px solid var(--accent2)', height: '0.9em', display: 'inline-block', verticalAlign: 'middle', marginLeft: 2, animation: 'blink 1s step-end infinite' }}/>
          </span>
        </h1>

        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 440, marginBottom: '2rem', fontWeight: 300, lineHeight: 1.8 }}>
          I build things for web — Full Stack development with modern technologies.
          BSc IT @ Air University Islamabad.
        </p>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '.75rem', marginBottom: '2rem' }}>
          {socialLinks.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} style={{
              width: 42, height: 42, borderRadius: '50%',
              background: 'var(--surface)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--muted)', textDecoration: 'none',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.color = 'var(--muted)'; }}
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
            <img src="/perfil.png" alt="Naqib Zakir" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} />
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
