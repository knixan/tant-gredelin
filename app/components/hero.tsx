"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hem" className=" relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 text-center relative z-10">
        {/* Logo med glow */}
        <div className="flex justify-center mb-8 opacity-90 ">
          <Image 
            src="/tant-gredelin-logo.png" 
            alt="Tant Gredelin" 
            width={300} 
            height={300} 
            className="h-32 md:h-40 w-auto hover:scale-105 transition-transform duration-500" 
            priority 
          />
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-8 text-black  drop-shadow-lg">
          En lantlig gårdsbutik
          <br className="hidden lg:block" />
          <span className="text-4xl md:text-5xl lg:text-6xl block text-warmbrown font-normal mt-2">fylld av inspiration</span>
        </h1>

        {/* Hero-bild med förbättrad overlay */}
        <div className="relative w-full max-w-4xl mx-auto mb-12">
          <div className="w-full h-80 md:h-96 lg:h relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/gardsbutik.png"
              alt="Gårdsbutik interiör"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1200px) 100vw, 800px"
              priority
            />
            <div className="absolute inset-0 " />
            <div className="absolute inset-0 bg-gradient-x from-transparent via-white/20 to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 md:-bottom-8">
            <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-xl border border-white/50 max-w-md mx-auto">
              <p className="text-lg md:text-xl text-black/90 font-medium leading-relaxed">
                Tant Gredelin är mer än en gårdsbutik – en levande mötesplats där landsbygdens charm möter lokal kvalitet.
              </p>
              <a 
                href="#produkter"
                className="inline-block bg-black  text-white px-10 py-4 mt-4 rounded-xl hover:shadow-2xl hover:scale-105 hover:from-blush hover:to-warmbrown transition-all duration-300 font-semibold text-lg"
              >
                Utforska sortimentet →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
