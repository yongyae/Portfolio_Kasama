import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { Mail, Phone, MapPin, Moon, Sun } from "lucide-react";
import cvFile from "./assets/cv/CV_Kasama-Soisuwan.pdf";
import {
  PROFILE,
  PROJECTS,
  TRAININGS,
  COMPETITIONS,
  SKILLS,
  I18N,
  TYPE_PALETTE,
} from "./portfolioData.js";

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const tx = (obj, lang) => {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] ?? obj.en ?? "";
};

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function Lightbox({ src, alt, onClose, images, startIdx = 0 }) {
  const imgs = images?.length ? images : (src ? [src] : []);
  const n = imgs.length;
  const [idx, setIdx] = useState(startIdx);
  const dragX = useRef(null);

  const prev = useCallback(() => setIdx((i) => (i - 1 + n) % n), [n]);
  const next = useCallback(() => setIdx((i) => (i + 1) % n), [n]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")  setIdx((i) => (i - 1 + n) % n);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % n);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose, n]);

  const onDragStart = (e) => { dragX.current = e.touches?.[0]?.clientX ?? e.clientX; };
  const onDragEnd   = (e) => {
    if (dragX.current === null) return;
    const end = e.changedTouches?.[0]?.clientX ?? e.clientX;
    const delta = dragX.current - end;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    dragX.current = null;
  };

  const btnStyle = (side) => ({
    position: "fixed", top: "50%", transform: "translateY(-50%)",
    [side]: 16, background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%",
    color: "#fff", cursor: "pointer", width: 44, height: 44,
    fontSize: 22, backdropFilter: "blur(4px)", fontFamily: "inherit",
  });

  return createPortal(
    <div
      onClick={onClose}
      onTouchStart={onDragStart} onTouchEnd={onDragEnd}
      onMouseDown={onDragStart}  onMouseUp={onDragEnd}
      style={{
        position: "fixed", inset: 0, zIndex: 400,
        background: "rgba(0,0,0,0.93)", backdropFilter: "blur(10px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24, cursor: "zoom-out", userSelect: "none",
      }}
    >
      <img
        src={imgs[idx]}
        alt={`${alt} ${idx + 1}`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "92vw", maxHeight: "92vh", objectFit: "contain", borderRadius: 8, boxShadow: "0 32px 80px rgba(0,0,0,.9)", cursor: "default" }}
      />

      {n > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} style={btnStyle("left")}>‹</button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} style={btnStyle("right")}>›</button>
          <div style={{ position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
            {imgs.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                style={{ width: i === idx ? 20 : 8, height: 8, borderRadius: 4, background: i === idx ? "#fff" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", padding: 0, transition: "width .2s" }}
              />
            ))}
          </div>
        </>
      )}

      <button
        onClick={onClose}
        style={{ position: "fixed", top: 18, right: 18, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 6, color: "#fff", cursor: "pointer", padding: "4px 12px", fontSize: 13, backdropFilter: "blur(4px)", fontFamily: "inherit" }}
      >
        ✕ Close
      </button>
    </div>,
    document.body
  );
}

// ─── IMAGE GALLERY ────────────────────────────────────────────────────────────
function Gallery({ images, imgF, alt, onImageClick, bg, aspectRatio }) {
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) return null;
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 10,
        overflow: "hidden",
        aspectRatio: aspectRatio || "4/3",
        background: bg || "#111",
      }}
    >
      <img
        src={images[idx]}
        alt={`${alt} ${idx + 1}`}
        onClick={() => onImageClick?.(images[idx], `${alt} ${idx + 1}`)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          filter: imgF,
          display: "block",
          transition: "opacity .3s",
          cursor: onImageClick ? "zoom-in" : "default",
        }}
      />
      {images.length > 1 && (
        <>
          {[
            { dir: "prev", fn: prev, arrow: "‹" },
            { dir: "next", fn: next, arrow: "›" },
          ].map((b) => (
            <button
              key={b.dir}
              onClick={b.fn}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: b.dir === "prev" ? 12 : "auto",
                right: b.dir === "next" ? 12 : "auto",
                background: "rgba(0,0,0,0.45)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                fontSize: 20,
                lineHeight: "32px",
                textAlign: "center",
                backdropFilter: "blur(4px)",
              }}
            >
              {b.arrow}
            </button>
          ))}
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 5,
            }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  width: i === idx ? 18 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === idx ? "#fff" : "rgba(255,255,255,0.45)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width .2s, background .2s",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── AVATAR CYCLER ────────────────────────────────────────────────────────────
