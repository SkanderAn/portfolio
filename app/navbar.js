"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <style>{`
        .nav-link { transition: color 0.2s; text-decoration: none; }
        .nav-link:hover { color: #10b981 !important; }
        .menu-btn { background: none; border: none; cursor: pointer; padding: 4px; }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(8,8,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e293b" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          maxWidth: "900px", margin: "0 auto", padding: "0 24px",
          height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{
              fontFamily: "'Syne', sans-serif", fontSize: "18px", fontWeight: 800,
              color: "#f8fafc", letterSpacing: "-0.5px",
            }}>
              SA<span style={{ color: "#10b981" }}>.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px", fontWeight: 500,
                  color: "#64748b", letterSpacing: "0.02em",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:skander.andolsi01@gmail.com"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px", fontWeight: 600,
                color: "#080810", background: "#10b981",
                padding: "7px 18px", borderRadius: "6px",
                textDecoration: "none", transition: "background 0.2s",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#34d399"}
              onMouseLeave={e => e.currentTarget.style.background = "#10b981"}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile burger */}
          <button className="menu-btn mobile-only" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{ display: "block", height: "1.5px", background: "#94a3b8", borderRadius: "2px", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
              <span style={{ display: "block", height: "1.5px", background: "#94a3b8", borderRadius: "2px", transition: "all 0.3s", opacity: open ? 0 : 1 }} />
              <span style={{ display: "block", height: "1.5px", background: "#94a3b8", borderRadius: "2px", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{
          overflow: "hidden", maxHeight: open ? "320px" : "0",
          transition: "max-height 0.35s ease",
          borderTop: open ? "1px solid #1e293b" : "none",
          background: "rgba(8,8,16,0.97)",
        }}>
          <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "20px" }}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                onClick={() => setOpen(false)}
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", fontWeight: 500, color: "#94a3b8" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:skander.andolsi01@gmail.com"
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "14px", fontWeight: 600, color: "#10b981" }}
              onClick={() => setOpen(false)}
            >
              Hire Me →
            </a>
          </div>
        </div>
      </nav>

      {/* Hide desktop nav on mobile */}
      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .mobile-only { display: none !important; } }
      `}</style>
    </>
  );
}