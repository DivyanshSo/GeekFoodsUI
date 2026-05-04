import React from "react";

const testimonials = [
  {
    text: "GeekFoods completely changed how I discover restaurants.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    img: "https://i.pravatar.cc/48?img=47",
  },
  {
    text: "Search is lightning fast and results are always relevant.",
    name: "Gladis Lennon",
    role: "Head of SEO",
    img: "https://i.pravatar.cc/48?img=47",
  },
];

const navLinks = ["Home", "Quote", "Restaurants", "Foods", "Contact"];
const footerLinks = ["About", "Careers", "History", "Services", "Projects", "Blog"];

export default function GeekFoods() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Navbar */}
      <nav style={{ background: "#0f172a", padding: "10px 40px", display: "flex", justifyContent: "space-between" }}>
        <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
          GeekFoods
        </a>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          {navLinks.map((link, i) => (
            <li key={i}>
              <a href="/" style={{ color: "#ccc", textDecoration: "none" }}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section style={{ padding: "60px", background: "#111", color: "#fff" }}>
        <h1>Find Your <span style={{ color: "red" }}>Favorite Food</span></h1>
        <p>Discover restaurants and amazing meals near you.</p>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "40px" }}>
        <h2>Testimonials</h2>
        {testimonials.map((t, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <p>{t.text}</p>
            <strong>{t.name}</strong>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px", background: "#eee", textAlign: "center" }}>
        <ul style={{ display: "flex", justifyContent: "center", gap: "20px", listStyle: "none" }}>
          {footerLinks.map((link, i) => (
            <li key={i}>
              <a href="/" style={{ textDecoration: "none", color: "#333" }}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "20px" }}>
          <a href="/">Facebook</a> | <a href="/">Instagram</a> | <a href="/">Twitter</a>
        </div>
      </footer>
    </div>
  );
}