function AvatarCycler({ avatars, imgF, border, name }) {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const dragX = useRef(null);
  const n = avatars?.length ?? 0;

  const prev = () => setIdx((i) => (i - 1 + n) % n);
  const next = () => setIdx((i) => (i + 1) % n);

  const onDragStart = (e) => { dragX.current = e.touches?.[0]?.clientX ?? e.clientX; };
  const onDragEnd   = (e) => {
    if (dragX.current === null) return;
    const end = e.changedTouches?.[0]?.clientX ?? e.clientX;
    const delta = dragX.current - end;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    dragX.current = null;
  };

  if (!n) return null;
  return (
    <>
      <div
        style={{ position: "relative", width: 160, flexShrink: 0, userSelect: "none" }}
        onTouchStart={onDragStart} onTouchEnd={onDragEnd}
        onMouseDown={onDragStart}  onMouseUp={onDragEnd}
      >
        <img
          src={avatars[idx]}
          alt={name}
          onClick={() => setOpen(true)}
          style={{ width: 160, height: 216, borderRadius: 12, objectFit: "cover", filter: imgF, border, display: "block", cursor: "zoom-in" }}
        />
        {n > 1 && (
          <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 4 }}>
            {avatars.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                style={{ width: i === idx ? 14 : 6, height: 6, borderRadius: 3, background: i === idx ? "#fff" : "rgba(255,255,255,0.5)", border: "none", cursor: "pointer", padding: 0, transition: "width .2s" }}
              />
            ))}
          </div>
        )}
      </div>
      {open && <Lightbox images={avatars} startIdx={idx} alt={name} onClose={() => setOpen(false)} />}
    </>
  );
}

// ─── WINDOW WIDTH HOOK ───────────────────────────────────────────────────────
function useWindowWidth() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

// ─── IMAGE PLACEHOLDER ────────────────────────────────────────────────────────
function ImagePlaceholder({ title, height, bg, color }) {
  const initials = (title || "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  return (
    <div style={{ width: "100%", height, background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontSize: Math.max(24, Math.floor(height / 4)), fontWeight: 300, color, letterSpacing: "0.08em", fontFamily: "'DM Serif Display', serif" }}>
        {initials || "·"}
      </span>
    </div>
  );
}

