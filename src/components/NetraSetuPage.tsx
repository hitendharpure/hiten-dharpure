import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface NetraSetuPageProps {
  onBack: () => void;
}

export default function NetraSetuPage({ onBack }: NetraSetuPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col gap-8 w-full max-w-4xl mx-auto pt-4 md:pt-8"
    >
      {/* Header section with back button */}
      <div className="flex flex-col gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-wonder-green transition-colors cursor-pointer self-start group focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-black text-gray-100 tracking-tight">
            Netra Setu
          </h1>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
            An autonomous, offline embedded system bridging the visual world with real-time tactile reading. Built on the Arduino Uno Q, Netra-Setu leverages a Linux AI vision core for OCR and custom C++ firmware to dynamically multiplex 6 micro-servos, actuating a 3D-printed Braille cell for instant, private accessibility without cloud connectivity.
          </p>
          <a
            href="https://github.com/hitendharpure/netra-setu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded bg-wonder-green/20 text-wonder-green hover:bg-wonder-green/30 border border-wonder-green/30 transition-colors w-fit"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub Repository
          </a>
        </div>
      </div>

      {/* Project Images */}
      <div className="flex flex-col gap-6 w-full">
        {/* Complete Project */}
        <div className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-4 overflow-hidden">
          <p className="text-xs font-bold uppercase tracking-widest text-wonder-green mb-3">Complete Project</p>
          <div className="w-full rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/20 group relative">
            <img
              src="./project/netrasetu/IMG_5676.jpg"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Netra Setu — Complete Project"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
              <span className="text-white text-[9px] font-semibold tracking-wider uppercase bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800">Complete Project</span>
            </div>
          </div>
        </div>

        {/* Project Demos */}
        <div className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-4 overflow-hidden">
          <p className="text-xs font-bold uppercase tracking-widest text-wonder-green mb-3">Project Demo</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/20 group relative">
              <img
                src="./project/netrasetu/IMG_5724.jpg"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Netra Setu — Demo 1"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                <span className="text-white text-[9px] font-semibold tracking-wider uppercase bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800">Demo 1</span>
              </div>
            </div>
            <div className="w-full rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/20 group relative">
              <img
                src="./project/netrasetu/IMG_5725.jpg"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Netra Setu — Demo 2"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                <span className="text-white text-[9px] font-semibold tracking-wider uppercase bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800">Demo 2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-5 overflow-hidden">
          <div className="flex items-center gap-2 text-wonder-green mb-4">
            <div className="w-2 h-2 rounded-full bg-wonder-green"></div>
            <p className="text-xs font-bold uppercase tracking-widest">Achievements</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
            {/* 1. Text Info - Top on Mobile, Right Top on Laptop */}
            <div className="order-1 sm:order-none sm:col-start-2 sm:row-start-1 flex flex-col gap-3">
              <span className="text-xs bg-wonder-green/10 text-wonder-green px-2 py-1 rounded border border-wonder-green/30 font-bold w-fit">🏆 Winner</span>
              <h4 className="text-lg font-bold text-gray-100 leading-snug">Arduino Physical AI Challenge India 2026</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Organized by <span className="text-gray-300 font-medium">Robu.in</span> and <span className="text-gray-300 font-medium">Arduino</span>
              </p>
              <a
                href="https://robu.in/arduino-physical-ai-challenge-india-2026/#special:~:text=Netra%2DSetu%3A%20AI%20OCR%20%26%20Tactile%20Braille%20Translation%20Matrix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded bg-wonder-green/20 text-wonder-green hover:bg-wonder-green/30 border border-wonder-green/30 transition-colors w-fit mt-1"
              >
                View on Robu.in ➔
              </a>
            </div>

            {/* 2. Main Winner Image - 2nd on Mobile (after info), Left Column spanning on Laptop */}
            <div className="order-2 sm:order-none sm:col-start-1 sm:row-start-1 sm:row-span-2 w-full rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/20 group relative">
              <img
                src="./project/netrasetu/IMG_8116.jpg"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Winner — Arduino Physical AI Challenge India 2026"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                <span className="text-white text-[9px] font-semibold tracking-wider uppercase bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800">Winner</span>
              </div>
            </div>

            {/* 3. Winner Kits Image - 3rd on Mobile (after winner image), Right Bottom on Laptop */}
            <div className="order-3 sm:order-none sm:col-start-2 sm:row-start-2 w-full rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/20 group relative">
              <img
                src="./project/netrasetu/Robu.in - Winner Kits.jpg"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Robu.in Winner Kits"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                <span className="text-white text-[9px] font-semibold tracking-wider uppercase bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800">Winner Kits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

