import React, { useState } from 'react';

const initialPosts = [
  {
    id: 1, tag: 'DevOps', date: 'May 2025',
    title: 'How I Built My CI/CD Pipeline with GitHub Actions & AWS S3',
    excerpt: 'Setting up a full CI/CD pipeline from scratch — 3 hours, a lot of debugging, and finally the green checkmark.',
    content: `Setting up a CI/CD pipeline was one of the most rewarding experiences in my dev journey. I started with a simple GitHub Actions workflow that triggers on every push to main. Key steps: AWS credentials as GitHub Secrets, S3 bucket configured for static website hosting, and aws s3 sync with --delete flag. After a few failed attempts and a lot of docs reading, the pipeline finally went green. Seeing your code automatically deploy is a different kind of satisfaction!`,
  },
  {
    id: 2, tag: 'Dev', date: 'April 2025',
    title: 'Blazor .NET vs React — My Honest Take',
    excerpt: 'As someone who uses both daily, here is when I choose Blazor and when I go with React.',
    content: `Both are powerful but serve different needs. Blazor shines when you're in the .NET ecosystem and want C# on the frontend with tight backend integration. React wins for pure frontend flexibility and the npm ecosystem. My FYP uses Blazor because it integrates cleanly with SQL Server via Entity Framework. My portfolio? React — deploys cleanly as a static site on S3.`,
  },
  {
    id: 3, tag: 'Personal', date: 'March 2025',
    title: 'From Photography to Programming — My Journey',
    excerpt: 'How working as a Photo Quality Controller made me a better developer.',
    content: `Working as a Photo Quality Controller taught me that details matter — whether it's a slightly off color in a wedding photo or an inconsistent margin in a UI. This experience directly influenced how I approach design. I'm more attentive to spacing, contrast, and visual hierarchy than most developers I know. Creative backgrounds are a superpower in tech.`,
  },
];

const tagColor = { DevOps: '#3b82f6', Dev: '#8b5cf6', Personal: '#ec4899', Design: '#10b981', Tutorial: '#f59e0b' };

const Blog = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', tag: 'Dev', excerpt: '', content: '' });

  const submitPost = () => {
    if (!form.title || !form.content) return;
    const newPost = { ...form, id: Date.now(), date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) };
    setPosts([newPost, ...posts]);
    setForm({ title: '', tag: 'Dev', excerpt: '', content: '' });
    setShowForm(false);
  };

  const inputS = {
    width: '100%', background: 'var(--bg)',
    border: '1px solid var(--border)', borderRadius: 10,
    padding: '.75rem 1rem', color: 'var(--text)',
    fontFamily: 'var(--font-body)', fontSize: '.9rem',
    outline: 'none', marginBottom: '1rem',
    transition: 'border-color .2s',
  };

  return (
    <section id="blog" style={{ padding: '6rem 5vw', background: 'var(--bg)' }}>
      {/* Header */}
      <div data-aos="fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent2)', fontWeight: 700, marginBottom: '1rem' }}>
            <span style={{ width: 24, height: 2, background: 'var(--accent2)', display: 'inline-block', borderRadius: 2 }} /> Blog
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '.4rem' }}>My Thoughts</h2>
          <p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>Sharing what I learn — dev, design, and life.</p>
        </div>
        <button onClick={() => { setShowForm(!showForm); setSelected(null); }} style={{
          padding: '.7rem 1.4rem', borderRadius: 10,
          background: showForm ? 'var(--surface)' : 'var(--accent)',
          color: '#fff', border: '1px solid var(--border)',
          cursor: 'pointer', fontFamily: 'var(--font-body)',
          fontWeight: 700, fontSize: '.88rem',
          transition: 'var(--transition)',
        }}>
          {showForm ? '✕ Cancel' : '✏️ Write Post'}
        </button>
      </div>

      {/* Write form */}
      {showForm && (
        <div data-aos="fade-down" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: '2rem', marginBottom: '2.5rem', backdropFilter: 'blur(12px)' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.1rem' }}>✍️ New Blog Post</h3>
          <input placeholder="Post title *" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} style={inputS} />
          <input placeholder="Short excerpt (optional)" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} style={inputS} />
          <select value={form.tag} onChange={e => setForm({ ...form, tag: e.target.value })} style={{ ...inputS, cursor: 'pointer' }}>
            {['Dev', 'DevOps', 'Personal', 'Design', 'Tutorial'].map(t => <option key={t}>{t}</option>)}
          </select>
          <textarea placeholder="Write your post content here *" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} rows={7} style={{ ...inputS, resize: 'vertical' }} />
          <button onClick={submitPost} style={{
            padding: '.75rem 2rem', borderRadius: 10, background: 'var(--accent)',
            color: '#fff', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '.9rem',
          }}>Publish Post 🚀</button>
        </div>
      )}

      {/* Post detail */}
      {selected && (
        <div data-aos="fade-up" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: '2.5rem', marginBottom: '3rem', backdropFilter: 'blur(12px)' }}>
          <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: 'var(--accent2)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '1.5rem', padding: 0, fontSize: '.9rem' }}>← Back</button>
          <span style={{ display: 'inline-block', padding: '.3rem .75rem', borderRadius: 8, fontSize: '.72rem', fontWeight: 700, background: `${tagColor[selected.tag] || 'var(--accent)'}22`, color: tagColor[selected.tag] || 'var(--accent)', marginBottom: '1rem' }}>{selected.tag}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.6rem', margin: '.5rem 0 .4rem', lineHeight: 1.3 }}>{selected.title}</h2>
          <p style={{ color: 'var(--muted)', fontSize: '.8rem', marginBottom: '2rem' }}>{selected.date}</p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontWeight: 400, fontSize: '.95rem' }}>{selected.content}</p>
        </div>
      )}

      {/* Posts grid */}
      {!selected && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {posts.map((post, i) => (
            <div key={post.id} data-aos="fade-up" data-aos-delay={i * 70}
              onClick={() => { setSelected(post); setShowForm(false); }}
              style={{ background: 'var(--card)', backdropFilter: 'blur(12px)', border: '1px solid var(--border)', borderRadius: 20, padding: '1.75rem', cursor: 'pointer', transition: 'var(--transition)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(139,47,201,.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ padding: '.3rem .75rem', borderRadius: 8, fontSize: '.72rem', fontWeight: 700, background: `${tagColor[post.tag] || 'var(--accent)'}22`, color: tagColor[post.tag] || 'var(--accent)' }}>{post.tag}</span>
                <span style={{ color: 'var(--muted)', fontSize: '.78rem' }}>{post.date}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', lineHeight: 1.4, marginBottom: '.75rem' }}>{post.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{post.excerpt || post.content.slice(0, 100) + '...'}</p>
              <span style={{ color: 'var(--accent2)', fontSize: '.85rem', fontWeight: 700 }}>Read more →</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
