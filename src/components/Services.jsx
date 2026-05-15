import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Web Development',
    desc: 'Full-stack web apps using React, Blazor .NET, Node.js, and more. From landing pages to complex platforms — responsive, fast, and production-ready.',
    items: ['React / Next.js', 'Blazor .NET + C#', 'REST APIs & Node.js', 'SQL Server & Firebase'],
    color: '#3d1a6e',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps for Android and iOS using Flutter. Clean UI, smooth animations, and Firebase backend integration.',
    items: ['Flutter & Dart', 'Firebase Integration', 'Android & iOS', 'Real-time Data'],
    color: '#1a3d6e',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: 'Logo & Graphic Design',
    desc: 'Professional logos, brand identity, and graphic design. Clean, modern visuals tailored to your business using Figma and Adobe Illustrator.',
    items: ['Logo Design', 'Brand Identity', 'Figma Prototypes', 'Adobe Illustrator'],
    color: '#5a1a1a',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/>
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/>
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/>
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
  },
  {
    title: 'AWS Cloud Deployment',
    desc: 'Deploy your web apps on AWS with proper setup — S3 static hosting, EC2 instances, CI/CD pipelines via GitHub Actions. Scalable and reliable.',
    items: ['AWS S3 Hosting', 'EC2 Setup', 'GitHub Actions CI/CD', 'Domain & SSL'],
    color: '#2d1a0e',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    title: 'CV & Portfolio Website',
    desc: 'Professional CV design and personal portfolio websites — built, deployed, and live-hosted. Make a strong first impression to employers and clients.',
    items: ['CV / Resume Design', 'Portfolio Website', 'Live Hosting', 'Custom Domain Setup'],
    color: '#0d4a2e',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    title: 'IT Solutions & Consulting',
    desc: 'Any IT-related task you need done. Technical consulting, bug fixing, code reviews, database setup, API integrations — if it is IT, I can handle it.',
    items: ['Bug Fixing & Code Review', 'API Integration', 'Database Design', 'Technical Consulting'],
    color: '#1a1a4e',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '5rem' }}>

      {/* Hero Banner */}
      <div style={{
        padding: '5rem 5vw 4rem',
        background: 'linear-gradient(135deg, rgba(139,47,201,.15) 0%, rgba(26,10,46,.8) 100%)',
        borderBottom: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* BG decoration */}
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(139,47,201,.12)', filter: 'blur(80px)' }}/>

        <button onClick={() => navigate('/')} style={{
          display: 'inline-flex', alignItems: 'center', gap: '.4rem',
          background: 'none', border: 'none', color: 'var(--accent2)',
          cursor: 'pointer', fontSize: '.88rem', fontWeight: 600,
          marginBottom: '1.5rem', padding: 0,
          transition: 'gap .2s',
        }}
        onMouseEnter={e => e.currentTarget.style.gap = '.7rem'}
        onMouseLeave={e => e.currentTarget.style.gap = '.4rem'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Portfolio
        </button>

        <div style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent2)', fontWeight: 700, marginBottom: '.75rem' }}>
          What I Offer
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          letterSpacing: '-0.03em', lineHeight: 1.05,
          marginBottom: '1rem',
        }}>
          My <span style={{ color: 'var(--accent2)' }}>Services</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', maxWidth: 520, lineHeight: 1.8, fontWeight: 400 }}>
          From idea to deployment — I build, design, and deliver complete IT solutions for individuals and businesses.
        </p>
      </div>

      {/* Services Grid */}
      <div style={{ padding: '4rem 5vw', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 24, padding: '2rem',
              transition: 'var(--transition)', cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(139,47,201,.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              {/* Number */}
              <div style={{ fontSize: '.72rem', fontWeight: 800, color: 'var(--accent2)', letterSpacing: '.1em', marginBottom: '1.25rem', opacity: .6 }}>
                0{i + 1}
              </div>

              {/* Icon + Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 18,
                  background: s.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.85)', flexShrink: 0,
                  boxShadow: `0 8px 24px ${s.color}99`,
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.3 }}>{s.title}</h3>
              </div>

              {/* Desc */}
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 400 }}>{s.desc}</p>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--border)', marginBottom: '1.25rem' }}/>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                {s.items.map(item => (
                  <span key={item} style={{
                    padding: '.25rem .7rem',
                    background: 'rgba(139,47,201,.12)',
                    color: 'var(--accent-bright)',
                    border: '1px solid rgba(180,79,255,.2)',
                    borderRadius: 8, fontSize: '.73rem', fontWeight: 600,
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '4rem',
          background: 'linear-gradient(135deg, rgba(139,47,201,.2), rgba(180,79,255,.08))',
          border: '1px solid rgba(180,79,255,.25)',
          borderRadius: 28, padding: '3.5rem',
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(139,47,201,.1)', filter: 'blur(60px)' }}/>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', marginBottom: '.75rem', letterSpacing: '-0.02em' }}>
              Ready to start a project?
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '2rem', maxWidth: 440, margin: '0 auto 2rem' }}>
              Let's build something great together. Reach out and I'll get back to you within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/#contact')} style={{
                padding: '.9rem 2.2rem', borderRadius: 14,
                background: 'var(--accent)', color: '#fff',
                border: 'none', fontWeight: 700, fontSize: '1rem',
                cursor: 'pointer', transition: 'var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--accent2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
              >Get in Touch →</button>

              <button onClick={() => navigate('/')} style={{
                padding: '.9rem 2.2rem', borderRadius: 14,
                background: 'transparent', color: 'var(--text)',
                border: '1px solid var(--border)', fontWeight: 700, fontSize: '1rem',
                cursor: 'pointer', transition: 'var(--transition)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.color = 'var(--accent2)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
              >View My Work</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;