// ─── DETAIL MODAL ─────────────────────────────────────────────────────────────
function DetailModal({ item, lang, T, t, onClose, type }) {
  const overlayRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        if (lightbox) setLightbox(null);
        else onClose();
      }
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, lightbox]);

  const isProject = type === "project";
  const isTraining = type === "training";
  const isComp = type === "competition";

  const ss = (it) => {
    const s = T.dark ? it.sd : it.sl;
    return { color: s.color, background: s.bg };
  };
  const tp = (tp_) => {
    const p = T.dark ? TYPE_PALETTE.dark : TYPE_PALETTE.light;
    const v = p[tp_] || p.Course;
    return { color: v.c, background: v.b };
  };

  return (
    <>
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          background: T.card,
          borderRadius: 16,
          width: "100%",
          maxWidth: 680,
          maxHeight: "88vh",
          overflowY: "auto",
          boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
          border: `1px solid ${T.border}`,
        }}
      >
        {/* Header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            background: T.card,
            borderBottom: `1px solid ${T.border}`,
            padding: "14px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10,
            borderRadius: "16px 16px 0 0",
          }}
        >
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, color: T.text }}>
              {tx(item.title, lang)}
            </div>
            {(isProject || isTraining) && (
              <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>
                {tx(isProject ? item.role : item.org, lang)}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: `1px solid ${T.border}`,
              borderRadius: 6,
              cursor: "pointer",
              color: T.muted,
              padding: "4px 10px",
              fontSize: 12,
              fontFamily: "inherit",
            }}
          >
            {t.close}
          </button>
        </div>

        <div style={{ padding: "22px 22px 28px" }}>
          {/* Gallery */}
          <div style={{ marginBottom: 20 }}>
            <Gallery
              images={item.images}
              imgF={T.imgF}
              alt={tx(item.title, lang)}
              onImageClick={(src, a) => setLightbox({ src, alt: a })}
              bg={T.metric}
            />
          </div>

          {/* Status / type badge row */}
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 20,
            }}
          >
            {isProject && (
              <>
                <span
                  style={{
                    fontSize: 12,
                    padding: "3px 10px",
                    borderRadius: 4,
                    ...ss(item),
                  }}
                >
                  {item.status}
                </span>
                <span style={{ fontSize: 12, color: T.muted }}>
                  {tx(item.subtitle, lang)}
                </span>
              </>
            )}
            {isTraining && (
              <>
                <span
                  style={{
                    fontSize: 12,
                    padding: "3px 10px",
                    borderRadius: 4,
                    ...tp(item.type),
                  }}
                >
                  {item.type}
                </span>
                <span style={{ fontSize: 12, color: T.muted }}>
                  {item.org} · {item.year}
                </span>
              </>
            )}
            {isComp && (
              <>
                <span
                  style={{
                    fontSize: 12,
                    padding: "3px 10px",
                    borderRadius: 4,
                    ...ss(item),
                  }}
                >
                  {tx(item.result, lang)}
                </span>
                <span style={{ fontSize: 12, color: T.muted }}>
                  {tx(item.org, lang)} · {item.year}
                </span>
              </>
            )}
          </div>

          {/* Description for training / competition */}
          {(isTraining || isComp) && (
            <p
              style={{
                fontSize: 15,
                color: T.sub,
                lineHeight: 1.85,
                marginBottom: 20,
              }}
            >
              {tx(item.description, lang)}
            </p>
          )}

          {/* Project sections */}
          {isProject && (
            <>
              {[
                { label: t.problem, c: tx(item.problem, lang) },
                { label: t.analysis, c: tx(item.analysis, lang) },
                { label: t.solution, c: tx(item.solution, lang) },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    marginBottom: 18,
                    paddingBottom: 18,
                    borderBottom: `1px solid ${T.border}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: 10,
                      color: T.muted,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {s.label}
                  </p>
                  <p style={{ fontSize: 14, color: T.sub, lineHeight: 1.85 }}>
                    {s.c}
                  </p>
                </div>
              ))}
              <div
                style={{
                  marginBottom: 18,
                  paddingBottom: 18,
                  borderBottom: `1px solid ${T.border}`,
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    color: T.muted,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {t.impact}
                </p>
                {tx(item.impact, lang).map((it, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: 10, marginBottom: 8 }}
                  >
                    <span
                      style={{ color: T.muted, flexShrink: 0, marginTop: 3 }}
                    >
                      —
                    </span>
                    <span
                      style={{ fontSize: 14, color: T.sub, lineHeight: 1.75 }}
                    >
                      {it}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Tags / Tech */}
          {(item.tech || item.tags) && (
            <div>
              <p
                style={{
                  fontSize: 10,
                  color: T.muted,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                {isProject ? t.techStack : "Tags"}
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {(item.tech || item.tags || []).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
                      color: T.techText,
                      border: `1px solid ${T.border}`,
                      borderRadius: 4,
                      padding: "5px 10px",
                      background: T.techBg,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    {lightbox && (
      <Lightbox
        src={lightbox.src}
        alt={lightbox.alt}
        onClose={() => setLightbox(null)}
      />
    )}
    </>
  );
}

// ─── SECTION WRAPPER (for single-page scroll) ─────────────────────────────────
function Section({ id, children }) {
  return (
    <section id={id} style={{ scrollMarginTop: 64, paddingTop: 80 }}>
      {children}
    </section>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("en");
  const w = useWindowWidth();
  const isMobile = w < 640;
  const isTablet = w < 1024;
  const [activeNav, setActiveNav] = useState(0);
  const [modal, setModal] = useState(null); // { item, type }
  const sectionRefs = useRef([]);
  const t = I18N[lang];
  const d = dark;

  const T = {
    dark: d,
    bg: d ? "#0d0d0d" : "#fafaf9",
    card: d ? "#161616" : "#ffffff",
    navBg: d ? "rgba(13,13,13,0.94)" : "rgba(250,250,249,0.94)",
    metric: d ? "#111111" : "#f4f4f2",
    border: d ? "#222222" : "#e5e5e3",
    borderTag: d ? "#2c2c2c" : "#e0e0dc",
    text: d ? "#e8e8e6" : "#111111",
    sub: d ? "#959590" : "#555555",
    muted: d ? "#555550" : "#9a9a94",
    tag: d ? "#7a7a74" : "#555555",
    techBg: d ? "#161616" : "#ffffff",
    techText: d ? "#c0c0ba" : "#333333",
    toggleBg: d ? "#282828" : "#e0e0dc",
    imgF: d ? "grayscale(28%) brightness(0.78)" : "grayscale(16%)",
    navActBg: d ? "#e8e8e6" : "#111111",
    navActTxt: d ? "#111111" : "#ffffff",
    langBg: d ? "#1e1e1e" : "#efefed",
    langActBg: d ? "#e8e8e6" : "#111111",
    langActTxt: d ? "#111" : "#fff",
    langTxt: d ? "#888" : "#555",
    accent: d ? "#e8e8e6" : "#111111",
  };

  const ss = useCallback(
    (item) => {
      const s = d ? item.sd : item.sl;
      return { color: s.color, background: s.bg };
    },
    [d],
  );
  const tp_ = useCallback(
    (type) => {
      const p = d ? TYPE_PALETTE.dark : TYPE_PALETTE.light;
      const v = p[type] || p.Course;
      return { color: v.c, background: v.b };
    },
    [d],
  );

  // Scroll-spy
  useEffect(() => {
    const ids = ["about", "projects", "training", "competitions"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = ids.indexOf(e.target.id);
            if (i >= 0) setActiveNav(i);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-60px 0px -40% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id, idx) => {
    setActiveNav(idx);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const SECTION_IDS = ["about", "projects", "training", "competitions"];

  const SectionHead = ({ label, title }) => (
    <div style={{ marginBottom: 36 }}>
      <p
        style={{
          fontSize: 11,
          color: T.muted,
          marginBottom: 8,
          letterSpacing: ".1em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontFamily: "'DM Serif Display',serif",
          fontSize: 30,
          fontWeight: 400,
          color: T.text,
        }}
      >
        {title}
      </h2>
    </div>
  );

  const Divider = () => (
    <div style={{ height: 1, background: T.border, margin: "20px 0" }} />
  );

  return (
    <div
      style={{
        fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
        background: T.bg,
        minHeight: "100vh",
        color: T.text,
        transition: "background .25s,color .25s",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes fu { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:translateY(0) } }
        .fu { animation: fu .35s ease both }
        .ch { transition: border-color .15s, transform .15s; cursor: pointer; }
        .ch:hover { transform: translateY(-2px); border-color: #555 !important; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        .nav-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .nav-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 639px) {
          .ch:hover { transform: none; }
          section { scroll-margin-top: 100px !important; }
        }
      `}</style>

      {/* ── STICKY NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: T.navBg,
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${T.border}`,
          display: "flex",
          flexDirection: "column",
          transition: "background .25s,border-color .25s",
        }}
      >
        {/* Row 1: controls */}
        <div style={{ height: 56, display: "flex", alignItems: "center", padding: isMobile ? "0 12px" : "0 36px" }}>
          {/* Left: language + dark/light toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
            <div style={{ display: "flex", background: T.langBg, borderRadius: 6, padding: 2, gap: 1 }}>
              {["EN", "TH"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l.toLowerCase())}
                  style={{
                    background: lang === l.toLowerCase() ? T.langActBg : "transparent",
                    color: lang === l.toLowerCase() ? T.langActTxt : T.langTxt,
                    border: "none", cursor: "pointer",
                    padding: "3px 10px", borderRadius: 4,
                    fontSize: 12, fontFamily: "inherit", fontWeight: 500,
                    transition: "background .15s",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setDark((v) => !v)}
              aria-label="Toggle theme"
              style={{ background: T.toggleBg, border: "none", borderRadius: 20, width: 44, height: 24, cursor: "pointer", position: "relative", transition: "background .25s", flexShrink: 0 }}
            >
              <span style={{ position: "absolute", top: 2, left: d ? 22 : 2, width: 20, height: 20, borderRadius: "50%", background: d ? "#e8e8e6" : "#fff", boxShadow: "0 1px 3px rgba(0,0,0,.3)", transition: "left .2s", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>
                {d ? <Moon size={11} /> : <Sun size={11} />}
              </span>
            </button>
          </div>

          {/* Desktop center: nav links */}
          {!isMobile && (
            <div className="nav-scroll" style={{ display: "flex", gap: 2 }}>
              {t.nav.map((n, i) => (
                <button key={i} onClick={() => scrollTo(SECTION_IDS[i], i)}
                  style={{ background: activeNav === i ? T.navActBg : "transparent", color: activeNav === i ? T.navActTxt : T.muted, border: "none", cursor: "pointer", padding: "5px 13px", borderRadius: 6, fontSize: 13, fontFamily: "inherit", transition: "background .15s,color .15s", whiteSpace: "nowrap" }}
                >
                  {n}
                </button>
              ))}
            </div>
          )}

          {/* Right: Download CV */}
          <div style={{ flex: isMobile ? 0 : 1, display: "flex", justifyContent: "flex-end" }}>
            <a
              href={cvFile}
              download="CV_Kasama-Soisuwan.pdf"
              style={{ fontSize: 12, color: T.muted, textDecoration: "none", borderBottom: `1px solid ${T.borderTag}`, whiteSpace: "nowrap" }}
            >
              {t.downloadCV}
            </a>
          </div>
        </div>

        {/* Row 2 (mobile only): nav links */}
        {isMobile && (
          <div className="nav-scroll" style={{ display: "flex", gap: 2, padding: "0 4px 6px", borderTop: `1px solid ${T.border}`, justifyContent: "center" }}>
            {t.nav.map((n, i) => (
              <button key={i} onClick={() => scrollTo(SECTION_IDS[i], i)}
                style={{ background: activeNav === i ? T.navActBg : "transparent", color: activeNav === i ? T.navActTxt : T.muted, border: "none", cursor: "pointer", padding: "5px 13px", borderRadius: 6, fontSize: 13, fontFamily: "inherit", transition: "background .15s,color .15s", whiteSpace: "nowrap" }}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── MAIN CONTENT (single page scroll) ── */}
      <main
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: isMobile ? "0 16px 80px" : "0 24px 120px",
          paddingTop: 80,
        }}
      >
        {/* ══ ABOUT ══ */}
        <Section id="about">
          <div className="fu" style={{ paddingTop: 20 }}>
            {/* Hero */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 170px",
                gap: isMobile ? 24 : 40,
                alignItems: "start",
                marginBottom: 48,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 11,
                    color: T.muted,
                    marginBottom: 12,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                  }}
                >
                  {t.role}
                </p>
                <h1
                  style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontSize: isMobile ? 30 : 42,
                    fontWeight: 400,
                    lineHeight: 1.15,
                    marginBottom: lang === "th" ? 6 : 20,
                    color: T.text,
                  }}
                >
                  {lang === "th" ? PROFILE.nameLocal : PROFILE.name}
                </h1>
                {lang === "th" && (
                  <p
                    style={{
                      fontSize: 14,
                      color: T.muted,
                      marginBottom: 18,
                      fontStyle: "italic",
                    }}
                  >
                    {PROFILE.name}
                  </p>
                )}
                <p
                  style={{
                    fontSize: 14,
                    color: T.sub,
                    lineHeight: 1.9,
                    maxWidth: 480,
                    marginBottom: 18,
                  }}
                >
                  {tx(PROFILE.bio, lang)}
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 5 }}
                >
                  {[
                    { Icon: Mail,    val: PROFILE.email },
                    { Icon: Phone,   val: PROFILE.phone },
                    { Icon: MapPin,  val: tx(PROFILE.location, lang) },
                  ].map((item) => (
                    <div
                      key={item.val}
                      style={{ display: "flex", gap: 8, fontSize: 13, color: T.sub, alignItems: "center" }}
                    >
                      <item.Icon size={13} color={T.muted} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                      <span>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ order: isMobile ? -1 : 0, display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}>
                <AvatarCycler
                  avatars={PROFILE.avatars}
                  imgF={T.imgF}
                  border={`1px solid ${T.border}`}
                  name={PROFILE.name}
                />
              </div>
            </div>

            {/* Metrics */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
                gap: 1,
                background: T.border,
                borderRadius: 10,
                overflow: "hidden",
                marginBottom: 48,
              }}
            >
              {PROFILE.metrics.map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: T.metric,
                    padding: "22px 12px",
                    textAlign: "center",
                    transition: "background .25s",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Serif Display',serif",
                      fontSize: 26,
                      fontWeight: 400,
                      color: T.text,
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: T.muted,
                      marginTop: 5,
                      lineHeight: 1.4,
                    }}
                  >
                    {tx(m.label, lang)}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 32 }}>
              <p
                style={{
                  fontSize: 11,
                  color: T.muted,
                  marginBottom: 24,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                }}
              >
                {t.selectedWork}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {SKILLS.map((group, gi) => (
                  <div key={gi}>
                    <p
                      style={{
                        fontSize: 10,
                        color: T.muted,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        marginBottom: 10,
                      }}
                    >
                      {tx(group.category, lang)}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {group.items.map((skill) => {
                        const name = typeof skill === "object" ? skill.name : skill;
                        const slug = typeof skill === "object" ? skill.slug : null;
                        return (
                          <span
                            key={name}
                            style={{
                              fontSize: 12,
                              color: T.tag,
                              border: `1px solid ${T.borderTag}`,
                              borderRadius: 4,
                              padding: "4px 10px",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 5,
                            }}
                          >
                            {slug && (
                              <img
                                src={`https://cdn.simpleicons.org/${slug}`}
                                alt={name}
                                style={{ width: 13, height: 13, flexShrink: 0 }}
                              />
                            )}
                            {name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ══ PROJECTS ══ */}
        <Section id="projects">
          <Divider />
          <SectionHead label={t.caseStudies} title={t.projects} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                className="ch"
                onClick={() => setModal({ item: p, type: "project" })}
                style={{
                  border: `1px solid ${T.border}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  background: T.card,
                  transition:
                    "background .25s,border-color .15s,transform .15s",
                }}
              >
                {/* Cover image (first of array) */}
                <div
                  style={{
                    position: "relative",
                    height: 160,
                    overflow: "hidden",
                    background: T.metric,
                  }}
                >
                  {p.images?.[0] ? (
                    <>
                      <img
                        src={p.images[0]}
                        alt={tx(p.title, lang)}
                        style={{ width: "100%", height: "100%", objectFit: "contain", filter: T.imgF, display: "block", transition: "transform .3s" }}
                      />
                      {p.images.length > 1 && (
                        <div style={{ position: "absolute", bottom: 8, right: 10, background: "rgba(0,0,0,0.5)", borderRadius: 4, fontSize: 11, color: "#fff", padding: "2px 7px", backdropFilter: "blur(4px)" }}>
                          +{p.images.length - 1} {t.gallery}
                        </div>
                      )}
                    </>
                  ) : (
                    <ImagePlaceholder title={tx(p.title, lang)} height={160} bg={T.metric} color={T.muted} />
                  )}
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 6,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 500,
                          marginBottom: 2,
                          color: T.text,
                        }}
                      >
                        {tx(p.title, lang)}
                      </div>
                      <div style={{ fontSize: 12, color: T.muted }}>
                        {tx(p.role, lang)}
                      </div>
                      <div style={{ fontSize: 12, color: T.muted }}>
                        {tx(p.subtitle, lang)}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        padding: "2px 8px",
                        borderRadius: 4,
                        flexShrink: 0,
                        ...ss(p),
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: T.sub,
                      lineHeight: 1.75,
                      marginTop: 10,
                      marginBottom: 12,
                    }}
                  >
                    {tx(p.problem, lang)}
                  </p>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 11,
                          color: T.tag,
                          border: `1px solid ${T.borderTag}`,
                          borderRadius: 4,
                          padding: "2px 7px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ══ TRAINING ══ */}
        <Section id="training">
          <Divider />
          <SectionHead label={t.learning} title={t.training} />
          <div
            style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}
          >
            {TRAININGS.map((item, i) => (
              <div
                key={i}
                className="ch"
                onClick={() => setModal({ item, type: "training" })}
                style={{
                  border: `1px solid ${T.border}`,
                  borderRadius: 10,
                  overflow: "hidden",
                  background: T.card,
                  transition:
                    "background .25s,border-color .15s,transform .15s",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 140,
                    overflow: "hidden",
                    background: "#111",
                  }}
                >
                  {item.images?.[0] ? (
                    <>
                      <img
                        src={item.images[0]}
                        alt={tx(item.title, lang)}
                        style={{ width: "100%", height: "100%", objectFit: "contain", filter: T.imgF, display: "block" }}
                      />
                      {item.images.length > 1 && (
                        <div style={{ position: "absolute", bottom: 6, right: 8, background: "rgba(0,0,0,0.5)", borderRadius: 3, fontSize: 10, color: "#fff", padding: "1px 6px", backdropFilter: "blur(4px)" }}>
                          +{item.images.length - 1}
                        </div>
                      )}
                    </>
                  ) : (
                    <ImagePlaceholder title={tx(item.title, lang)} height={140} bg={T.metric} color={T.muted} />
                  )}
                </div>
                <div style={{ padding: "12px 14px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        padding: "2px 7px",
                        borderRadius: 3,
                        ...tp_(item.type),
                      }}
                    >
                      {item.type}
                    </span>
                    <span style={{ fontSize: 11, color: T.muted }}>
                      {item.year}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: T.text,
                      marginBottom: 3,
                      lineHeight: 1.4,
                    }}
                  >
                    {tx(item.title, lang)}
                  </div>
                  <div style={{ fontSize: 11, color: T.muted }}>{item.org}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ══ COMPETITIONS ══ */}
        <Section id="competitions">
          <Divider />
          <SectionHead label={t.achievements} title={t.competitions} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {COMPETITIONS.map((c, i) => (
              <div
                key={i}
                className="ch"
                onClick={() => setModal({ item: c, type: "competition" })}
                style={{
                  border: `1px solid ${T.border}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  background: T.card,
                  transition:
                    "background .25s,border-color .15s,transform .15s",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 160,
                    overflow: "hidden",
                    background: T.metric,
                  }}
                >
                  {c.images?.[0] ? (
                    <>
                      <img
                        src={c.images[0]}
                        alt={tx(c.title, lang)}
                        style={{ width: "100%", height: "100%", objectFit: "contain", filter: T.imgF, display: "block" }}
                      />
                      {c.images.length > 1 && (
                        <div style={{ position: "absolute", bottom: 8, right: 10, background: "rgba(0,0,0,0.5)", borderRadius: 4, fontSize: 11, color: "#fff", padding: "2px 7px", backdropFilter: "blur(4px)" }}>
                          +{c.images.length - 1} {t.gallery}
                        </div>
                      )}
                    </>
                  ) : (
                    <ImagePlaceholder title={tx(c.title, lang)} height={160} bg={T.metric} color={T.muted} />
                  )}
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 10,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 500,
                          marginBottom: 4,
                          color: T.text,
                        }}
                      >
                        {tx(c.title, lang)}
                      </div>
                      <div style={{ fontSize: 12, color: T.muted }}>
                        {tx(c.org, lang)}
                      </div>
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        flexShrink: 0,
                        marginLeft: 12,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          padding: "3px 10px",
                          borderRadius: 4,
                          display: "block",
                          marginBottom: 3,
                          ...ss(c),
                        }}
                      >
                        {tx(c.result, lang)}
                      </span>
                      <span style={{ fontSize: 11, color: T.muted }}>
                        {c.year}
                      </span>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: T.sub,
                      lineHeight: 1.8,
                      marginBottom: 12,
                    }}
                  >
                    {tx(c.description, lang)}
                  </p>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 11,
                          color: T.tag,
                          border: `1px solid ${T.borderTag}`,
                          borderRadius: 4,
                          padding: "2px 7px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: `1px solid ${T.border}`,
          padding: isMobile ? "20px 16px" : "20px 36px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 12 : 0,
        }}
      >
        <span style={{ fontSize: 12, color: T.muted }}>
          {lang === "th" ? PROFILE.nameLocal : PROFILE.name} · {t.role}
        </span>
        <div style={{ display: "flex", gap: 18 }}>
          {PROFILE.social.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                color: T.muted,
                textDecoration: "none",
                borderBottom: `1px solid ${T.borderTag}`,
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </footer>

      {/* ── MODAL ── */}
      {modal && (
        <DetailModal
          item={modal.item}
          lang={lang}
          T={T}
          t={t}
          type={modal.type}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
