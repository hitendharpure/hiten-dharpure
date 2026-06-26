import { motion } from 'motion/react';
import { ArrowLeft, FileText, Bot, CloudRain, Users, BookOpen, Music } from 'lucide-react';

interface AllMediaPageProps {
  onViewChange: (view: any) => void;
  onBack: () => void;
}

export default function AllMediaPage({ onViewChange, onBack }: AllMediaPageProps) {
  const mediaCategories = [
    {
      id: 'pdf',
      title: 'View all in PDF',
      icon: <FileText className="w-5 h-5 text-lotus-pink" />,
      type: 'link',
      href: './mediacoverage.pdf'
    },
    {
      id: 'robot-arm-media',
      title: 'Smallest Robot Arm',
      icon: <Bot className="w-5 h-5 text-wonder-green" />,
      type: 'route'
    },
    {
      id: 'weather-media',
      title: 'Smallest Weather Station',
      icon: <CloudRain className="w-5 h-5 text-blue-400" />,
      type: 'route'
    },
    {
      id: 'robot-media',
      title: 'Synchronized Dance Performance',
      icon: <Music className="w-5 h-5 text-purple-400" />,
      type: 'route'
    },
    {
      id: 'gpai-media',
      title: 'GPAI Summit',
      icon: <Users className="w-5 h-5 text-yellow-400" />,
      type: 'route'
    },
    {
      id: 'ibr-media',
      title: 'India Book of Records',
      icon: <BookOpen className="w-5 h-5 text-orange-400" />,
      type: 'route'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col gap-8 w-full max-w-3xl mx-auto pt-4 md:pt-8"
    >
      <div className="flex flex-col gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-wonder-green transition-colors cursor-pointer self-start group focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
          Media Coverage Hub
        </h1>
        <p className="text-gray-400 text-sm">Select a project to view its specific media coverage, or view the comprehensive PDF.</p>
      </div>

      <div className="flex flex-col gap-4">
        {mediaCategories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
          >
            {cat.type === 'link' ? (
              <a
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between bg-slate-900/40 backdrop-blur-sm border border-slate-800/65 rounded-xl p-5 hover:bg-slate-800/60 hover:border-lotus-pink/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-lotus-pink/30 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-200 group-hover:text-white transition-colors">{cat.title}</h3>
                </div>
                <span className="text-xs font-bold text-lotus-pink px-3 py-1.5 rounded bg-lotus-pink/10 border border-lotus-pink/20">
                  Open PDF ➔
                </span>
              </a>
            ) : (
              <button
                onClick={() => onViewChange(cat.id)}
                className="w-full flex items-center justify-between bg-slate-900/40 backdrop-blur-sm border border-slate-800/65 rounded-xl p-5 hover:bg-slate-800/60 hover:border-wonder-green/50 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-wonder-green/30 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-200 group-hover:text-white transition-colors">{cat.title}</h3>
                </div>
                <span className="text-xs font-bold text-wonder-green px-3 py-1.5 rounded bg-wonder-green/10 border border-wonder-green/20 whitespace-nowrap">
                  View Articles ➔
                </span>
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
