import { aboutData } from "@/data/about-data";

export default function TeamSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The passionate people behind AccountAX
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.team.map((member) => (
            <div 
              key={member.id} 
              className="text-center group"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              
              <p className="text-blue-600 font-medium mb-3">
                {member.position}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-blue-50 p-8 rounded-2xl inline-block">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Join Our Team
            </h3>
            <p className="text-gray-600 mb-4">
              We're always looking for talented individuals to join our mission.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}