import { motion } from 'framer-motion';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { projects } from '../data';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      className="project-card group flex flex-col h-full"
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full rounded-t-[0.75rem]"
        style={{ background: `linear-gradient(90deg, ${project.categoryColor}, transparent)` }}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <span
              className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono mb-2"
              style={{
                background: `${project.categoryColor}18`,
                border: `1px solid ${project.categoryColor}35`,
                color: project.categoryColor,
              }}
            >
              {project.category}
            </span>
            <h3 className="font-space font-bold text-white text-base leading-snug group-hover:text-primary-light transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          {project.isPrivate ? (
            <span
              className="flex-shrink-0 px-2.5 py-1 rounded-md text-xs font-mono mt-1 cursor-default select-none"
              style={{ background: 'rgba(148,163,184,0.08)', border: '1px solid rgba(148,163,184,0.15)', color: '#64748b' }}
              title="Client work — NDA protected"
            >
              NDA
            </span>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center glass text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 mt-1"
              title="View source on GitHub"
            >
              <AiFillGithub className="text-base" />
            </a>
          )}
        </div>

        {/* Metric highlight */}
        {project.metric && (
          <div
            className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full text-xs font-mono font-semibold w-fit"
            style={{
              background: `${project.categoryColor}12`,
              border: `1px solid ${project.categoryColor}30`,
              color: project.categoryColor,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.categoryColor }} />
            {project.metric}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">What I've Built</p>
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Production AI systems built for real clients alongside personal open-source work. Client projects are NDA-protected.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/hardikralhan"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 glass border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-white/20 transition-all duration-300 text-sm font-medium"
          >
            <AiFillGithub className="text-xl" />
            View More on GitHub
            <AiOutlineLink className="text-sm" />
          </a>
        </motion.div>
      </div>

      {/* Bg accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)' }} />
    </section>
  );
}
