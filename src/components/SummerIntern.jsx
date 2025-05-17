import React from 'react';
import { Calendar, Users, Award, Briefcase } from 'lucide-react';

const SummerIntern = () => {
  return (
    <section id="summerintern" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#070054] mb-4">Summer Internship Program</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gain real-world experience through our comprehensive summer internship program designed for undergraduate students.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Calendar className="w-10 h-10 text-[#070054] mb-4" />
            <h3 className="text-xl font-semibold mb-2">2 Months Duration</h3>
            <p className="text-gray-600">Intensive learning and hands-on experience</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <Users className="w-10 h-10 text-[#070054] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
            <p className="text-gray-600">1-on-1 guidance from industry experts</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <Award className="w-10 h-10 text-[#070054] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p className="text-gray-600">Industry-recognized certification</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <Briefcase className="w-10 h-10 text-[#070054] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Job Ready</h3>
            <p className="text-gray-600">Practical skills for employment</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#070054] text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Applications Open for Summer 2025</h3>
          <p className="text-lg mb-6">Limited seats available. Apply now to secure your spot!</p>
          <button className="bg-white text-[#070054] px-8 py-3 rounded-lg font-semibold hover:bg-[#d9d9d9] transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SummerIntern;
