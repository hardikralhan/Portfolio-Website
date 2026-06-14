import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiDownload } from 'react-icons/hi';
import me from '../me.png';
import resume from '../Resume.pdf';

const highlights = [
  { icon: '🤖', label: 'Multi-Agent AI', desc: 'A2A architectures with LangChain + LangGraph' },
  { icon: '🧠', label: 'RAG Pipelines', desc: 'Pinecone, PGVector, cosine similarity search' },
  { icon: '🚀', label: 'Production Systems', desc: 'FastAPI backends deployed on GCP with CI/CD' },
  { icon: '📊', label: 'LLM Observability', desc: 'LangSmith tracing, evaluation & monitoring' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">The Person Behind the Code</p>
          <h2 className="section-title mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="absolute -inset-3 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #10b981, #7c3aed)',
                  animation: 'borderSpin 6s linear infinite',
                  opacity: 0.6,
                }} />
              {/* Inner ring */}
              <div className="absolute -inset-1 rounded-full bg-dark" />
              {/* Photo */}
              <img
                src={me}
                alt="Hardik Ralhan"
                className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-2 border-dark z-10"
              />
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-accent/30 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-xs font-mono font-medium">Open to opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-gray-300 text-base leading-relaxed mb-5">
              Hi! I'm <span className="text-primary-light font-semibold">Hardik Ralhan</span> — an AI Engineer based in India with{' '}
              <span className="text-white font-semibold">4+ years</span> of experience building production GenAI and multi-agent systems.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              I specialize in designing <span className="text-secondary">agent-to-agent (A2A) architectures</span> using LangChain +
              LangGraph ReAct agents — tool-using agents connected to live databases through MCP, with persistent memory and prompt
              caching. On the data side, I build <span className="text-accent">RAG pipelines</span> (chunking, retrieval, vector search)
              on Pinecone and PGVector, monitored through LangSmith.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              I ship end to end: FastAPI backends, Docker deployments on GCP with CI/CD, used daily by 50+ clients. I communicate directly
              with business stakeholders and have cut manual workflows by up to{' '}
              <span className="text-accent font-semibold">70%</span> across 10+ projects.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map(({ icon, label, desc }) => (
                <div key={label} className="flex gap-3 p-3 rounded-xl"
                  style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="text-white text-sm font-semibold">{label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={resume}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-sm transition-all duration-300 glow-purple"
              >
                <HiDownload className="text-base" />
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/hardikralhan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-white/10 text-gray-300 hover:text-white rounded-lg text-sm transition-all duration-300"
              >
                <AiFillLinkedin className="text-base" />
                LinkedIn
              </a>
              <a
                href="https://github.com/hardikralhan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-white/10 text-gray-300 hover:text-white rounded-lg text-sm transition-all duration-300"
              >
                <AiFillGithub className="text-base" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bg accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }} />
    </section>
  );
}
