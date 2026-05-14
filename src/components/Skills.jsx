import React from 'react';

const skills = [
  { icon: '🌐', name: 'Web Development', percent: 80 },
  { icon: '⚡', name: '.NET with Blazor', percent: 85 },
  { icon: '💻', name: 'C++ / C#', percent: 70 },
  { icon: '🗄️', name: 'SQL & Databases', percent: 80 },
  { icon: '☁️', name: 'AWS Cloud', percent: 75 },
  { icon: '🎨', name: 'UI/UX Design', percent: 85 },
];

const Skills = () => (
  <section id="skills" style={{ padding: '6rem 5vw', background: 'var(--bg)' }}>
    <div style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>Expertise</div>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem' }}>My Skills</h2>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      {skills.map((skill, i) => (
        <div key={i} data-aos="fade-up" data-aos-delay={i * 80} style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 16, padding: '1.5rem',
          transition: 'all .3s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>{skill.icon}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '1rem' }}>{skill.name}</div>
          <div style={{ background: 'var(--surface2)', borderRadius: 100, height: 5, overflow: 'hidden' }}>
            <div style={{ width: `${skill.percent}%`, height: '100%', background: 'linear-gradient(90deg, var(--accent), var(--accent2))', borderRadius: 100 }}></div>
          </div>
          <div style={{ marginTop: '.5rem', fontSize: '.8rem', color: 'var(--muted)', textAlign: 'right' }}>{skill.percent}%</div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;