import React from 'react';

const About = () => (
  <section id="about" style={{ padding: '6rem 5vw', background: 'var(--surface)' }}>
    <div style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>About Me</div>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>Who I Am</h2>
    <p style={{ color: 'var(--muted)', fontSize: '.95rem', maxWidth: 480, marginBottom: '3rem', fontWeight: 300 }}>Passionate developer blending design thinking with technical expertise.</p>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }} data-aos="fade-up">
      <div style={{ background: 'var(--surface2)', borderRadius: 20, aspectRatio: '4/5', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '6rem', opacity: .2 }}>👨‍💻</span>
      </div>
      <div>
        {['I\'m a Frontend Developer specializing in Blazor .NET, HTML, CSS, JavaScript, and React.',
          'Currently pursuing Computer Science at Air University Islamabad. My FYP is an Online Book Sale & Purchase Platform built with Blazor .NET and SQL Server.',
          'Previously worked as a Photo Quality Controller handling wedding photos with high-quality delivery standards.'
        ].map((text, i) => (
          <p key={i} style={{ color: 'var(--muted)', fontSize: '.95rem', lineHeight: 1.9, marginBottom: '1rem', fontWeight: 300 }}>{text}</p>
        ))}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem', marginTop: '1.5rem' }}>
          {['Blazor .NET','React','HTML/CSS','JavaScript','SQL Server','C#','AWS','Figma','Git'].map(chip => (
            <span key={chip} style={{ padding: '.4rem 1rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '100px', fontSize: '.78rem', color: 'var(--muted)' }}>{chip}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;