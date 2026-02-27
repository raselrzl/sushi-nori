"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">

      {/* Responsive Full Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {/* Side Black Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

    </div>
  );
}