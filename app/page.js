"use client";
import { useEffect, useRef, useState } from "react";

const skills = {
  "AI & ML": ["Python", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "LangChain", "LangGraph", "Ollama", "Hugging Face", "YOLOv8", "OpenCV", "Stable Baselines3", "Reinforcement Learning", "Fuzzy Logic"],
  "Backend & Data": ["FastAPI", "Django", "Docker", "MySQL", "Git", "GitHub", "GitLab", "Pandas", "Matplotlib", "Seaborn", "Power BI"],
  "Frontend": ["HTML", "CSS", "Bootstrap", "React", "Next.js"],
  "Hardware": ["Raspberry Pi", "Arduino", "STM32", "PLC / TIA Portal", "MATLAB", "SOLIDWORKS", "AutoCAD", "SEE Electrical", "Proteus", "C/C++"],
};

const projects = [
  {
    num: "01",
    title: "QueryMind — AI Data Analyst",
    desc: "Upload any CSV and ask questions in plain English. AI writes Pandas code, runs it, and returns instant charts, tables and explanations. Full-stack SaaS with landing page, deployed on Railway + Vercel.",
    stack: ["FastAPI", "LangChain", "Groq", "Next.js", "Recharts", "Docker"],
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-400/10",
    link: "https://querymind-delta.vercel.app",
  },
  {
    num: "02",
    title: "CV Analysis System",
    desc: "Production-grade AI recruitment pipeline. LLaMA 3 70B via Ollama + LangGraph multi-step workflow. 90% accuracy improvement over manual processing.",
    stack: ["LLaMA 3 70B", "LangGraph", "Ollama", "MySQL", "Docker"],
    status: "Completed",
    statusColor: "text-emerald-400 bg-emerald-400/10",
    link: null,
  },
  {
    num: "03",
    title: "Real-time Object Detection",
    desc: "Live YOLOv8 detection streamed to the browser via WebSocket. Annotated frames with bounding boxes and confidence scores in real time.",
    stack: ["YOLOv8", "OpenCV", "FastAPI", "WebSocket", "React"],
    status: "Planned",
    statusColor: "text-slate-400 bg-slate-400/10",
    link: null,
  },
  {
    num: "04",
    title: "PLC Welding Machine Modernization",
    desc: "Full industrial modernization of STAR B700 welding machine. New PLC, electrical schematic redesign, circuit board installation. -60% processing time.",
    stack: ["TIA Portal", "PLC", "SEE Electrical"],
    status: "Completed",
    statusColor: "text-emerald-400 bg-emerald-400/10",
    link: null,
  },
];

