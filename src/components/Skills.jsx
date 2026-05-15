import React from 'react';

const skillGroups = [
  {
    icon: '🌐', category: 'Web Development',
    skills: [
      { name: 'HTML & CSS', pct: 90 },
      { name: 'React', pct: 80 },
      { name: 'C# & Blazor .NET', pct: 85 },
      { name: 'JavaScript', pct: 78 },
    ]
  },
  {
    icon: '💻', category: 'Programming',
    skills: [
      { name: 'C++', pct: 75 },
      { name: 'Python', pct: 70 },
    ]
  },
  {
    icon: '☁️', category: 'Hosting & Cloud',
    skills: [
      { name: 'AWS (S3, EC2)', pct: 75 },
      { name: 'GitHub + CI/CD', pct: 82 },
    ]
  },
  {
    icon: '🗄️', category: 'Database',
    skills: [
      { name: 'SQL Server', pct: 80 },
      { name: 'Entity Framework', pct: 75 },
    ]
  },
  {
    icon: '🎨', category: 'Design',
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
            <span style={{ fontSize: '1.6rem', width: 44, height: 44, background: 'rgba(139,47,201,.15)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{g.icon}</span>
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
