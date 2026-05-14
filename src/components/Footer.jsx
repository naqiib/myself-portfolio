import React from 'react';

const Footer = () => (
  <footer style={{
    background: 'var(--surface)', borderTop: '1px solid var(--border)',
    padding: '2.5rem 5vw', display: 'flex',
    justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'
  }}>
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem' }}>
      naqib<span style={{ color: 'var(--accent)' }}>.</span>
    </div>
    <p style={{ color: 'var(--muted)', fontSize: '.8rem' }}>© 2025 Naqib Zakir. All rights reserved.</p>
    <div style={{ display: 'flex', gap: '.75rem' }}>
      {[
        ['https://www.behance.net/naqibullah6','Be'],
        ['https://web.facebook.com/naaqeeb.razy','Fb'],
        ['https://www.linkedin.com/in/naqib-zakir-303711183/','In'],
        ['https://github.com/naqiib','Gh'],
      ].map(([href, label]) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'var(--bg)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--muted)', textDecoration: 'none', fontSize: '.8rem', fontWeight: 600
        }}>{label}</a>
      ))}
    </div>
  </footer>
);

export default Footer;