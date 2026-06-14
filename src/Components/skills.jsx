import { motion } from 'framer-motion';
import { skillCategories } from '../data';

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.04 },
  }),
};

function SkillCard({ category, cardIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: cardIndex * 0.1 }}
      className="skill-category-card p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: `${category.color}18`, border: `1px solid ${category.color}40` }}
        >
          {category.icon}
        </div>
        <div>
          <h3 className="font-space font-bold text-white text-base">{category.title}</h3>
          <div className="h-0.5 w-10 rounded mt-1" style={{ background: category.color }} />
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            custom={i}
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-default"
            style={{
              background: `${category.color}12`,
              border: `1px solid ${category.color}30`,
              color: category.color,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${category.color}28`;
              e.currentTarget.style.borderColor = `${category.color}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${category.color}12`;
              e.currentTarget.style.borderColor = `${category.color}30`;
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">What I Work With</p>
          <h2 className="section-title mb-4">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            From multi-agent AI orchestration to cloud deployments — the full stack of tools I use to ship
            production systems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} cardIndex={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 text-xs font-mono mt-10"
        >
          {'/* always learning · currently exploring Claude API + MCP + agent-to-agent patterns */'}
        </motion.p>
      </div>

      {/* Bg accents */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)' }} />
    </section>
  );
}
