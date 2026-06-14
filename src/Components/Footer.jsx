import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-dark-card">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-space font-bold text-white text-sm">
                HR
              </div>
              <span className="font-space font-semibold text-white text-sm">
                hardik<span className="text-primary-light">.</span>dev
              </span>
            </div>
            <p className="text-gray-600 text-xs font-mono mt-1">Building AI systems that actually work in production.</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                className="text-gray-500 hover:text-gray-300 text-xs font-inter transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/hardikralhan" target="_blank" rel="noreferrer"
              className="text-gray-600 hover:text-white transition-colors">
              <AiFillGithub className="text-xl" />
            </a>
            <a href="https://linkedin.com/in/hardikralhan" target="_blank" rel="noreferrer"
              className="text-gray-600 hover:text-primary-light transition-colors">
              <AiFillLinkedin className="text-xl" />
            </a>
            <a href="mailto:hardikralhan66@gmail.com"
              className="text-gray-600 hover:text-secondary transition-colors">
              <HiMail className="text-xl" />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-700 text-xs font-mono">
            © {new Date().getFullYear()} Hardik Ralhan. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs font-mono">
            Designed &amp; built with <span className="text-primary-light">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
