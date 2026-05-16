import React, { useState } from 'react';

const initialPosts = [
  {
    id: 1,
    tag: 'DevOps',
    date: 'May 2025',
    title: 'How I Built My CI/CD Pipeline with GitHub Actions & AWS S3',
    excerpt: 'Setting up a full CI/CD pipeline from scratch — 3 hours, a lot of debugging, and finally the green checkmark.',
    content: `Setting up a CI/CD pipeline was one of the most rewarding experiences in my dev journey. I started with a simple GitHub Actions workflow that triggers on every push to main. Key steps: AWS credentials as GitHub Secrets, S3 bucket configured for static website hosting, and aws s3 sync with --delete flag. After a few failed attempts and a lot of docs reading, the pipeline finally went green. Seeing your code automatically deploy is a different kind of satisfaction!`,
    author: { name: 'Alex Morgan', avatar: 'https://ui-avatars.com/api/?background=8b2fc9&color=fff&name=Alex+M' },
    coverImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    tag: 'Dev',
    date: 'April 2025',
    title: 'Blazor .NET vs React — My Honest Take',
    excerpt: 'As someone who uses both daily, here is when I choose Blazor and when I go with React.',
    content: `Both are powerful but serve different needs. Blazor shines when you're in the .NET ecosystem and want C# on the frontend with tight backend integration. React wins for pure frontend flexibility and the npm ecosystem. My FYP uses Blazor because it integrates cleanly with SQL Server via Entity Framework. My portfolio? React — deploys cleanly as a static site on S3.`,
    author: { name: 'Alex Morgan', avatar: 'https://ui-avatars.com/api/?background=8b2fc9&color=fff&name=Alex+M' },
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    tag: 'Personal',
    date: 'March 2025',
    title: 'From Photography to Programming — My Journey',
    excerpt: 'How working as a Photo Quality Controller made me a better developer.',
    content: `Working as a Photo Quality Controller taught me that details matter — whether it's a slightly off color in a wedding photo or an inconsistent margin in a UI. This experience directly influenced how I approach design. I'm more attentive to spacing, contrast, and visual hierarchy than most developers I know. Creative backgrounds are a superpower in tech.`,
    author: { name: 'Alex Morgan', avatar: 'https://ui-avatars.com/api/?background=8b2fc9&color=fff&name=Alex+M' },
    coverImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop',
  },
];

const tagColor = { DevOps: '#3b82f6', Dev: '#8b5cf6', Personal: '#ec4899', Design: '#10b981', Tutorial: '#f59e0b' };

