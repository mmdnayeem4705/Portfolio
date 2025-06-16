
import {  BookOpen, Coffee, Heart } from 'lucide-react';

const stats = [
  { icon: <BookOpen />, label: 'Projects Completed', value: '50+' },
  { icon: <Coffee />, label: 'Cups of Coffee', value: '1000+' },
  { icon: <Heart />, label: 'Happy Clients', value: '30+' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hello! I'm a passionate JAVA full-stack developer with a love for creating
              beautiful and functional web applications. With over 5 years of experience
              in the field, I've had the opportunity to work on various exciting projects
              and collaborate with talented people.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey in web development started when I built my first website
              in college. Since then, I've been constantly learning and improving
              my skills to stay up-to-date with the latest technologies and best practices.
            </p>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl text-white">
              <p className="text-lg font-medium">
                "I believe in writing clean, maintainable code and creating intuitive
                user experiences that make a difference."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="About Me"
                className="rounded-lg shadow-xl animate-fade-in"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
          </div>

          <div className="lg:col-span-2 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-block p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}