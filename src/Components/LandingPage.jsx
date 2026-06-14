import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiDownload, HiArrowDown } from 'react-icons/hi';
import * as THREE from 'three';
import resume from '../Resume.pdf';
import { stats } from '../data';

/* ── Typed text component ── */
function TypedText({ strings, typeSpeed = 50, backSpeed = 28, pauseMs = 1800 }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIdx((i) => (i + 1) % strings.length);
    } else {
      timeout = setTimeout(() => {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }, deleting ? backSpeed : typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, strings, typeSpeed, backSpeed, pauseMs]);

  return (
    <>
      {text}
      <span className="typed-cursor text-primary-light">|</span>
    </>
  );
}

/* ── Three.js animated background ── */
function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    /* Star field */
    const starCount = 350;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 200;
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.18, transparent: true, opacity: 0.55 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    /* Geometric wireframe shapes */
    const palette = [0x7c3aed, 0x06b6d4, 0x10b981, 0x8b5cf6, 0x0ea5e9];
    const shapeDefs = [
      { type: 'ico', color: palette[0], x: -18, y: 8, z: -18, size: 3.2 },
      { type: 'oct', color: palette[1], x: 22, y: -10, z: -22, size: 2.8 },
      { type: 'tet', color: palette[2], x: -26, y: -9, z: -12, size: 2.4 },
      { type: 'tor', color: palette[0], x: 16, y: 14, z: -28, size: 3.8 },
      { type: 'ico', color: palette[3], x: -12, y: -17, z: -32, size: 4.2 },
      { type: 'oct', color: palette[4], x: 28, y: 6, z: -24, size: 2.2 },
      { type: 'tet', color: palette[1], x: -22, y: 20, z: -20, size: 2.0 },
      { type: 'tor', color: palette[2], x: 10, y: -22, z: -26, size: 3.0 },
    ];

    const meshes = shapeDefs.map(({ type, color, x, y, z, size }) => {
      const geo =
        type === 'ico' ? new THREE.IcosahedronGeometry(size, 1) :
        type === 'oct' ? new THREE.OctahedronGeometry(size, 0) :
        type === 'tet' ? new THREE.TetrahedronGeometry(size, 0) :
        new THREE.TorusGeometry(size * 0.8, size * 0.28, 8, 18);

      const mat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.32,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(mesh);
      return {
        mesh,
        geo,
        mat,
        rx: (Math.random() - 0.5) * 0.007,
        ry: (Math.random() - 0.5) * 0.009,
      };
    });

    /* Mouse parallax */
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouseMove = (e) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      meshes.forEach(({ mesh, rx, ry }) => {
        mesh.rotation.x += rx;
        mesh.rotation.y += ry;
      });
      stars.rotation.y += 0.00018;
      camera.position.x += (mouse.x * 2.5 - camera.position.x) * 0.025;
      camera.position.y += (mouse.y * 1.5 - camera.position.y) * 0.025;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      meshes.forEach(({ geo, mat }) => { geo.dispose(); mat.dispose(); });
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
}

/* ── Stat counter card ── */
function StatCard({ stat, delay }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const animate = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCount(Math.round(eased * stat.value));
          if (t < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="stat-card p-6 text-center"
    >
      <div className="font-space font-bold text-4xl md:text-5xl mb-1" style={{ color: stat.color }}>
        {count}{stat.suffix}
      </div>
      <div className="text-gray-400 text-sm font-inter">{stat.label}</div>
    </motion.div>
  );
}

export default function LandingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: '4rem' }}
      >
        <ThreeBackground />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark pointer-events-none z-0" />
        <div className="absolute inset-0 pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse 60% 55% at 70% 40%, rgba(124,58,237,0.13) 0%, transparent 70%)' }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-primary" />
              <span className="section-label">Gen AI Dev · AI Software Engineer · Full-Stack Dev</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-space font-bold text-white leading-tight mb-3"
              style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
            >
              Hardik{' '}
              <span className="gradient-text">Ralhan</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-mono text-xl md:text-2xl text-gray-300 mb-7 min-h-[2.5rem]"
            >
              <span className="text-primary opacity-80">$ </span>
              <TypedText
                strings={[
                  'Building multi-agent AI systems',
                  'Shipping RAG pipelines to production',
                  'Designing A2A agent architectures',
                  'Connecting LLMs to live databases',
                  'Automating workflows with GenAI',
                ]}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-gray-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
            >
              4+ years building production GenAI systems in Python — multi-agent A2A architectures with LangChain
              + LangGraph, RAG pipelines on Pinecone & PGVector, FastAPI backends on GCP. Used daily by{' '}
              <span className="text-secondary font-semibold">50+ clients</span>. Cut manual workflows by up to{' '}
              <span className="text-accent font-semibold">70%</span> across 10+ projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 text-sm glow-purple"
              >
                Work With Me
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 glass text-white font-semibold rounded-lg hover:bg-white/10 border border-white/10 transition-all duration-300 text-sm"
              >
                View Projects
              </a>
              <a
                href={resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary-light rounded-lg hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 text-sm font-medium"
              >
                <HiDownload className="text-base" />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="flex items-center gap-5"
            >
              <a href="https://github.com/hardikralhan" target="_blank" rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200">
                <AiFillGithub className="text-[1.7rem]" />
              </a>
              <a href="https://linkedin.com/in/hardikralhan" target="_blank" rel="noreferrer"
                className="text-gray-500 hover:text-primary-light transition-colors duration-200">
                <AiFillLinkedin className="text-[1.7rem]" />
              </a>
              <div className="h-px w-7 bg-gray-700" />
              <span className="font-mono text-sm text-gray-600">hardikralhan66@gmail.com</span>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-primary-light transition-colors cursor-pointer z-10"
          onClick={(e) => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); }}
        >
          <span className="font-mono text-[0.65rem] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <HiArrowDown className="text-lg" />
          </motion.div>
        </motion.a>
      </section>

      {/* ── Stats strip ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </>
  );
}