const Blog = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: '',
    tag: 'Dev',
    excerpt: '',
    content: '',
    authorName: '',
    authorAvatar: null,
    coverImage: null,
  });
  const [coverPreview, setCoverPreview] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleCoverUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result);
        setForm({ ...form, coverImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setForm({ ...form, authorAvatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const submitPost = () => {
    if (!form.title || !form.content || !form.authorName) return;
    const newPost = {
      ...form,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      author: {
        name: form.authorName,
        avatar: form.authorAvatar || `https://ui-avatars.com/api/?background=8b2fc9&color=fff&name=${encodeURIComponent(form.authorName)}`,
      },
      coverImage: form.coverImage || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    };
    setPosts([newPost, ...posts]);
    setForm({ title: '', tag: 'Dev', excerpt: '', content: '', authorName: '', authorAvatar: null, coverImage: null });
    setCoverPreview(null);
    setAvatarPreview(null);
    setShowForm(false);
  };

  const inputS = {
    width: '100%',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    padding: '.85rem 1.2rem',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: '.9rem',
    outline: 'none',
    marginBottom: '1rem',
    transition: 'all 0.2s ease',
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
          padding: '.7rem 1.8rem',
          borderRadius: 40,
          background: showForm ? 'var(--surface)' : 'var(--accent)',
          color: '#fff',
          border: '1px solid var(--border)',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '.88rem',
          transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
          backdropFilter: 'blur(8px)',
        }}>
          {showForm ? '✕ Cancel' : '✏️ Write Post'}
        </button>
      </div>

      {/* Write form - Advanced */}
      {showForm && (
        <div data-aos="fade-down" style={{
          background: 'rgba(18, 18, 24, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(139, 47, 201, 0.3)',
          borderRadius: 32,
          padding: '2.5rem',
          marginBottom: '3rem',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '2rem', fontSize: '1.5rem', background: 'linear-gradient(135deg, #fff 0%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>✨ Create a Story</h3>

          {/* Two column layout for author info */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <input placeholder="Your full name *" value={form.authorName} onChange={e => setForm({ ...form, authorName: e.target.value })} style={inputS} />
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <label style={{ ...inputS, marginBottom: 0, cursor: 'pointer', textAlign: 'center', background: 'var(--surface)' }}>
                📸 Avatar
                <input type="file" accept="image/*" onChange={handleAvatarUpload} style={{ display: 'none' }} />
              </label>
              {avatarPreview && <img src={avatarPreview} alt="avatar preview" style={{ width: 48, height: 48, borderRadius: 50, objectFit: 'cover', border: '2px solid var(--accent2)' }} />}
            </div>
          </div>

          <input placeholder="Post title *" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} style={inputS} />
          <input placeholder="Short excerpt (optional)" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} style={inputS} />

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <select value={form.tag} onChange={e => setForm({ ...form, tag: e.target.value })} style={{ ...inputS, cursor: 'pointer', flex: 1 }}>
              {['Dev', 'DevOps', 'Personal', 'Design', 'Tutorial'].map(t => <option key={t}>{t}</option>)}
            </select>
            <label style={{ ...inputS, cursor: 'pointer', textAlign: 'center', background: 'var(--surface)', marginBottom: 0, flex: 1 }}>
              🖼️ Cover Image
              <input type="file" accept="image/*" onChange={handleCoverUpload} style={{ display: 'none' }} />
            </label>
          </div>
          {coverPreview && <img src={coverPreview} alt="cover preview" style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 20, marginBottom: '1rem' }} />}

          <textarea placeholder="Write your post content here * (Markdown supported)" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} rows={8} style={{ ...inputS, resize: 'vertical', fontFamily: 'monospace' }} />

          <button onClick={submitPost} style={{
            padding: '.9rem 2.5rem',
            borderRadius: 40,
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '.95rem',
            transition: 'transform 0.2s ease',
            boxShadow: '0 8px 20px rgba(139,47,201,0.3)',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            Publish Story 🚀
          </button>
        </div>
      )}

      {/* Post detail - Enhanced */}
      {selected && (
        <div data-aos="fade-up" style={{
          background: 'rgba(18, 18, 24, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(139, 47, 201, 0.3)',
          borderRadius: 32,
          overflow: 'hidden',
          marginBottom: '3rem',
        }}>
          {selected.coverImage && (
            <img src={selected.coverImage} alt={selected.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          )}
          <div style={{ padding: '2.5rem' }}>
            <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: 'var(--accent2)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: '1.5rem', padding: 0, fontSize: '.9rem' }}>← Back to all posts</button>
            <span style={{ display: 'inline-block', padding: '.3rem 1rem', borderRadius: 40, fontSize: '.72rem', fontWeight: 700, background: `${tagColor[selected.tag] || 'var(--accent)'}22`, color: tagColor[selected.tag] || 'var(--accent)', marginBottom: '1rem' }}>{selected.tag}</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', margin: '.5rem 0 .4rem', lineHeight: 1.3 }}>{selected.title}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <img src={selected.author.avatar} alt={selected.author.name} style={{ width: 40, height: 40, borderRadius: 50, objectFit: 'cover' }} />
              <div>
                <p style={{ fontWeight: 700, fontSize: '.85rem' }}>{selected.author.name}</p>
                <p style={{ color: 'var(--muted)', fontSize: '.75rem' }}>{selected.date}</p>
              </div>
            </div>
            <div style={{ color: 'var(--text)', lineHeight: 1.9, fontWeight: 400, fontSize: '1rem' }}>
              {selected.content.split('\n').map((para, i) => <p key={i} style={{ marginBottom: '1rem' }}>{para}</p>)}
            </div>
          </div>
        </div>
      )}

      {/* Posts grid - Advanced Cards */}
      {!selected && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          {posts.map((post, i) => (
            <div key={post.id} data-aos="fade-up" data-aos-delay={i * 70}
              onClick={() => { setSelected(post); setShowForm(false); }}
              style={{
                background: 'rgba(18, 18, 24, 0.6)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(139, 47, 201, 0.2)',
                borderRadius: 28,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.borderColor = 'rgba(139, 47, 201, 0.6)';
                e.currentTarget.style.boxShadow = '0 30px 60px -20px rgba(139,47,201,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(139, 47, 201, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {post.coverImage && (
                <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: 200, objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              )}
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ padding: '.2rem .8rem', borderRadius: 40, fontSize: '.7rem', fontWeight: 700, background: `${tagColor[post.tag] || 'var(--accent)'}22`, color: tagColor[post.tag] || 'var(--accent)' }}>{post.tag}</span>
                  <span style={{ color: 'var(--muted)', fontSize: '.75rem' }}>{post.date}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', lineHeight: 1.4, marginBottom: '.75rem' }}>{post.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{post.excerpt || post.content.slice(0, 100)}...</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                    <img src={post.author.avatar} alt={post.author.name} style={{ width: 28, height: 28, borderRadius: 50, objectFit: 'cover' }} />
                    <span style={{ fontSize: '.75rem', fontWeight: 500 }}>{post.author.name}</span>
                  </div>
                  <span style={{ color: 'var(--accent2)', fontSize: '.85rem', fontWeight: 700 }}>Read →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;