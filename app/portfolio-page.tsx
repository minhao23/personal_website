'use client';

import { useState } from 'react';

const NAV_TABS = ['HOME', 'PROJECTS', 'SKILLS', 'EXPERIENCE', 'CONTACT'];

const PROJECTS = [
  {
    title: 'Neural Canvas',
    desc: 'AI-powered generative art platform with real-time style transfer and collaborative editing.',
    tags: ['React', 'Python', 'PyTorch'],
    stars: 1240,
    status: 'LIVE',
    statusColor: '#3ab54a',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&auto=format',
  },
  {
    title: 'TradeFlow',
    desc: 'Real-time algorithmic trading dashboard with backtesting engine and portfolio analytics.',
    tags: ['TypeScript', 'Node.js', 'Redis'],
    stars: 876,
    status: 'BETA',
    statusColor: '#f5d000',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop&auto=format',
  },
  {
    title: 'PulseDB',
    desc: 'Distributed time-series database optimized for IoT sensor streams at scale.',
    tags: ['Rust', 'gRPC', 'Kafka'],
    stars: 2100,
    status: 'STABLE',
    statusColor: '#1a9fd4',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&auto=format',
  },
];

const SKILLS = [
  { name: 'Frontend', value: 94 },
  { name: 'Backend', value: 88 },
  { name: 'Systems', value: 79 },
  { name: 'ML / AI', value: 72 },
  { name: 'DevOps', value: 83 },
  { name: 'Design', value: 68 },
];

const STATS = [
  { label: 'GitHub Stars', value: '4.2K', icon: '★' },
  { label: 'Projects', value: '34', icon: '◆' },
  { label: 'Commits', value: '12K', icon: '↑' },
  { label: 'Years XP', value: '8', icon: '⚡' },
];

