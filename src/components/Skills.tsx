import React from 'react';
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  GitBranch,
  Cloud
} from 'lucide-react';

// ✅ Custom "Supply Chain" Icon Component (Placeholder)
const SupplyChainIcon = () => (
  <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-white">
    <img
      src="https://media.gettyimages.com/id/1310290654/vector/supply-chain-management-line-icon-outline-symbol-vector-illustration.jpg?s=1024x1024&w=gi&k=20&c=24RxRGBYu5Y7NB5tO38VZ566Look4hG8sPAN158iYic="
      alt="Supply Chain Icon"
      className="w-full h-full object-cover"
    />
  </div>
);


// Skill interface
interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

// Skills list
const skills: Skill[] = [
  { name: 'Frontend Development', icon: <Layout />, level: 90, category: 'Development' },
  { name: 'Backend Development', icon: <Server />, level: 85, category: 'Development' },
  { name: 'Database Management', icon: <Database />, level: 80, category: 'Development' },
  { name: 'Mobile Development', icon: <Smartphone />, level: 75, category: 'Development' },
  { name: 'Version Control', icon: <GitBranch />, level: 95, category: 'Tools' },
  { name: 'Cloud Services', icon: <Cloud />, level: 70, category: 'Tools' },
  { name: 'Blockchain Technology', icon: <SupplyChainIcon />, level: 85, category: 'Tools' },
  { name: 'Problem Solving', icon: <Code2 />, level: 90, category: 'Soft Skills' }
];

// Main component
export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-white dark:text-white">{skill.name}</h3>
              </div>
              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: '0%',
                    animation: 'growWidth 1.5s ease-out forwards',
                    animationDelay: `${index * 100 + 500}ms`,
                  }}
                />
                <style>{`
                  @keyframes growWidth {
                    from { width: 0% }
                    to { width: ${skill.level}% }
                  }
                `}</style>
              </div>
              <div className="mt-2 text-sm text-right text-gray-600 dark:text-gray-400">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
