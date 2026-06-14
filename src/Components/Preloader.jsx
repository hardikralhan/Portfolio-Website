import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 8 + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-dark flex flex-col items-center justify-center z-50 select-none">
      {/* Outer ring */}
      <div className="relative flex items-center justify-center mb-8">
        <div className="preloader-ring-outer" />
        <div className="preloader-ring" />
        {/* Center initials */}
        <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.4)' }}>
          <span className="font-space font-bold text-primary-light text-xl tracking-wide">HR</span>
        </div>
      </div>

      {/* Name */}
      <h1 className="shimmer-text font-space font-bold text-3xl mb-1 tracking-wide">
        Hardik Ralhan
      </h1>
      <p className="text-gray-600 font-mono text-xs mb-8 tracking-widest uppercase">
        AI Engineer &amp; GenAI Builder
      </p>

      {/* Progress bar */}
      <div className="w-48 h-0.5 bg-dark-lighter rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-200 ease-out"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
          }}
        />
      </div>
    </div>
  );
}