const experience = [
  {
    role: "AI Engineer Intern",
    company: "Think Tank Business Solutions",
    period: "Feb 2024 – Nov 2024",
    location: "Alain Savary, Tunisia",
    points: [
      "Built a production AI CV analysis system using LLaMA 3 70B via Ollama",
      "Designed a LangGraph multi-step workflow for recruitment decision-making",
      "Containerized the full stack with Docker for scalable deployment",
      "Optimized MySQL databases and implemented matching algorithms",
      "Achieved 90% improvement in CV analysis accuracy",
      "Applied Scrum + CRISP-DM methodologies for iterative delivery",
    ],
  },
  {
    role: "Industrial Automation Intern",
    company: "LILAS Hygiene Products",
    period: "Jan 2022 – May 2022",
    location: "Majaz Albab, Beja, Tunisia",
    points: [
      "Complete modernization of the STAR B700 welding machine",
      "Replaced and reprogrammed the PLC from scratch",
      "Designed a new electrical schematic using SEE Electrical",
      "Reduced processing time by 60% through code optimization",
    ],
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [activeSkill, setActiveSkill] = useState("AI & ML");
  const [heroRef, heroInView] = useInView(0.1);

  return (
    <main style={{ background: "#080810", color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #10b98133; color: #10b981; }
        html { scroll-behavior: smooth; }
        .card-hover { transition: border-color 0.3s, transform 0.3s; }
        .card-hover:hover { border-color: #10b98155 !important; transform: translateY(-3px); }
        .tag { display:inline-block; font-family:'DM Mono',monospace; font-size:11px; padding:3px 10px; border-radius:999px; border:1px solid #1e293b; color:#94a3b8; background:#0f172a; }
        .skill-btn { transition: all 0.2s; cursor:pointer; border:none; outline:none; }
        .skill-pill { display:inline-block; font-size:13px; padding:6px 14px; border-radius:999px; border:1px solid #1e293b; color:#94a3b8; background:#0f172a; margin:4px; transition: all 0.2s; }
        .skill-pill:hover { border-color:#10b98166; color:#10b981; }
        .dot-line { position:relative; padding-left:20px; }
        .dot-line::before { content:''; position:absolute; left:0; top:8px; width:6px; height:6px; border-radius:50%; background:#10b981; }
        a { text-decoration:none; }
        .live-badge { display:inline-flex; align-items:center; gap:5px; }
        .live-dot { width:6px; height:6px; border-radius:50%; background:#10b981; animation: livepulse 2s infinite; }
        @keyframes livepulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>

      <div style={{ position:"fixed", inset:0, backgroundImage:"linear-gradient(#1e293b18 1px, transparent 1px), linear-gradient(90deg, #1e293b18 1px, transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none", zIndex:0 }} />

      {/* HERO */}
      <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", padding:"100px 24px 60px", position:"relative", zIndex:1 }}>
        <div ref={heroRef} style={{ opacity: heroInView?1:0, transform: heroInView?"none":"translateY(30px)", transition:"opacity 0.9s ease, transform 0.9s ease" }}>
          <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"12px", letterSpacing:"0.2em", color:"#10b981", textTransform:"uppercase", marginBottom:"24px" }}>
            AI &amp; Robotics Engineer
          </p>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(52px,10vw,96px)", fontWeight:800, lineHeight:1.0, color:"#f8fafc", marginBottom:"12px", letterSpacing:"-2px" }}>
            Skander<br />
            <span style={{ WebkitTextStroke:"1px #334155", color:"transparent" }}>Andolsi</span>
          </h1>
          <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"13px", color:"#475569", marginBottom:"8px", letterSpacing:"0.05em" }}>
            Master's in Advanced Robotics &amp; Artificial Intelligence
          </p>
          <p style={{ fontSize:"clamp(15px,2vw,17px)", color:"#64748b", maxWidth:"480px", margin:"20px auto 40px", lineHeight:1.7 }}>
            I build production-ready AI systems — LLM pipelines, computer vision, scalable backends. Based in Tunisia, available worldwide.
          </p>
          <div style={{ display:"flex", gap:"12px", flexWrap:"wrap", justifyContent:"center" }}>
            <a href="#projects" style={{ background:"#10b981", color:"#080810", fontWeight:600, fontSize:"14px", padding:"12px 28px", borderRadius:"8px", transition:"background 0.2s" }}
              onMouseEnter={e=>e.target.style.background="#34d399"} onMouseLeave={e=>e.target.style.background="#10b981"}>
              View Projects
            </a>
            <a href="#contact" style={{ border:"1px solid #1e293b", color:"#94a3b8", fontWeight:500, fontSize:"14px", padding:"12px 28px", borderRadius:"8px", transition:"all 0.2s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#10b981";e.currentTarget.style.color="#10b981"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="#1e293b";e.currentTarget.style.color="#94a3b8"}}>
              Contact Me
            </a>
          </div>
        </div>
        <div style={{ position:"absolute", bottom:"32px", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"6px", opacity:0.4 }}>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"10px", letterSpacing:"0.15em", color:"#475569" }}>SCROLL</span>
          <div style={{ width:"1px", height:"32px", background:"linear-gradient(#10b981, transparent)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ maxWidth:"900px", margin:"0 auto", padding:"100px 24px", position:"relative", zIndex:1 }}>
        <FadeIn>
          <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", letterSpacing:"0.2em", color:"#10b981", textTransform:"uppercase", marginBottom:"16px" }}>01 / About</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(32px,5vw,52px)", fontWeight:800, color:"#f8fafc", marginBottom:"40px", letterSpacing:"-1px" }}>Who I am</h2>
        </FadeIn>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"48px", alignItems:"start" }}>
          <FadeIn delay={0.1}>
            <p style={{ color:"#94a3b8", lineHeight:1.9, fontSize:"15px", marginBottom:"20px" }}>
              I hold a <strong style={{color:"#e2e8f0"}}>Master's degree in Advanced Robotics and Artificial Intelligence</strong> from ISET Bizerte, Tunisia.
            </p>
            <p style={{ color:"#94a3b8", lineHeight:1.9, fontSize:"15px", marginBottom:"20px" }}>
              I specialize in building end-to-end AI solutions — from designing LLM pipelines with LangChain and LangGraph, to real-time computer vision with YOLOv8, to Reinforcement Learning agents with Stable Baselines3.
            </p>
            <p style={{ color:"#94a3b8", lineHeight:1.9, fontSize:"15px" }}>
              I'm equally fluent in Python backends, Docker infrastructure, and low-level hardware with Raspberry Pi, Arduino, and STM32.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
              {[
                ["Location", "Ras Jebal, Bizerte, Tunisia"],
                ["Degree", "Master's — Advanced Robotics & AI"],
                ["Languages", "Arabic (native) · English · French"],
                ["Available", "Remote worldwide"],
                ["Email", "skander.andolsi01@gmail.com"],
              ].map(([k, v]) => (
                <div key={k} style={{ display:"flex", gap:"12px", padding:"12px 16px", border:"1px solid #1e293b", borderRadius:"10px", background:"#0d1117" }}>
                  <span style={{ color:"#10b981", fontWeight:500, fontSize:"13px", minWidth:"80px" }}>{k}</span>
                  <span style={{ color:"#94a3b8", fontSize:"13px" }}>{v}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ background:"#0d1117", padding:"100px 24px", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:"900px", margin:"0 auto" }}>
          <FadeIn>
            <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", letterSpacing:"0.2em", color:"#10b981", textTransform:"uppercase", marginBottom:"16px" }}>02 / Skills</p>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(32px,5vw,52px)", fontWeight:800, color:"#f8fafc", marginBottom:"40px", letterSpacing:"-1px" }}>Tech Stack</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ display:"flex", gap:"8px", marginBottom:"32px", flexWrap:"wrap" }}>
              {Object.keys(skills).map((k) => (
                <button key={k} className="skill-btn"
                  onClick={() => setActiveSkill(k)}
                  style={{ padding:"8px 20px", borderRadius:"999px", border:"1px solid #1e293b", background: activeSkill===k?"#10b981":"#0f172a", color: activeSkill===k?"#080810":"#94a3b8", fontFamily:"'DM Sans',sans-serif", fontSize:"13px", fontWeight:500 }}>
                  {k}
                </button>
              ))}
            </div>
            <div style={{ minHeight:"120px" }}>
              {skills[activeSkill].map((s) => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ maxWidth:"900px", margin:"0 auto", padding:"100px 24px", position:"relative", zIndex:1 }}>
        <FadeIn>
          <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", letterSpacing:"0.2em", color:"#10b981", textTransform:"uppercase", marginBottom:"16px" }}>03 / Experience</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(32px,5vw,52px)", fontWeight:800, color:"#f8fafc", marginBottom:"48px", letterSpacing:"-1px" }}>Where I have worked</h2>
        </FadeIn>
        <div style={{ display:"flex", flexDirection:"column", gap:"24px" }}>
          {experience.map((e, i) => (
            <FadeIn key={e.company} delay={i * 0.1}>
              <div className="card-hover" style={{ border:"1px solid #1e293b", borderRadius:"16px", padding:"28px 32px", background:"#0d1117" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:"8px", marginBottom:"20px" }}>
                  <div>
                    <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"20px", fontWeight:700, color:"#f8fafc", marginBottom:"4px" }}>{e.role}</h3>
                    <p style={{ color:"#10b981", fontSize:"14px", fontWeight:500 }}>{e.company}</p>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"12px", color:"#475569" }}>{e.period}</p>
                    <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:"#334155", marginTop:"2px" }}>{e.location}</p>
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                  {e.points.map((p) => (
                    <p key={p} className="dot-line" style={{ color:"#94a3b8", fontSize:"14px", lineHeight:1.7 }}>{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ background:"#0d1117", padding:"100px 24px", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:"900px", margin:"0 auto" }}>
          <FadeIn>
            <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", letterSpacing:"0.2em", color:"#10b981", textTransform:"uppercase", marginBottom:"16px" }}>04 / Projects</p>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(32px,5vw,52px)", fontWeight:800, color:"#f8fafc", marginBottom:"48px", letterSpacing:"-1px" }}>What I have built</h2>
          </FadeIn>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(360px,1fr))", gap:"20px" }}>
            {projects.map((p, i) => (
              <FadeIn key={p.num} delay={i * 0.08}>
                <div className="card-hover" style={{ border:"1px solid #1e293b", borderRadius:"16px", padding:"28px", background:"#080810", height:"100%", display:"flex", flexDirection:"column", position:"relative" }}>
                  {p.status === "Live" && (
                    <div style={{ position:"absolute", top:"-1px", left:"28px", right:"28px", height:"1px", background:"linear-gradient(90deg, transparent, #10b981, transparent)" }} />
                  )}
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"16px" }}>
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:"#334155" }}>{p.num}</span>
                    <span style={{
                      fontFamily:"'DM Mono',monospace", fontSize:"10px", padding:"3px 10px", borderRadius:"999px",
                      background: p.status==="Live"||p.status==="Completed"?"#10b98115":p.status==="In Progress"?"#f59e0b15":"#33415515",
                      color: p.status==="Live"||p.status==="Completed"?"#10b981":p.status==="In Progress"?"#f59e0b":"#64748b",
                      border: `1px solid ${p.status==="Live"||p.status==="Completed"?"#10b98130":p.status==="In Progress"?"#f59e0b30":"#1e293b"}`,
                      display:"flex", alignItems:"center", gap:"5px"
                    }}>
                      {p.status === "Live" && <span className="live-dot" />}
                      {p.status}
                    </span>
                  </div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"18px", fontWeight:700, color:"#f8fafc", marginBottom:"12px", lineHeight:1.3 }}>{p.title}</h3>
                  <p style={{ color:"#64748b", fontSize:"13px", lineHeight:1.8, marginBottom:"20px", flexGrow:1 }}>{p.desc}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom: p.link ? "16px" : "0" }}>
                    {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" style={{ display:"flex", alignItems:"center", gap:"6px", marginTop:"4px", fontFamily:"'DM Mono',monospace", fontSize:"11px", color:"#10b981", transition:"opacity 0.2s" }}
                      onMouseEnter={e=>e.currentTarget.style.opacity="0.7"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                      <span>View live →</span>
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth:"900px", margin:"0 auto", padding:"100px 24px 120px", position:"relative", zIndex:1, textAlign:"center" }}>
        <FadeIn>
          <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", letterSpacing:"0.2em", color:"#10b981", textTransform:"uppercase", marginBottom:"16px" }}>05 / Contact</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(32px,5vw,64px)", fontWeight:800, color:"#f8fafc", marginBottom:"20px", letterSpacing:"-1px" }}>
            Let us build<br />something great
          </h2>
          <p style={{ color:"#64748b", fontSize:"15px", maxWidth:"420px", margin:"0 auto 48px", lineHeight:1.8 }}>
            Open to remote opportunities, freelance AI projects, and interesting collaborations.
          </p>
          <div style={{ display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap" }}>
            {[
              { label:"Send an Email", href:"mailto:skander.andolsi01@gmail.com", primary:true },
              { label:"LinkedIn", href:"https://www.linkedin.com/in/skander-andolsi", primary:false },
              { label:"GitHub", href:"https://github.com/SkanderAn", primary:false },
            ].map((btn) => (
              <a key={btn.label} href={btn.href} target={btn.primary?undefined:"_blank"}
                style={{ padding:"12px 28px", borderRadius:"8px", fontWeight:600, fontSize:"14px", transition:"all 0.2s", background:btn.primary?"#10b981":"transparent", color:btn.primary?"#080810":"#94a3b8", border:btn.primary?"none":"1px solid #1e293b" }}
                onMouseEnter={e=>{ if(!btn.primary){e.currentTarget.style.borderColor="#10b981";e.currentTarget.style.color="#10b981";}else{e.currentTarget.style.background="#34d399";}}}
                onMouseLeave={e=>{ if(!btn.primary){e.currentTarget.style.borderColor="#1e293b";e.currentTarget.style.color="#94a3b8";}else{e.currentTarget.style.background="#10b981";}}}>
                {btn.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      <footer style={{ borderTop:"1px solid #1e293b", padding:"24px", textAlign:"center", position:"relative", zIndex:1 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:"11px", color:"#334155", letterSpacing:"0.1em" }}>
          2025 SKANDER ANDOLSI — BUILT WITH NEXT.JS AND TAILWIND
        </p>
      </footer>
    </main>
  );
}