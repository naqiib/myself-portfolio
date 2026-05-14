import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const sendWhatsApp = () => {
    if (!name || !msg) { alert('Please fill in all fields'); return; }
    const text = encodeURIComponent(`Hello Naqib, I'm ${name}.\n\n${msg}`);
    window.open(`https://wa.me/+923075764607?text=${text}`, '_blank');
  };

  const inputStyle = {
    width: '100%', background: 'var(--bg)',
    border: '1px solid var(--border)', borderRadius: 12,
    padding: '.85rem 1rem', color: 'var(--text)',
    fontFamily: 'var(--font-body)', fontSize: '.9rem', outline: 'none',
  };

  return (
    <section id="contact" style={{ padding: '6rem 5vw', background: 'var(--bg)' }}>
      <div style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>Get In Touch</div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem' }}>Let's Work Together</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }} data-aos="fade-up">
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Say Hello</h3>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>Available for freelance work and open to full-time opportunities.</p>
          {[['📧','naqeeebknn@gmail.com'],['📱','+92 307 5764607'],['📍','Islamabad, Pakistan']].map(([icon, text]) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--muted)', fontSize: '.9rem', marginBottom: '1rem' }}>
              <span>{icon}</span>{text}
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 24, padding: '2.5rem' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '.78rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.5rem', fontWeight: 500 }}>Your Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Naqib Zakir" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '.78rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '.5rem', fontWeight: 500 }}>Message</label>
            <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="Hi Naqib, I'd like to discuss..." rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
          </div>
          <button onClick={sendWhatsApp} style={{
            width: '100%', padding: '.85rem', borderRadius: 100,
            background: 'var(--accent)', color: '#fff', border: 'none',
            fontSize: '.9rem', fontWeight: 500, cursor: 'pointer',
            fontFamily: 'var(--font-body)', transition: 'all .3s'
          }}>Send via WhatsApp 💬</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;