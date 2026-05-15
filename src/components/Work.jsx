import React from 'react';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LiveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const projects = [
  {
    title: 'Online Book Sale & Purchase',
    desc: 'Full-stack platform for buying and selling used books. Features user accounts, store setup, and book exchange between students.',
    tags: ['Blazor .NET', 'SQL Server', 'C#', 'Entity Framework'],
    github: 'https://github.com/naqiib/Fyp.git',
    live: null,
    color: '#3d1a6e',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    title: 'Chitral Tourism Management System',
    desc: 'MERN stack tourism platform for Chitral. Browse destinations, plan trips, and explore the beauty of Chitral Valley online.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: null,
    live: 'https://chitral-tourism-git-main-naqiibs-projects.vercel.app/',
    color: '#0d4a2e',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: 'Restaurant Management System',
    desc: 'Cross-platform mobile app for restaurant operations — orders, menu management, and customer feedback built with Flutter and Firebase.',
    tags: ['Flutter', 'Firebase', 'Dart'],
    github: 'https://github.com/naqiib/restaurant-.git',
    live: null,
    color: '#1a3d6e',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    title: 'Developer Portfolio',
    desc: 'Responsive personal portfolio with dark/light theme, animated UI, and fully automated CI/CD deployment pipeline via GitHub Actions.',
    tags: ['React', 'AWS S3', 'GitHub Actions', 'CI/CD'],
    github: 'https://github.com/naqiib',
    live: null,
    color: '#2d1a4e',
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
];

const Work = () => (
  <section id="projects" style={{ padding: '6rem 5vw', background: 'var(--bg2)' }}>
    <div data-aos="fade-up" style={{ marginBottom: '3.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent2)', fontWeight: 700, marginBottom: '1rem' }}>
        <span style={{ width: 24, height: 2, background: 'var(--accent2)', display: 'inline-block', borderRadius: 2 }} /> Portfolio
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '.5rem' }}>My Projects</h2>
      <p style={{ color: 'var(--muted)', fontSize: '.95rem', fontWeight: 400 }}>Things I've built so far</p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      {projects.map((p, i) => (
        <div key={i} data-aos="fade-up" data-aos-delay={i * 70} style={{
          background: 'var(--card)', backdropFilter: 'blur(12px)',
          border: '1px solid var(--border)', borderRadius: 20,
          overflow: 'hidden', transition: 'var(--transition)',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(139,47,201,.25)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          {/* Thumbnail */}
          <div style={{
            background: p.color, height: 160,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,.06), transparent)' }}/>
            <div style={{ position: 'absolute', bottom: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,.04)' }}/>
            <div style={{ position: 'absolute', top: -10, left: -10, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,.03)' }}/>
            {p.icon}
          </div>

          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '.6rem', color: 'var(--text)' }}>{p.title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6, marginBottom: '1rem', fontWeight: 400 }}>{p.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.25rem' }}>
              {p.tags.map(t => (
                <span key={t} style={{ padding: '.25rem .65rem', background: 'rgba(139,47,201,.15)', color: 'var(--accent-bright)', borderRadius: 8, fontSize: '.72rem', fontWeight: 600, border: '1px solid rgba(180,79,255,.2)' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '.4rem',
                  color: 'var(--accent2)', fontSize: '.85rem', fontWeight: 700,
                  textDecoration: 'none', transition: 'gap .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '.65rem'}
                onMouseLeave={e => e.currentTarget.style.gap = '.4rem'}
                ><GithubIcon /> Code</a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '.4rem',
                  color: '#4ade80', fontSize: '.85rem', fontWeight: 700,
                  textDecoration: 'none', transition: 'gap .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '.65rem'}
                onMouseLeave={e => e.currentTarget.style.gap = '.4rem'}
                ><LiveIcon /> Live Demo</a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Work;
