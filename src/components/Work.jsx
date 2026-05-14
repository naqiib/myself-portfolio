import React, { useState } from 'react';

const devProjects = [
  { num: '01', title: 'Online Book Sale & Purchase', desc: 'Full-stack platform for buying and selling used books. Features user accounts, store setup, and book exchange.', tags: ['Blazor .NET','SQL Server','C#'], link: 'https://github.com/naqiib/Fyp.git' },
  { num: '02', title: 'Restaurant Management System', desc: 'Web app for managing restaurant operations — orders, menu updates, and customer feedback.', tags: ['React','Node.js','JavaScript'], link: 'https://github.com/naqiib/restaurant-.git' },
  { num: '03', title: 'Portfolio Website', desc: 'Responsive portfolio showcasing skills, projects, and contact info with modern design.', tags: ['HTML','CSS','JavaScript'], link: '#' },
];

const uiuxProjects = [
  { title: 'Mobile App Design', desc: 'Fitness tracking app with user-friendly navigation.', emoji: '📱' },
  { title: 'Website Redesign', desc: 'Corporate website redesign prototyped in Figma.', emoji: '🖥️' },
  { title: 'Dashboard UI', desc: 'Data analytics dashboard with clean visualizations.', emoji: '📊' },
];

const Work = () => {
  const [tab, setTab] = useState('dev');

  return (
    <section id="work" style={{ padding: '6rem 5vw', background: 'var(--surface)' }}>
      <div style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>Portfolio</div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '2rem' }}>My Work</h2>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
        {['dev','uiux'].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: '.6rem 1.5rem', borderRadius: 100,
            border: '1px solid var(--border)',
            background: tab === t ? 'var(--accent)' : 'transparent',
            color: tab === t ? '#fff' : 'var(--muted)',
            fontSize: '.85rem', cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            transition: 'all .2s'
          }}>{t === 'dev' ? 'Development' : 'UI/UX Design'}</button>
        ))}
      </div>

      {tab === 'dev' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {devProjects.map((p, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 80} style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: 20, padding: '2rem',
              transition: 'all .3s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 800, color: 'rgba(108,99,255,.1)', lineHeight: 1 }}>{p.num}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', margin: '.5rem 0 .75rem' }}>{p.title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.5rem' }}>
                {p.tags.map(tag => <span key={tag} style={{ padding: '.3rem .7rem', background: 'rgba(108,99,255,.1)', color: 'var(--accent)', borderRadius: 6, fontSize: '.72rem', fontWeight: 500 }}>{tag}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontSize: '.85rem', textDecoration: 'none', fontWeight: 500 }}>View on GitHub →</a>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {uiuxProjects.map((p, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 80} style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: 20, overflow: 'hidden',
              transition: 'all .3s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ padding: '3rem', background: 'var(--surface2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>{p.emoji}</div>
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '.4rem' }}>{p.title}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.85rem', fontWeight: 300 }}>{p.desc}</p>
                <a href="https://www.behance.net/naqibullah6" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--accent)', fontSize: '.85rem', textDecoration: 'none' }}>View on Behance →</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Work;