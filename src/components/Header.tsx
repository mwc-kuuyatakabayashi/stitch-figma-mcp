import Link from "next/link";

const navLinks = [
  { href: "#service", label: "Service" },
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#news", label: "News" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#4A90E2]/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#4A90E2] flex items-center justify-center">
            <span className="text-white font-bold text-xl">Z</span>
          </div>
          <span className="text-[#333] font-bold text-xl">CODEPRO</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#333] hover:text-[#4A90E2] transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="bg-[#4A90E2] text-white px-6 py-2.5 rounded font-medium hover:bg-[#3a7bc8] transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
