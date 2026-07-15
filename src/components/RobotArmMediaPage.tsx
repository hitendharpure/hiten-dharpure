import { motion } from 'motion/react';
import { ArrowLeft, Play, Image } from 'lucide-react';

interface RobotArmMediaPageProps {
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

export default function RobotArmMediaPage({ onBack }: RobotArmMediaPageProps) {
  const mediaItems: { type: 'video' | 'image'; src: string; label: string; aspect: string; link?: string; linkText?: string }[] = [
    {
      type: 'image',
      src: './2nd-gwr-sra/media/toi-1.jpg',
      label: 'The Times of India - 13th July 2026 (Front Page)',
      aspect: 'aspect-[6/5]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/toi-2.jpg',
      label: 'The Times of India - 13th July 2026 (Next Page)',
      aspect: 'aspect-[1/2]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/hitavada.jpg',
      label: 'The Hitavada - 13th July 2026',
      aspect: 'aspect-[4/3]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/1-a.jpg',
      label: 'Lokmat - 29th June 2026',
      aspect: 'aspect-[3/4]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/1.jpg',
      label: 'Dainik Bhaskar - 25th June 2026',
      aspect: 'aspect-[3/4]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/2.jpg',
      label: 'Sakal - 25th June 2026',
      aspect: 'aspect-[4/9]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/lokmatsamachar-newpaper.jpg',
      label: 'Lokmat Samachar - 15th July 2026',
      aspect: 'aspect-[2/1]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/3.png',
      label: 'Maharashtra Times - 24th June 2026',
      aspect: 'aspect-[9/8]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/5.jpg',
      label: 'Vidarbha Ki Baat - 24th June 2026',
      aspect: 'aspect-[16/9]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/4.jpg',
      label: 'Nagpur Post - 24th June 2026',
      aspect: 'aspect-[16/9]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/7.jpg',
      label: 'Dainik Sinhvani Vrutta - 25th June 2026',
      aspect: 'aspect-[16/9]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/6.jpg',
      label: 'Dainik Lokvahini - 25th June 2026',
      aspect: 'aspect-[4/3]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/8.jpg',
      label: 'Insider News Today - 24th June 2026',
      aspect: 'aspect-[4/3]',
    },
    {
      type: 'video',
      src: './2nd-gwr-sra/media/nagpursamay-insta.mp4',
      label: 'Nagpur Samay - 2nd July 2026',
      aspect: 'aspect-[9/16]',
      link: 'https://www.instagram.com/reel/DaSoEbDoRvt/',
      linkText: 'IG Link ➔'
    },
    {
      type: 'video',
      src: './2nd-gwr-sra/media/ians.mp4',
      label: 'IANS - X',
      aspect: 'aspect-[9/16]',
      link: 'https://x.com/ians_india/status/2075496788312871320',
      linkText: 'X Link ➔'
    },
    {
      type: 'video',
      src: './2nd-gwr-sra/media/VBK Interview.mp4',
      label: 'VBK Interview',
      aspect: 'aspect-[16/9]',
      link: 'https://www.facebook.com/share/v/1DoWEZQk4b/',
      linkText: 'FB Link ➔'
    },
    {
      type: 'video',
      src: './2nd-gwr-sra/media/ddsahyadri-interview.mp4',
      label: 'DD Sahyadri - 1st July 2026',
      aspect: 'aspect-[16/9]',
      link: 'https://www.youtube.com/live/Lq56vHoohKk?si=d1n5-1_AxAxxQEB2&t=180',
      linkText: 'YT Link ➔'
    },
    {
      type: 'video',
      src: './2nd-gwr-sra/media/lokmat-interview.mp4',
      label: 'Lokmat Interview - 3rd July 2026',
      aspect: 'aspect-[16/9]',
      link: 'https://www.facebook.com/share/v/18qZ1Dr7AT/',
      linkText: 'FB Link ➔'
    },
    {
      type: 'video',
      src: './2nd-gwr-sra/media/Lokvahini-Interview.mp4',
      label: 'Lokvahini Interview',
      aspect: 'aspect-[16/9]',
      link: 'https://youtu.be/D589Rb-NzJE',
      linkText: 'YT Link ➔'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/indiatoday.png',
      label: 'India Today - Web',
      aspect: 'aspect-[16/9]',
      link: 'https://www.indiatoday.in/education-today/news/story/meet-17-year-old-hiten-dharpure-guinness-world-record-holder-for-worlds-smallest-robotic-arm-2946085-2026-07-12',
      linkText: 'Article ➔'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/toi-web.png',
      label: 'The Times of India - Web',
      aspect: 'aspect-[16/9]',
      link: 'https://timesofindia.indiatimes.com/city/nagpur/nagpur-teen-innovators-tiny-robotic-arm-earns-him-third-consecutive-guinness-world-record/articleshow/132351645.cms',
      linkText: 'Article ➔'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/ndtv.png',
      label: 'NDTV - Web',
      aspect: 'aspect-[16/9]',
      link: 'https://www.ndtv.com/education/meet-hiten-dharpure-17-year-old-behind-the-worlds-smallest-robotic-arm-11762928',
      linkText: 'Article ➔'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/ndtv-hindi.png',
      label: 'NDTV - Hindi (Web)',
      aspect: 'aspect-[16/9]',
      link: 'https://ndtv.in/education/hiten-dharpure-smallest-robotic-arm-half-size-finger-guinness-world-record-nagpur-11763054',
      linkText: 'Article ➔'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/gujaratsamachar.png',
      label: 'Gujarat Samachar - Web',
      aspect: 'aspect-[16/9]',
      link: 'https://www.gujaratsamachar.com/news/national/17-year-old-from-nagpur-does-what-no-one-else-can-do-gets-a-place-in-guinness-book-of-world-records-19014884885',
      linkText: 'Article ➔'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/Moneycontrol - web.png',
      label: 'Moneycontrol - Web',
      aspect: 'aspect-[16/9]',
      link: 'https://www.moneycontrol.com/education/a-17-year-old-from-nagpur-sets-a-guinness-world-record-for-creating-world-s-smallest-functional-robotic-arm-article-13971069.html',
      linkText: 'Article ➔'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/Jagran Josh - Web.png',
      label: 'Jagran Josh - Web',
      aspect: 'aspect-[16/9]',
      link: 'https://www.jagranjosh.com/general-knowledge/who-is-hiten-dharpure-1820010485-1',
      linkText: 'Article ➔'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/10.png',
      label: 'United News of india - Web',
      aspect: 'aspect-[16/9]',
      link: 'https://www.uniindia.com/nagpur-student-sets-guinness-world-record-with-world-s-smallest-robotic-arm/west/news/3886803.html',
      linkText: 'Article'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/9.png',
      label: 'DailyHunt - Web',
      aspect: 'aspect-[16/9]',
      link: 'https://m.dailyhunt.in/news/india/marathi/tarun+bharat+nagpur-epaper-tarnbhat/hiten+dharapurecha+jagatik+vikram-newsid-n717203342',
      linkText: 'Article'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/12.png',
      label: 'Tarun Bharat - Web',
      aspect: 'aspect-[16/9]',
      link: 'https://www.tarunbharat.net/Encyc/2026/6/24/hiten-dharpure-world-record.html',
      linkText: 'Article'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/11.png',
      label: 'The Live Nagpur - Web',
      aspect: 'aspect-[16/9]',
      link: 'https://thelivenagpur.com/2026/06/24/nagpur-student-hiten-dharpure-sets-guinness-world-record-for-worlds-smallest-robotic-arm/',
      linkText: 'Article'
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/13.jpg',
      label: 'Navarashtra - 28th June 2026',
      aspect: 'aspect-[1/1]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/14.jpg',
      label: 'Deshonnati - 28th June 2026',
      aspect: 'aspect-[9/21]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/15.jpg',
      label: 'Divya Watan - 28th June 2026',
      aspect: 'aspect-[3/4]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/16.jpg',
      label: 'Vidarbha Ki Baat - 28th June 2026',
      aspect: 'aspect-[9/16]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/17.jpg',
      label: 'School Poster - Standee',
      aspect: 'aspect-[1/2]',
    },
    {
      type: 'image',
      src: './2nd-gwr-sra/media/mahatimes-web.png',
      label: 'Maharashtra Times - Web',
      aspect: 'aspect-[16/9]',
      link: 'https://maharashtratimes.com/maharashtra/nagpur/17-year-old-hiten-dharpure-breaks-guinness-world-record-by-developing-the-smallest-robotic-arm/articleshow/132136468.cms',
      linkText: 'Article ➔'
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
          Media Coverage of the Smallest Robot Arm
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
              <p className="text-sm text-gray-400 w-full">Media coming soon...</p>
            )}
            {mediaItems.map((item, index) => (
              <MediaCard key={`mobile-${index}`} item={item} />
            ))}
          </div>

          {/* Desktop Layout (Masonry) */}
          <div className="hidden md:block columns-2 gap-6 w-full">
            {mediaItems.length === 0 && (
              <p className="text-sm text-gray-400 w-full">Media coming soon...</p>
            )}
            {mediaItems.map((item, index) => (
              <div key={`desktop-${index}`} className="break-inside-avoid mb-6">
                <MediaCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
