const approaches = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Strategy",
    description:
      "ビジネス戦略の策定から実行まで、データドリブンなアプローチで成果を最大化します。",
    items: ["市場調査", "競合分析", "成長戦略", "KPI設計"],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Creative",
    description:
      "ブランドの本質を捉えたクリエイティブで、記憶に残る体験をデザインします。",
    items: ["ブランディング", "ビジュアルデザイン", "コンテンツ制作", "UX設計"],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Technology",
    description:
      "最新技術を駆使し、スケーラブルで堅牢なデジタルソリューションを構築します。",
    items: ["Web開発", "アプリ開発", "システム構築", "クラウド導入"],
  },
];

export default function DiverseApproaches() {
  return (
    <section id="service" className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] max-w-2xl">
            ビジネスの成長を加速させる多角的なアプローチ
          </h2>
          <p className="text-[#666] max-w-md lg:text-right">
            私たちはお客様のビジネスを深く理解し、その成長を最大化するための最適なソリューションを提供します。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach) => (
            <div
              key={approach.title}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-[#4A90E2]/10 text-[#4A90E2] flex items-center justify-center mb-6">
                {approach.icon}
              </div>
              <h3 className="text-xl font-bold text-[#333] mb-4">
                {approach.title}
              </h3>
              <p className="text-[#666] mb-6">{approach.description}</p>
              <ul className="space-y-2">
                {approach.items.map((item) => (
                  <li
                    key={item}
                    className="text-[#666] flex items-center gap-2 before:content-['•'] before:text-[#4A90E2]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
