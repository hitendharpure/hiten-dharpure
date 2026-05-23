export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 shrink-0 gap-6 pt-12 md:pt-0 lg:h-[400px]" id="about">
      {/* Left Side */}
      <div className="flex flex-col justify-center gap-4 md:pl-4">
        <div className="space-y-1">
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white mb-2 md:mb-0">
            Hiten <br className="hidden md:block" />Dharpure
          </h1>
          <p className="text-wonder-blue text-lg md:text-2xl font-semibold tracking-wide">
            Innovator, Developer
          </p>
        </div>
        <p className="text-gray-400 text-sm max-w-sm mt-2 md:mt-0 leading-relaxed">
          By specializing in robotics and AI, I bridge the gap between code and physical hardware, creating record-breaking solutions like the world's smallest AI weather station and the HastaVaani sign language app. Driven by 800+ STEM certifications and a passion for precision, I turn complex engineering challenges into impactful, real-world tools.
        </p>
      </div>

      {/* Right Side */}
      <div className="relative rounded-3xl bg-slate-900/45 backdrop-blur-md overflow-hidden border border-slate-800/60 group min-h-[300px] mt-6 md:mt-0 w-full max-w-[350px] mx-auto md:ml-auto md:mr-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-wonder-blue/20"></div>
        <div className="absolute bottom-8 right-8 w-64 h-64 bg-wonder-green/10 blur-[80px] rounded-full"></div>
        <div className="flex items-center justify-center h-full relative z-10 w-full p-6">
          <div className="w-full max-w-[290px] aspect-[3/4] bg-slate-800 border-2 border-slate-700 rounded-2xl overflow-hidden flex items-center justify-center mx-auto shadow-2xl relative group">
            <img src="./image.JPG" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Hiten Dharpure" fetchPriority="high" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}
