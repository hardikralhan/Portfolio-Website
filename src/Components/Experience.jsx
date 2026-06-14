import { motion } from 'framer-motion';
import { experiences } from '../data';

function ExperienceCard({ exp, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex md:items-center gap-8 mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 flex-col items-center">
        <div
          className="w-4 h-4 rounded-full border-2 border-dark shadow-lg"
          style={{ backgroundColor: exp.color, boxShadow: `0 0 12px ${exp.color}99` }}
        />
      </div>

      {/* Mobile dot */}
      <div
        className="md:hidden flex-shrink-0 mt-1 w-4 h-4 rounded-full border-2 border-dark"
        style={{ backgroundColor: exp.color, boxShadow: `0 0 10px ${exp.color}88` }}
      />

      {/* Card — takes ~47% on desktop */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="gradient-border flex-1 md:max-w-[46%] p-6 card-hover cursor-default"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span
                className="font-space font-bold text-lg text-white"
              >
                {exp.company}
              </span>
              {exp.current && (
                <span className="px-2 py-0.5 rounded-full text-xs font-mono font-medium"
                  style={{ background: `${exp.color}22`, color: exp.color, border: `1px solid ${exp.color}44` }}>
                  Current
                </span>
              )}
            </div>
            <p className="font-semibold text-base" style={{ color: exp.color }}>{exp.role}</p>
            <p className="text-gray-500 text-xs font-mono mt-0.5">
              {exp.type} · {exp.location}
            </p>
          </div>
          <span className="font-mono text-xs text-gray-500 bg-dark-lighter px-3 py-1 rounded-full whitespace-nowrap mt-1">
            {exp.period}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${exp.color}33, transparent)` }} />

        {/* Highlights */}
        <ul className="space-y-2.5 mb-4">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex gap-2.5 text-gray-400 text-sm leading-relaxed">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: exp.color }} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {exp.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      </motion.div>

      {/* Spacer for opposite side on desktop */}
      <div className="hidden md:block flex-1 md:max-w-[46%]" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Work History</p>
          <h2 className="section-title mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop only */}
          <div className="hidden md:block timeline-line" />

          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <p className="section-label text-center mb-6">Education</p>
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <div className="gradient-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}>
                🎓
              </div>
              <div className="flex-1">
                <p className="font-space font-bold text-white text-base">
                  Master of Computer Applications (MCA)
                </p>
                <p className="text-primary-light text-sm font-medium">Osmania University, Hyderabad</p>
                <p className="text-gray-500 text-xs font-mono mt-0.5">Jan 2021 – Oct 2022</p>
              </div>
            </div>
            <div className="gradient-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)' }}>
                🏛️
              </div>
              <div className="flex-1">
                <p className="font-space font-bold text-white text-base">
                  Bachelor of Commerce (Hons.) — B.Com(H)
                </p>
                <p className="text-secondary text-sm font-medium">IP University, Delhi</p>
                <p className="text-gray-500 text-xs font-mono mt-0.5">Graduated 2020</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)' }} />
    </section>
  );
}
