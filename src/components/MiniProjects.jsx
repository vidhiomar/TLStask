import React, { useState } from 'react';
import { Code2, FileCode, Cpu } from 'lucide-react';

const projects = {
  web: [
    { title: 'Responsive Portfolio', tech: 'HTML/CSS' },
    { title: 'Task Manager', tech: 'JavaScript' },
    { title: 'Weather Dashboard', tech: 'React.js' }
  ],
  programming: [
    { title: 'Data Analysis Tool', tech: 'Python' },
    { title: 'Student Management System', tech: 'Java' },
    { title: 'Inventory System', tech: 'Java' }
  ],
  fullstack: [
    { title: 'Blog Platform', tech: 'MERN Stack' },
    { title: 'E-commerce Site', tech: 'React + Node.js' },
    { title: 'Social Media App', tech: 'React + Firebase' }
  ]
};

const MiniProjects = () => {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <section id="miniprojects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#070054] mb-4">Mini Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Build your portfolio with hands-on projects across different technologies.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <TabButton 
              icon={<Code2 className="w-5 h-5" />} 
              label="Web Development" 
              active={activeTab === 'web'} 
              onClick={() => setActiveTab('web')} 
            />
            <TabButton 
              icon={<FileCode className="w-5 h-5" />} 
              label="Programming" 
              active={activeTab === 'programming'} 
              onClick={() => setActiveTab('programming')} 
            />
            <TabButton 
              icon={<Cpu className="w-5 h-5" />} 
              label="Full Stack" 
              active={activeTab === 'fullstack'} 
              onClick={() => setActiveTab('fullstack')} 
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab].map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">Technology: {project.tech}</p>
              <button className="text-[#070054] font-semibold hover:text-opacity-80 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TabButton = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
      active ? 'bg-[#070054] text-white' : 'text-gray-600 hover:text-[#070054]'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default MiniProjects;