const EXPERIENCE = [
  { role: 'Staff Engineer', company: 'Vercel', period: '2023–Present', flag: '🇺🇸' },
  { role: 'Senior Engineer', company: 'Stripe', period: '2021–2023', flag: '🇺🇸' },
  { role: 'Eng Lead', company: 'N26', period: '2019–2021', flag: '🇩🇪' },
  { role: 'Full Stack Dev', company: 'Thoughtworks', period: '2016–2019', flag: '🇬🇧' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('HOME');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-fut-black)', fontFamily: 'var(--font-body)' }}>

      {/* Top bar */}
      <header style={{ backgroundColor: '#141618', borderBottom: '2px solid var(--color-fut-border)' }}>
        {/* Logo strip */}
        <div style={{ backgroundColor: '#0f1012', borderBottom: '1px solid var(--color-fut-border)', padding: '0.5rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              backgroundColor: 'var(--color-fut-yellow)',
              color: 'var(--color-fut-black)',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.1rem',
              padding: '0.2rem 0.6rem',
              letterSpacing: '0.05em',
            }}>
              DEV
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em', color: 'white' }}>
              ALEX MORGAN
            </span>
          </div>

          <div style={{ width: '1px', height: '2rem', backgroundColor: 'var(--color-fut-border)', margin: '0 0.5rem' }} />

          <div style={{ color: '#888', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Full Stack Engineer
          </div>

          <div style={{ flex: 1 }} />

          {/* Stats strip */}
          {STATS.map((s) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--color-fut-panel)', border: '1px solid var(--color-fut-border)' }}>
              <span style={{ color: 'var(--color-fut-yellow)', fontSize: '0.75rem' }}>{s.icon}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'white' }}>{s.value}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</span>
            </div>
          ))}

          <button style={{
            backgroundColor: 'var(--color-fut-yellow)',
            color: 'var(--color-fut-black)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            border: 'none',
            padding: '0.4rem 1rem',
            cursor: 'pointer',
          }}>
            HIRE ME
          </button>
        </div>

        {/* Nav tabs */}
        <nav style={{ display: 'flex', height: '2.75rem', paddingLeft: '1.5rem' }}>
          {NAV_TABS.map((tab) => (
            <button
              key={tab}
              className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      {/* Main content */}
      <main style={{ padding: '1.25rem 1.5rem' }}>

        {activeTab === 'HOME' && (
          <div className="animate-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 320px', gridTemplateRows: 'auto auto auto', gap: '0.75rem' }}>

            {/* Hero tile — Featured Project */}
            <div className="fut-tile" style={{ gridColumn: '1 / 3', gridRow: '1', padding: '1.5rem', backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=500&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '240px' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15,16,18,0.95) 40%, rgba(15,16,18,0.4) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 1, maxWidth: '480px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ backgroundColor: 'var(--color-fut-yellow)', color: 'var(--color-fut-black)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.12em', padding: '0.15rem 0.5rem', textTransform: 'uppercase' }}>FEATURED PROJECT</span>
                  <span className="live-dot" style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-fut-green)', borderRadius: '50%', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: '#3ab54a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>LIVE</span>
                </div>
                <h1 className="section-heading" style={{ fontSize: '3rem', color: 'white', marginBottom: '0.5rem' }}>Neural<br />Canvas</h1>
                <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  AI-powered generative art platform with real-time style transfer, collaborative editing, and a plugin ecosystem used by 50K+ artists.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  {['React', 'Python', 'PyTorch', 'WebGL'].map(t => (
                    <span key={t} style={{ backgroundColor: 'rgba(245,208,0,0.15)', border: '1px solid rgba(245,208,0,0.3)', color: 'var(--color-fut-yellow)', fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.6rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button style={{ backgroundColor: 'var(--color-fut-yellow)', color: 'var(--color-fut-black)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', padding: '0.5rem 1.25rem', cursor: 'pointer' }}>VIEW PROJECT</button>
                  <button style={{ backgroundColor: 'transparent', color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1.25rem', cursor: 'pointer' }}>SOURCE CODE</button>
                </div>
              </div>
            </div>

            {/* Player Card */}
            <div className="player-card" style={{ gridColumn: '3', gridRow: '1 / 3', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '400px' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(232,185,74,0.15) 0%, transparent 70%)' }} />
              <div style={{ position: 'relative', zIndex: 1, width: '100%', textAlign: 'center' }}>
                {/* Rating + position */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                  <span className="card-rating" style={{ fontSize: '3.5rem' }}>97</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-fut-gold)', fontSize: '1rem', letterSpacing: '0.1em', marginTop: '-0.5rem' }}>FS</span>
                </div>

                {/* Avatar */}
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', margin: '0.5rem auto', border: '3px solid var(--color-fut-gold)', boxShadow: '0 0 30px rgba(232,185,74,0.3)' }}>
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&auto=format&crop=face" alt="Alex Morgan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Name */}
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white', marginBottom: '0.25rem' }}>ALEX MORGAN</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>🇬🇧 STAFF ENGINEER</span>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: 'rgba(232,185,74,0.3)', margin: '0.75rem 0' }} />

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1rem' }}>
                  {[
                    { label: 'PAC', value: 94 },
                    { label: 'DRI', value: 97 },
                    { label: 'SHO', value: 88 },
                    { label: 'DEF', value: 72 },
                    { label: 'PAS', value: 91 },
                    { label: 'PHY', value: 79 },
                  ].map(s => (
                    <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-fut-gold)', width: '2rem' }}>{s.value}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</span>
                    </div>
                  ))}
                </div>

                <div style={{ height: '1px', backgroundColor: 'rgba(232,185,74,0.3)', margin: '0.75rem 0' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--color-fut-gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>★ BASIC</div>
              </div>
            </div>

            {/* Squad / Skills tile */}
            <div className="fut-tile" style={{ gridColumn: '1', gridRow: '2', padding: '1.25rem' }}>
              <h2 className="section-heading" style={{ fontSize: '1.6rem', color: 'white', marginBottom: '1rem' }}>TECH SKILLS</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {SKILLS.map(s => (
                  <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-fut-yellow)', width: '5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.name}</span>
                    <div style={{ flex: 1, height: '4px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}>
                      <div style={{ width: `${s.value}%`, height: '100%', background: 'linear-gradient(90deg, var(--color-fut-yellow), var(--color-fut-gold))', borderRadius: '2px' }} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', color: 'white', width: '2.5rem', textAlign: 'right' }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience tile */}
            <div className="fut-tile" style={{ gridColumn: '2', gridRow: '2', padding: '1.25rem' }}>
              <h2 className="section-heading" style={{ fontSize: '1.6rem', color: 'white', marginBottom: '1rem' }}>CAREER HISTORY</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {EXPERIENCE.map((e) => (
                  <div key={e.company} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-fut-border)' }}>
                    <span style={{ fontSize: '1.1rem' }}>{e.flag}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'white', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{e.role}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{e.company}</div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: 'var(--color-fut-yellow)', letterSpacing: '0.05em' }}>{e.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row */}
            <div className="fut-tile" style={{ gridColumn: '1', gridRow: '3', padding: '1.25rem', backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=250&fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '140px', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,16,18,0.8)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 className="section-heading" style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.4rem' }}>OPEN TO WORK</h3>
                <p style={{ color: '#ccc', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>Available for senior / staff eng roles at product-led companies.</p>
                <button style={{ backgroundColor: 'var(--color-fut-yellow)', color: 'var(--color-fut-black)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', padding: '0.4rem 1rem', cursor: 'pointer' }}>GET IN TOUCH</button>
              </div>
            </div>

            <div className="fut-tile" style={{ gridColumn: '2', gridRow: '3', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', minHeight: '140px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(245,208,0,0.1)', border: '2px solid var(--color-fut-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0 }}>✍</div>
              <div>
                <h3 className="section-heading" style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.25rem' }}>WRITING</h3>
                <p style={{ color: '#888', fontSize: '0.82rem', lineHeight: 1.5 }}>Essays on systems design, engineering culture, and shipping fast without breaking things.</p>
              </div>
            </div>

            <div className="fut-tile" style={{ gridColumn: '3', gridRow: '3', padding: '1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', minHeight: '140px' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['GH', 'TW', 'LI', 'ML'].map((icon) => (
                  <button key={icon} style={{ width: '42px', height: '42px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid var(--color-fut-border)', color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer', transition: 'all 0.15s' }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.backgroundColor = 'var(--color-fut-yellow)'; (e.target as HTMLElement).style.color = 'var(--color-fut-black)'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.06)'; (e.target as HTMLElement).style.color = 'white'; }}
                  >{icon}</button>
                ))}
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SOCIAL LINKS</span>
            </div>

          </div>
        )}

        {activeTab === 'PROJECTS' && (
          <div className="animate-in">
            <h2 className="section-heading" style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>ALL PROJECTS</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '0.75rem' }}>
              {PROJECTS.map((p) => (
                <div key={p.title} className="fut-tile" style={{ overflow: 'hidden' }}>
                  <div style={{ height: '160px', backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(34,36,40,1) 0%, transparent 60%)' }} />
                    <span style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', backgroundColor: p.statusColor, color: p.status === 'BETA' ? 'black' : 'white', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', padding: '0.2rem 0.5rem' }}>{p.status}</span>
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <h3 className="section-heading" style={{ fontSize: '1.4rem', color: 'white' }}>{p.title}</h3>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: 'var(--color-fut-yellow)' }}>★ {p.stars.toLocaleString()}</span>
                    </div>
                    <p style={{ color: '#aaa', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>{p.desc}</p>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {p.tags.map(t => (
                        <span key={t} style={{ backgroundColor: 'rgba(245,208,0,0.1)', border: '1px solid rgba(245,208,0,0.2)', color: 'var(--color-fut-yellow)', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'SKILLS' && (
          <div className="animate-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div className="fut-tile" style={{ padding: '1.5rem' }}>
              <h2 className="section-heading" style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.25rem' }}>TECHNICAL RATINGS</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {SKILLS.map(s => (
                  <div key={s.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.name}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--color-fut-yellow)' }}>{s.value}</span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '3px' }}>
                      <div style={{ width: `${s.value}%`, height: '100%', background: 'linear-gradient(90deg, var(--color-fut-yellow), var(--color-fut-gold))', borderRadius: '3px', transition: 'width 0.8s ease' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fut-tile" style={{ padding: '1.5rem' }}>
              <h2 className="section-heading" style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.25rem' }}>STACK</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                {['TypeScript', 'React', 'Next.js', 'Rust', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS', 'Docker', 'Terraform'].map(tech => (
                  <div key={tech} style={{ padding: '0.6rem', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid var(--color-fut-border)', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.78rem', color: '#ddd', letterSpacing: '0.03em', textTransform: 'uppercase', transition: 'all 0.15s', cursor: 'default' }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = 'var(--color-fut-yellow)'; (e.target as HTMLElement).style.color = 'var(--color-fut-yellow)'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = 'var(--color-fut-border)'; (e.target as HTMLElement).style.color = '#ddd'; }}
                  >{tech}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'EXPERIENCE' && (
          <div className="animate-in" style={{ maxWidth: '760px' }}>
            <h2 className="section-heading" style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>CAREER HISTORY</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { role: 'Staff Engineer', company: 'Vercel', period: '2023–Present', flag: '🇺🇸', desc: 'Leading infrastructure reliability for the global edge network. Built incremental static regeneration improvements reducing P99 latency by 40%.', tags: ['TypeScript', 'Rust', 'Kubernetes'] },
                { role: 'Senior Software Engineer', company: 'Stripe', period: '2021–2023', flag: '🇺🇸', desc: 'Core payments team. Shipped Stripe Radar v3 fraud detection engine and the Payment Links product used by 500K+ merchants.', tags: ['Ruby', 'Go', 'Kafka'] },
                { role: 'Engineering Lead', company: 'N26', period: '2019–2021', flag: '🇩🇪', desc: 'Led the mobile banking core team across 8 engineers. Delivered real-time transaction notifications and Apple Pay integration.', tags: ['Kotlin', 'Swift', 'AWS'] },
                { role: 'Full Stack Developer', company: 'Thoughtworks', period: '2016–2019', flag: '🇬🇧', desc: 'Consultant on enterprise digital transformation projects. Built greenfield platforms for clients in finance and healthcare.', tags: ['React', 'Java', 'GCP'] },
              ].map((e, i) => (
                <div key={i} className="fut-tile" style={{ padding: '1.25rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '3rem', textAlign: 'center', fontSize: '1.5rem', paddingTop: '0.25rem', flexShrink: 0 }}>{e.flag}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                      <div>
                        <div className="section-heading" style={{ fontSize: '1.3rem', color: 'white' }}>{e.role}</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-fut-yellow)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{e.company}</div>
                      </div>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: '#888', letterSpacing: '0.05em' }}>{e.period}</span>
                    </div>
                    <p style={{ color: '#aaa', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>{e.desc}</p>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      {e.tags.map(t => (
                        <span key={t} style={{ backgroundColor: 'rgba(245,208,0,0.1)', border: '1px solid rgba(245,208,0,0.2)', color: 'var(--color-fut-yellow)', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'CONTACT' && (
          <div className="animate-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', maxWidth: '900px' }}>
            <div className="fut-tile" style={{ padding: '1.5rem' }}>
              <h2 className="section-heading" style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.25rem' }}>GET IN TOUCH</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} onSubmit={e => e.preventDefault()}>
                {[{ label: 'NAME', type: 'text', ph: 'Your name' }, { label: 'EMAIL', type: 'email', ph: 'your@email.com' }].map(f => (
                  <div key={f.label}>
                    <label style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>{f.label}</label>
                    <input type={f.type} placeholder={f.ph} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid var(--color-fut-border)', color: 'white', fontFamily: 'var(--font-body)', fontSize: '0.9rem', padding: '0.6rem 0.75rem', outline: 'none' }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>MESSAGE</label>
                  <textarea placeholder="Tell me about your project..." rows={4} style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid var(--color-fut-border)', color: 'white', fontFamily: 'var(--font-body)', fontSize: '0.9rem', padding: '0.6rem 0.75rem', outline: 'none', resize: 'vertical' }} />
                </div>
                <button type="submit" style={{ backgroundColor: 'var(--color-fut-yellow)', color: 'var(--color-fut-black)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', padding: '0.7rem', cursor: 'pointer' }}>SEND MESSAGE</button>
              </form>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'EMAIL', value: 'alex@morgan.dev', icon: '✉' },
                { label: 'GITHUB', value: 'github.com/alexmorgan', icon: '⌥' },
                { label: 'TWITTER', value: '@alexmorgan_dev', icon: '◈' },
                { label: 'LINKEDIN', value: 'Alex Morgan', icon: '◉' },
              ].map(c => (
                <div key={c.label} className="fut-tile" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(245,208,0,0.1)', border: '1px solid rgba(245,208,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'var(--color-fut-yellow)', flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase' }}>{c.label}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem', color: 'white' }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
