import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiDownload, HiMenuAlt4, HiX } from 'react-icons/hi';
import resume from '../Resume.pdf';

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4, rootMargin: '-60px 0px -40% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center font-space font-bold text-white text-sm group-hover:glow-purple transition-all duration-300">
              HR
            </div>
            <span className="hidden sm:block font-space font-semibold text-white text-sm tracking-wide">
              hardik<span className="text-primary-light">.</span>dev
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={`nav-link font-inter text-sm font-medium transition-colors duration-200 ${
                    active === id ? 'text-primary-light active' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/hardikralhan"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <AiFillGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/hardikralhan"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary-light transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin className="text-2xl" />
            </a>
            <a
              href={resume}
              download
              className="flex items-center gap-1.5 px-4 py-1.5 border border-primary/40 rounded-md text-primary-light hover:bg-primary/10 hover:border-primary/70 transition-all duration-200 text-sm font-medium font-mono"
            >
              <HiDownload className="text-base" />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt4 className="text-2xl" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-72 z-40 glass-dark flex flex-col pt-24 px-8 gap-6 shadow-2xl"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              return (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={`font-space text-lg font-semibold transition-colors duration-200 ${
                    active === id ? 'text-primary-light' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              );
            })}
            <div className="mt-4 flex items-center gap-4 pt-4 border-t border-white/10">
              <a href="https://github.com/hardikralhan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <AiFillGithub className="text-2xl" />
              </a>
              <a href="https://linkedin.com/in/hardikralhan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary-light transition-colors">
                <AiFillLinkedin className="text-2xl" />
              </a>
              <a href={resume} download className="flex items-center gap-1.5 px-3 py-1.5 border border-primary/40 rounded-md text-primary-light text-sm font-mono hover:bg-primary/10 transition-all">
                <HiDownload /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/60"
          />
        )}
      </AnimatePresence>
    </>
  );
}
