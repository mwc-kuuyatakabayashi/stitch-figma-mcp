import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    category: "Web Design",
    title: "データ可視化ダッシュボード",
    description: "リアルタイムでビジネス指標を可視化するダッシュボードの設計・開発",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    category: "Branding",
    title: "Luxury Lifestyle ブランドリニューアル",
    description: "高級ライフスタイルブランドのビジュアルアイデンティティ刷新",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    category: "UI/UX Design",
    title: "オフィス管理アプリ",
    description: "リモートワーク時代のオフィススペース管理ソリューション",
  },
];

export default function ProjectExamples() {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333]">
            プロジェクト事例
          </h2>
          <Link
            href="#"
            className="text-[#4A90E2] font-medium hover:underline flex items-center gap-1"
          >
            View All Projects
            <span>→</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-[#4A90E2] text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-[#333] mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-[#666] text-sm">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
