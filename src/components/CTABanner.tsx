import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#1a1a2e] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          あなたのビジネスの可能性を、デジタルの力で最大化しませんか？
        </h2>
        <p className="text-white/90 text-lg mb-12">
          プロフェッショナルなチームがあなたの挑戦を成功に導きます。
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="#"
            className="bg-[#4A90E2] text-white px-10 py-4 rounded font-medium hover:bg-[#3a7bc8] transition-colors"
          >
            Contact Us
          </Link>
          <a
            href="tel:03-XXXX-XXXX"
            className="text-white font-medium hover:underline"
          >
            03-XXXX-XXXX
          </a>
        </div>
      </div>
    </section>
  );
}
