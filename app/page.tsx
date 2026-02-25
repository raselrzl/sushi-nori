"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      
      {/* Background Image Fallback */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/vedio.mp4" type="video/mp4" />
        {/* Fallback content will be the image underneath */}
      </video>

      {/* Gradient fade overlay */}
      <div className="pointer-events-none absolute inset-0 
        bg-[radial-gradient(circle_at_center,transparent_50%,black_90%)]">
      </div>
    </div>
  );
}