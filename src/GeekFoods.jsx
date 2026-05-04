import { useState } from "react";

const testimonials = [
  {
    text: "GeekFoods completely changed how I discover restaurants. The recommendations are spot-on and I love the interface. Highly recommend to any food lover!",
    name: "Gladis Lennon",
    role: "Head of SEO",
    img: "https://i.pravatar.cc/48?img=47",
  },
  {
    text: "I've tried many food discovery apps but none come close to GeekFoods. The search is lightning fast and results are always relevant to my taste.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    img: "https://i.pravatar.cc/48?img=47",
  },
  {
    text: "From quick bites to fine dining, GeekFoods helps me find the perfect spot every single time. A must-have for anyone who loves eating out.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    img: "https://i.pravatar.cc/48?img=47",
  },
  {
    text: "The restaurant listings are detailed and up-to-date. I've discovered so many hidden gems in my city thanks to GeekFoods. Absolutely love it!",
    name: "Gladis Lennon",
    role: "Head of SEO",
    img: "https://i.pravatar.cc/48?img=47",
  },
  {
    text: "Minus doloribus eius aut unde, dolores accusantium! GeekFoods makes every meal planning session a breeze.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    img: "https://i.pravatar.cc/48?img=47",
  },
  {
    text: "Eius ut necessitatibus, repudiandae qui dolor minima. GeekFoods is the only food app I need on my phone.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    img: "https://i.pravatar.cc/48?img=47",
  },
];

const navLinks = ["Home", "Quote", "Resturants", "Foods", "Contact"];
const footerLinks = ["About", "Careers", "History", "Services", "Projects", "Blog"];

export default function GeekFoods() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif", color: "#111", overflowX: "hidden" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #fff; }

        /* Navbar */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #0f172a;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          height: 60px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          font-size: 1.2rem;
          font-weight: 700;
          text-decoration: none;
        }
        .nav-logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }
        .nav-links a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .nav-links a:hover, .nav-links a.active {
          color: #3b82f6;
        }
        .nav-cta {
          background: #3b82f6;
          color: #fff;
          border: none;
          padding: 9px 22px;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: #2563eb; }

        /* Hero */
        .hero {
          position: relative;
          height: 520px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.65);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 80px;
          max-width: 560px;
        }
        .hero-title {
          font-size: 2.6rem;
          font-weight: 900;
          line-height: 1.15;
          color: #fff;
          margin-bottom: 16px;
        }
        .hero-title span {
          color: #e11d48;
        }
        .hero-desc {
          color: #e2e8f0;
          font-size: 1rem;
          margin-bottom: 28px;
          line-height: 1.6;
        }
        .hero-btns {
          display: flex;
          gap: 14px;
        }
        .btn-primary {
          background: #e11d48;
          color: #fff;
          border: none;
          padding: 13px 28px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-primary:hover { background: #be123c; }
        .btn-secondary {
          background: #fff;
          color: #e11d48;
          border: 2px solid #e11d48;
          padding: 11px 28px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .btn-secondary:hover { background: #e11d48; color: #fff; }

        /* About Section */
        .about-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 460px;
        }
        .about-img-wrap {
          overflow: hidden;
        }
        .about-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .about-content {
          background: #f1f5f9;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 56px;
        }
        .about-title {
          font-size: 1.7rem;
          font-weight: 800;
          line-height: 1.3;
          margin-bottom: 18px;
          color: #0f172a;
        }
        .about-desc {
          color: #475569;
          font-size: 0.97rem;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .btn-blue {
          background: #3b82f6;
          color: #fff;
          border: none;
          padding: 13px 28px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          align-self: flex-start;
          transition: background 0.2s;
        }
        .btn-blue:hover { background: #2563eb; }

        /* Testimonials */
        .testimonials-section {
          padding: 80px 60px;
          background: #fff;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .testimonial-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 28px 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .testimonial-text {
          color: #334155;
          font-size: 0.93rem;
          line-height: 1.65;
          flex: 1;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .testimonial-author img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          filter: grayscale(100%);
        }
        .author-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: #0f172a;
        }
        .author-role {
          font-size: 0.82rem;
          color: #64748b;
        }

        /* Footer */
        .footer {
          background: #f1f5f9;
          padding: 52px 40px 36px;
          text-align: center;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .footer-logo-text {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
        }
        .footer-desc {
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 28px;
          line-height: 1.6;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 32px;
          list-style: none;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .footer-links a {
          color: #475569;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: #3b82f6; }
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .social-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          text-decoration: none;
          font-size: 1rem;
          transition: background 0.2s, color 0.2s;
        }
        .social-icon:hover { background: #3b82f6; color: #fff; }

        @media (max-width: 900px) {
          .hero-content { padding: 0 32px; }
          .hero-title { font-size: 1.9rem; }
          .about-section { grid-template-columns: 1fr; }
          .about-img-wrap { height: 260px; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .navbar { padding: 0 20px; }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
          GeekFoods
        </a>
        <ul className="nav-links">
          {navLinks.map((link, i) => (
            <li key={link}>
              <a href="#" className={i === 0 ? "active" : ""}>{link}</a>
            </li>
          ))}
        </ul>
        <button className="nav-cta">Get started</button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80"
          alt="Modern dining area"
        />
        <div className="hero-content">
          <h1 className="hero-title">
            Let us find your<br />
            <span>Forever Food.</span>
          </h1>
          <p className="hero-desc">
            Discover amazing restaurants, explore diverse cuisines,<br />
            and find your next favorite meal with GeekFoods.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Search Now</button>
            <button className="btn-secondary">Know more</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-img-wrap">
          <img
            className="about-img"
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"
            alt="Beautiful home"
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">
            Connecting you with the best food experiences in your city.
          </h2>
          <p className="about-desc">
            GeekFoods is your ultimate companion for food discovery. Whether you're looking for a
            cozy café, a fine dining experience, or a quick street food fix, we've got you covered.
            Our platform connects food lovers with the best restaurants, curated menus, and
            exclusive deals tailored just for you.
          </p>
          <button className="btn-blue">Get in Touch</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <img src={t.img} alt={t.name} />
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          <svg width="32" height="32" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="20" fill="#0d9488" />
            <path d="M8 22 Q14 14 20 22 Q26 30 32 22" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M8 16 Q14 8 20 16 Q26 24 32 16" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          <span className="footer-logo-text">GeekFoods</span>
        </div>
        <p className="footer-desc">
          Your go-to platform for discovering amazing food experiences.<br />
          Explore restaurants, cuisines, and more — all in one place.
        </p>
        <ul className="footer-links">
          {footerLinks.map(link => (
            <li key={link}><a href="#">{link}</a></li>
          ))}
        </ul>
        <div className="social-icons">
          {/* Facebook */}
          <a href="#" className="social-icon" title="Facebook">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="social-icon" title="Instagram">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* Twitter */}
          <a href="#" className="social-icon" title="Twitter">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.39 4.07 3.6 1.64.96a4.52 4.52 0 001.4 6.04 4.5 4.5 0 01-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.54 4.54 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.07 9.07 0 010 15.54 12.8 12.8 0 006.92 17.5c8.3 0 12.85-6.88 12.85-12.85l-.01-.59A9.17 9.17 0 0023 3z" />
            </svg>
          </a>
          {/* GitHub */}
          <a href="#" className="social-icon" title="GitHub">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </a>
          {/* Dribbble */}
          <a href="#" className="social-icon" title="Dribbble">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
