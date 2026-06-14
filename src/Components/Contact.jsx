import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';

const contactInfo = [
  {
    icon: <AiOutlineMail className="text-xl" />,
    label: 'Email',
    value: 'hardikralhan66@gmail.com',
    href: 'mailto:hardikralhan66@gmail.com',
    color: '#7c3aed',
  },
  {
    icon: <AiOutlinePhone className="text-xl" />,
    label: 'Phone',
    value: '+91 9991252862',
    href: 'tel:+919991252862',
    color: '#06b6d4',
  },
  {
    icon: <HiLocationMarker className="text-xl" />,
    label: 'Location',
    value: 'India · Remote',
    href: null,
    color: '#10b981',
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', name, email, message }),
      });
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Let's Work Together</p>
          <h2 className="section-title mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />
          <p className="text-gray-400 mt-6 max-w-lg mx-auto text-sm leading-relaxed">
            I'm open to full-time, contract, and freelance opportunities in AI engineering.
            Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="font-space font-bold text-white text-xl mb-2">Say Hello!</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you have a project in mind, want to discuss AI architectures, or just want to connect — I'd love to hear from you.
              </p>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon, label, value, href, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-200 text-sm font-medium hover:text-white transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-200 text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-gray-500 text-xs font-mono mb-3">{'// Find me online'}</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/hardikralhan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 text-gray-400 hover:text-white transition-all text-sm"
                >
                  <AiFillGithub className="text-lg" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/hardikralhan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 text-gray-400 hover:text-primary-light transition-all text-sm"
                >
                  <AiFillLinkedin className="text-lg" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              name="contact"
              netlify="true"
              onSubmit={handleSubmit}
              className="gradient-border p-6 flex flex-col gap-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-gray-400 text-xs font-mono uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-gray-400 text-xs font-mono uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-gray-400 text-xs font-mono uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="form-input resize-none"
                />
              </div>

              {status === 'sent' && (
                <div className="px-4 py-3 rounded-lg text-accent text-sm font-mono border border-accent/30 bg-accent/10">
                  ✓ Message sent! I'll reply within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="px-4 py-3 rounded-lg text-red-400 text-sm font-mono border border-red-400/30 bg-red-400/10">
                  ✗ Something went wrong. Email me directly instead.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-lg text-sm transition-all duration-300 glow-purple"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <HiPaperAirplane className="text-base" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bg accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)' }} />
    </section>
  );
}
