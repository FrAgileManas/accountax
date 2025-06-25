import { aboutData } from "@/data/about-data";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About <span className="text-blue-600">Accountax</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with intelligent accounting solutions that drive growth and success.
          </p>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {aboutData.stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}