import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const send = () => {
    if (!name || !msg) { alert('Please fill in all fields'); return; }
    window.open(`https://wa.me/+923075764607?text=${encodeURIComponent(`Hello Naqib, I'm ${name}.\n\n${msg}`)}`, '_blank');
  };

  const inp = { width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 12, padding: '.85rem 1rem', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '.9rem', outline: 'none', transition: 'border-color .2s' };

  return (
    <section id="contact" style={{ padding: '6rem 5vw', background: 'var(--bg2)' }}>
      <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent2)', fontWeight: 700, marginBottom: '1rem' }}>
          <span style={{ width: 24, height: 2, background: 'var(--accent2)', display: 'inline-block', borderRadius: 2 }} /> Contact
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>Let's Work Together</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', maxWidth: 1000, margin: '0 auto', alignItems: 'start' }} data-aos="fade-up">
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', marginBottom: '1rem' }}>Say Hello 👋</h3>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '.95rem' }}>Available for freelance and full-time opportunities. Let's build something great!</p>
          {[['📧', 'naqeeebknn@gmail.com'], ['📱', '+92 307 5764607'], ['📍', 'Islamabad, Pakistan']].map(([icon, t]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--muted)', marginBottom: '1rem', fontSize: '.9rem' }}>
              <span style={{ width: 40, height: 40, background: 'rgba(139,47,201,.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{icon}</span>
              {t}
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--card)', backdropFilter: 'blur(12px)', border: '1px solid var(--border)', borderRadius: 24, padding: '2.5rem' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '.75rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.5rem', fontWeight: 600 }}>Your Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={inp} onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '.75rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.5rem', fontWeight: 600 }}>Message</label>
            <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="Hi Naqib, I'd like to work with you..." rows={5} style={{ ...inp, resize: 'vertical' }} onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          </div>
          <button onClick={send} style={{ width: '100%', padding: '.9rem', borderRadius: 12, background: 'var(--accent)', color: '#fff', border: 'none', fontSize: '.95rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'var(--transition)' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--accent2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >Send via WhatsApp 💬</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
