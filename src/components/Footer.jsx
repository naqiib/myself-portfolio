import React from 'react';

const Footer = () => (
  <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '2rem 5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.2rem' }}>
      <span style={{ background: 'var(--accent)', color: '#fff', width: 28, height: 28, borderRadius: 7, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '.9rem', marginRight: '.4rem' }}>N</span>
      Naqib<span style={{ color: 'var(--accent2)' }}>.</span>
    </div>
    <p style={{ color: 'var(--muted)', fontSize: '.8rem' }}>© 2025 Naqib Zakir. All rights reserved.</p>
    <div style={{ display: 'flex', gap: '.6rem' }}>
      {[['https://github.com/naqiib','GH'],['https://www.linkedin.com/in/naqib-zakir-303711183/','IN'],['https://www.behance.net/naqibullah6','BE'],['https://web.facebook.com/naaqeeb.razy','FB']].map(([href, l]) => (
        <a key={l} href={href} target="_blank" rel="noreferrer" style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', textDecoration: 'none', fontSize: '.75rem', fontWeight: 700, transition: 'var(--transition)' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg)'; e.currentTarget.style.color = 'var(--muted)'; }}
        >{l}</a>
      ))}
    </div>
  </footer>
);

export default Footer;
