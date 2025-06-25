import { aboutData } from "@/data/about-data";

export default function AboutContent() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.mission}
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                {aboutData.vision}
              </p>
            </div>
          </div>
          
          {/* Story */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              {aboutData.story}
            </p>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
              <p className="text-blue-800 font-medium">
                "We believe that great software should empower people, not complicate their lives."
              </p>
              <p className="text-blue-600 text-sm mt-2">- AccountAX Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}