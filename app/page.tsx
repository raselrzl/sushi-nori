import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      
      {/* Image */}
      <Image
        src="/hero.png"
        alt="Hero"
        width={900}
        height={600}
        priority
        className="object-contain"
      />

      {/* Gradient fade overlay */}
      <div className="pointer-events-none absolute inset-0 
        bg-[radial-gradient(circle_at_center,transparent_50%,black_90%)]">
      </div>
    </div>
  );
}