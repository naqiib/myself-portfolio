import React from 'react';

const About = () => {
  const stats = [
    { num: '120+', label: 'Hours Coded' },
    { num: '95%', label: 'Client Satisfaction' },
    { num: '10+', label: 'Projects Done' },
  ];

  return (
    <section id="about" style={{ padding: '6rem 5vw', background: 'var(--bg2)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>

        {/* LEFT: Image box */}
        <div data-aos="fade-right" style={{ position: 'relative' }}>
          <div style={{
            borderRadius: 24, overflow: 'hidden',
            background: 'var(--surface)', border: '1px solid var(--border)',
            aspectRatio: '4/5', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '8rem', position: 'relative',
            boxShadow: '0 20px 80px rgba(139,47,201,.2)',
          }}>
           <img src="/perfil.png" alt="Naqib" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} /> 
           
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(26,10,46,.9), transparent)',
              padding: '2rem 1.5rem 1.5rem',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>Naqib Zakir</div>
              <div style={{ color: 'var(--accent-bright)', fontSize: '.82rem' }}>Frontend Developer</div>
            </div>
          </div>
          {/* Badge */}
          <div style={{
            position: 'absolute', top: -16, right: -16,
            background: 'var(--accent)', color: '#fff',
            borderRadius: 16, padding: '1rem 1.25rem',
            fontFamily: 'var(--font-display)', fontWeight: 800,
            boxShadow: '0 8px 30px rgba(139,47,201,.5)',
          }}>
            <div style={{ fontSize: '1.8rem', lineHeight: 1 }}>2+</div>
            <div style={{ fontSize: '.65rem', opacity: .85, letterSpacing: '.05em' }}>YEARS EXP</div>
          </div>
        </div>

        {/* RIGHT: About text */}
        <div data-aos="fade-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent2)', fontWeight: 700, marginBottom: '1rem' }}>
            <span style={{ width: 24, height: 2, background: 'var(--accent2)', display: 'inline-block', borderRadius: 2 }} /> About Me
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            About me
          </h2>

          <p style={{ color: 'var(--muted)', fontSize: '.95rem', lineHeight: 1.9, marginBottom: '1rem', fontWeight: 400 }}>
            I'm <strong style={{ color: 'var(--text)' }}>Naqib Zakir</strong>, a passionate developer currently pursuing my{' '}
            <strong style={{ color: 'var(--text)' }}>BSc in Information Technology</strong> from Air University Islamabad.
            I also hold an <strong style={{ color: 'var(--text)' }}>Associate Degree in Computer Science</strong> from Air University.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '.95rem', lineHeight: 1.9, marginBottom: '1rem', fontWeight: 400 }}>
            Currently working <strong style={{ color: 'var(--text)' }}>work-from-home</strong> as a{' '}
            <strong style={{ color: 'var(--accent-bright)' }}>Client Management & Photo Quality Controller</strong> at a foreign company —
            managing client relations and ensuring high-quality photo delivery for wedding productions.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '.95rem', lineHeight: 1.9, marginBottom: '2rem', fontWeight: 400 }}>
            I specialize in <strong style={{ color: 'var(--text)' }}>full stack web development</strong> with React, Blazor .NET, 
            cloud deployment on AWS, and UI/UX design. I love turning ideas into real, polished products.
          </p>

          {/* Stats row like reference image */}
          <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
            {stats.map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--text)' }}>
                  {num}
                </div>
                <div style={{ fontSize: '.75rem', color: 'var(--muted)', letterSpacing: '.05em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
