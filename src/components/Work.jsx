import React from 'react';

const projects = [
  {
    title: 'Online Book Sale & Purchase',
    desc: 'Platform for buying & selling used books. User accounts, store setup, book exchange.',
    tags: ['Blazor .NET', 'SQL Server', 'C#'],
    link: 'https://github.com/naqiib/Fyp.git',
    thumb: '📚',
    color: '#3d1a6e',
  },
  {
    title: 'Restaurant Management System',
    desc: 'Web app for orders, menu management and customer feedback.',
    tags: ['React', 'Node.js', 'JavaScript'],
    link: 'https://github.com/naqiib/restaurant-.git',
    thumb: '🍽️',
    color: '#1a3d6e',
  },
  {
    title: 'Portfolio Website',
    desc: 'Responsive developer portfolio with dark/light mode and CI/CD pipeline.',
    tags: ['React', 'AWS S3', 'GitHub Actions'],
    link: '#',
    thumb: '💼',
    color: '#1a5a3d',
  },
  {
    title: 'Mobile App UI Design',
    desc: 'Fitness tracking app design with clean, modern UI and smooth UX flows.',
    tags: ['Figma', 'UI/UX'],
    link: 'https://www.behance.net/naqibullah6',
    thumb: '📱',
    color: '#5a1a3d',
  },
  {
    title: 'Dashboard UI',
    desc: 'Data analytics dashboard with intuitive visualization and clean layout.',
    tags: ['Figma', 'Illustrator'],
    link: 'https://www.behance.net/naqibullah6',
    thumb: '📊',
    color: '#3d2d0a',
  },
  {
    title: 'Book Platform UI/UX',
    desc: 'Full website redesign for the book platform — prototyped in Figma.',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    link: 'https://www.behance.net/naqibullah6',
    thumb: '🖥️',
    color: '#0a2d3d',
  },
];

const Work = () => (
  <section id="projects" style={{ padding: '6rem 5vw', background: 'var(--bg2)' }}>
    <div data-aos="fade-up" style={{ marginBottom: '3.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent2)', fontWeight: 700, marginBottom: '1rem' }}>
        <span style={{ width: 24, height: 2, background: 'var(--accent2)', display: 'inline-block', borderRadius: 2 }} /> Portfolio
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '.5rem' }}>My Projects</h2>
      <p style={{ color: 'var(--muted)', fontSize: '.95rem', fontWeight: 400 }}>Some Things I've built so far</p>
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
            fontSize: '4rem', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,.05), transparent)' }}/>
            {p.thumb}
          </div>

          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '.6rem', color: 'var(--text)' }}>{p.title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6, marginBottom: '1rem', fontWeight: 400 }}>{p.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.25rem' }}>
              {p.tags.map(t => (
                <span key={t} style={{ padding: '.25rem .65rem', background: 'rgba(139,47,201,.15)', color: 'var(--accent-bright)', borderRadius: 8, fontSize: '.72rem', fontWeight: 600, border: '1px solid rgba(180,79,255,.2)' }}>{t}</span>
              ))}
            </div>
            <a href={p.link} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '.4rem',
              color: 'var(--accent2)', fontSize: '.85rem', fontWeight: 700,
              textDecoration: 'none', transition: 'gap .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.gap = '.7rem'}
            onMouseLeave={e => e.currentTarget.style.gap = '.4rem'}
            >
              View Code →
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Work;
