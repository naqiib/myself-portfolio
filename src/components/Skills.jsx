import React from 'react';

const WebIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const CloudIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);
const DbIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const DesignIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);

const skillGroups = [
  {
    icon: <WebIcon />, category: 'Web Development',
    skills: [
      { name: 'HTML & CSS', pct: 90 },
      { name: 'React', pct: 80 },
      { name: 'C# & Blazor .NET', pct: 85 },
      { name: 'JavaScript', pct: 78 },
    ]
  },
  {
    icon: <CodeIcon />, category: 'Programming',
    skills: [
      { name: 'C++', pct: 75 },
      { name: 'Python', pct: 70 },
    ]
  },
  {
    icon: <CloudIcon />, category: 'Hosting & Cloud',
    skills: [
      { name: 'AWS (S3, EC2)', pct: 75 },
      { name: 'GitHub + CI/CD', pct: 82 },
    ]
  },
  {
    icon: <DbIcon />, category: 'Database',
    skills: [
      { name: 'SQL Server', pct: 80 },
      { name: 'Entity Framework', pct: 75 },
    ]
  },
  {
    icon: <DesignIcon />, category: 'Design',
    skills: [
      { name: 'Figma', pct: 85 },
      { name: 'Adobe Illustrator', pct: 70 },
      { name: 'AI Design Tools', pct: 75 },
    ]
  },
];

const Skills = () => (
  <section id="skills" style={{ padding: '6rem 5vw', background: 'var(--bg)' }}>
    <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent2)', fontWeight: 700, marginBottom: '1rem' }}>
        <span style={{ width: 24, height: 2, background: 'var(--accent2)', display: 'inline-block', borderRadius: 2 }} /> Skills
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '.75rem' }}>My Skills</h2>
      <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '0 auto', fontWeight: 400, fontSize: '.95rem' }}>Technologies I work with across development, cloud, and design.</p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      {skillGroups.map((g, i) => (
        <div key={i} data-aos="fade-up" data-aos-delay={i * 80} style={{
          background: 'var(--card)', backdropFilter: 'blur(12px)',
          border: '1px solid var(--border)', borderRadius: 20,
          padding: '1.75rem', transition: 'var(--transition)',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(139,47,201,.2)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--accent2)', width: 44, height: 44, background: 'rgba(139,47,201,.15)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{g.icon}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>{g.category}</span>
          </div>
          {g.skills.map((s, j) => (
            <div key={j} style={{ marginBottom: '1.1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.85rem', marginBottom: '.4rem' }}>
                <span style={{ color: 'var(--text)', fontWeight: 500 }}>{s.name}</span>
                <span style={{ color: 'var(--accent2)', fontWeight: 600 }}>{s.pct}%</span>
              </div>
              <div style={{ background: 'var(--surface2)', borderRadius: 100, height: 6, overflow: 'hidden' }}>
                <div style={{ width: `${s.pct}%`, height: '100%', borderRadius: 100, background: 'linear-gradient(90deg, var(--accent), var(--accent2))' }}/>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
