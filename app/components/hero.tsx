"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hem" className="bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-4xl md:text-5xl mb-6 text-black leading-tight">
          En lantlig gårdsbutik<br className="hidden md:block" />
          fylld av inspiration
        </h1>
        
        <div className="flex justify-center mb-8">
          <Image 
            src="/tant-gredelin-logo.png" 
            alt="Tant Gredelin" 
            width={800} 
            height={800} 
            className="h-48 w-auto" 
            priority 
          />
        </div>

        <div className="relative w-full flex justify-center    mb-8">
          <div className="w-full h-72 relative  md:h-64 rounded-xl overflow-hidden">
            <Image
              src="/gardsbutik.png"
              alt="Gårdsbutik interiör"
              fill
              className="object-cover z-0"
              sizes="(max-width: 1200px) 100vw, 800px"
              priority
            />
            <div className="absolute inset-0 z-10 bg-white/60 " />
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 py-8">
              <p className="text-xl text-black mb-4  text-center">
                Tant Gredelin är mer än en gårdsbutik – en levande mötesplats där
                landsbygdens charm möter lokal kvalitet, blommor, inredning och njutning.
              </p>
              <a 
                href="#produkter"
                className="inline-block bg-black text-white px-8 py-3 hover:bg-blush hover:text-blackpure transition-colors mt-2"
              >
                Utforska sortimentet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
