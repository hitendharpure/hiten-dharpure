import { motion } from 'motion/react';
import { ArrowLeft, Play, Image } from 'lucide-react';

interface WeatherMediaPageProps {
  onBack: () => void;
}

const MediaCard = ({ item }: { item: any; key?: string }) => (
  <div className="flex flex-col gap-2.5 w-full">
    <div className="flex justify-between items-center px-1">
      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
        {item.label}
      </h4>
      {item.link && (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className={`text-[11px] font-bold px-2.5 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer z-20 flex items-center gap-1 ${item.linkText?.includes('YouTube') ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30' : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/30'}`}>
          {item.linkText || 'Link ➔'}
        </a>
      )}
    </div>
    <div
      className={`${item.aspect} w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-wonder-green/30 hover:shadow-xl transition-all duration-300 relative group`}
    >
      {item.type === 'video' ? (
        <video
          src={item.src}
          className="w-full h-full object-cover"
          controls
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={item.src}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          alt={item.label}
          loading="lazy"
        />
      )}
      {item.type !== 'video' && (
        <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 pointer-events-none z-10">
          <div className="flex justify-end">
            <span className="p-1 rounded bg-slate-900/80 border border-slate-800 text-wonder-green">
              <Image className="w-3 h-3" />
            </span>
          </div>
          <span className="text-white text-[10px] font-bold tracking-wider uppercase bg-slate-950/80 px-2 py-1 rounded border border-slate-800 self-start">
            {item.label}
          </span>
        </div>
      )}
    </div>
  </div>
);

export default function WeatherMediaPage({ onBack }: WeatherMediaPageProps) {
  const mediaItems: { type: 'video' | 'image'; src: string; label: string; aspect: string; link?: string; linkText?: string }[] = [
    {
      type: 'image',
      src: './1st-gwr/media/1.jpg',
      label: 'Lokmat - 8th December 2025',
      aspect: 'aspect-[3/4]',
    },
    {
      type: 'image',
      src: './1st-gwr/media/2.jpg',
      label: 'Dainik Bhaskar - 1st December 2025',
      aspect: 'aspect-[3/4]',
    },
    {
      type: 'image',
      src: './1st-gwr/media/3.jpg',
      label: 'NavBharat - 4th December 2025',
      aspect: 'aspect-[16/9]',
    },
    {
      type: 'video',
      src: './1st-gwr/media/News18 Marathi.mp4',
      label: 'News18 Marathi',
      aspect: 'aspect-[16/9]',
      link: 'https://news18marathi.com/technology/16-year-old-hiten-dharapure-has-built-the-worlds-smallest-ai-based-weather-station-video-local18-1556400.html',
      linkText: 'Article View ➔'
    }
  ];

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
          Back to Portfolio
        </button>

        <div className="flex items-center gap-2 text-wonder-green">
          <div className="w-2 h-2 rounded-full bg-wonder-green animate-pulse"></div>
          <h3 className="text-xs font-bold uppercase tracking-widest">Guinness World Record Project</h3>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight max-w-2xl">
          Media Coverage of the Smallest Weather Station
        </h1>
      </div>

      {/* Main Pallet: Media Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-800/65 rounded-2xl p-6 md:p-8 flex flex-col gap-6 hover:scale-[1.005] hover:shadow-2xl hover:shadow-wonder-green/5 transition-all duration-300 relative overflow-hidden"
      >
        {/* Glow effects */}
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-wonder-green/5 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-wonder-blue/5 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
            <h2 className="text-lg font-bold text-white tracking-wide">Featured In...</h2>
            <span className="text-[10px] text-wonder-green font-mono uppercase tracking-widest px-2.5 py-1 bg-wonder-green/10 border border-wonder-green/20 rounded">
              Press & Media
            </span>
          </div>

          {/* Mobile Layout (Sequential) */}
          <div className="flex flex-col gap-6 w-full md:hidden">
            {mediaItems.length === 0 && (
              <div className="w-full text-center py-12 border border-dashed border-slate-800 rounded-xl">
                <p className="text-sm text-gray-400">Media coming soon...</p>
              </div>
            )}
            {mediaItems.map((item, index) => (
              <MediaCard key={`mobile-${index}`} item={item} />
            ))}
          </div>

          {/* Desktop Layout (Masonry) */}
          <div className="hidden md:flex flex-row gap-6 w-full">
            {mediaItems.length === 0 && (
              <div className="w-full text-center py-12 border border-dashed border-slate-800 rounded-xl">
                <p className="text-sm text-gray-400">Media coming soon...</p>
              </div>
            )}
            {mediaItems.length > 0 && [0, 1].map((colIndex) => (
              <div key={`desktop-col-${colIndex}`} className="flex flex-col gap-6 w-1/2">
                {mediaItems.filter((_, i) => i % 2 === colIndex).map((item, originalIndex) => (
                  <MediaCard key={`desktop-${colIndex}-${originalIndex}`} item={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
