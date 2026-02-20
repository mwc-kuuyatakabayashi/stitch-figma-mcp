import Link from "next/link";

const newsItems = [
  {
    date: "2023.10.26",
    category: "NEWS",
    title: "新オフィス移転のお知らせ",
  },
  {
    date: "2023.10.15",
    category: "EVENT",
    title: "デジタルマーケティングセミナー開催",
  },
  {
    date: "2023.10.01",
    category: "RELEASE",
    title: "新サービス「DXコンサルティング」を開始",
  },
];

export default function LatestNews() {
  return (
    <section id="news" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333] text-center mb-16">
          最新情報
        </h2>
        <div className="space-y-6">
          {newsItems.map((item) => (
            <Link
              key={item.title}
              href="#"
              className="flex flex-col sm:flex-row sm:items-center gap-4 py-6 border-b border-gray-200 hover:bg-white/50 transition-colors rounded-lg px-4 -mx-4"
            >
              <span className="text-[#666] text-sm w-24 shrink-0">
                {item.date}
              </span>
              <span className="text-[#4A90E2] text-sm font-medium w-20 shrink-0">
                {item.category}
              </span>
              <span className="text-[#333] font-medium flex-1">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="#"
            className="text-[#4A90E2] font-medium hover:underline inline-flex items-center gap-1"
          >
            View More News
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
