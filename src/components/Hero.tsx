import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Modern building"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A90E2] mb-6">
          戦略と技術で、デジタルの未来をデザインする。
        </h1>
        <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-12">
          We combine our unique expertise in strategy, creativity, and technology
          to deliver tailor-made solutions that exceed expectations and drive
          tangible results for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="#works"
            className="bg-[#4A90E2] text-white px-8 py-4 rounded font-medium hover:bg-[#3a7bc8] transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#service"
            className="border-2 border-[#4A90E2] text-white px-8 py-4 rounded font-medium hover:bg-[#4A90E2]/20 transition-colors"
          >
            Our Services
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
