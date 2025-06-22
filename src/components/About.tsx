import React from 'react';

// Dynamically import all SVGs (except Java, which we'll hardcode as the first)
const svgImages = Object.values(
  import.meta.glob('../img/*.svg', { eager: true, import: 'default' })
) as string[];

// Prepend the Java icon URL manually
const images = [
  'https://icon-library.com/images/icon-java/icon-java-13.jpg', // Java icon
  ...svgImages,
];

// Tool images
const toolImages = [
    'https://ubuntu.com/wp-content/uploads/c9f4/visualstudio_code-card.png',
    'https://bgasparotto.com/wp-content/uploads/2017/12/spring-logo.png', 
    'https://miro.medium.com/v2/resize:fit:540/1*nNTk-j2uaKhxyj3GXsYNdg.png',
    'https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3032239.png', 
    'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2021/04/075c8694.jpeg?q=70&fit=contain&w=1200&h=628&dpr=1',
    'https://images.sftcdn.net/images/t_app-icon-m/p/19f01b02-2ac5-41c5-a8e9-7caa6de36b3b/3785906630/weka-weka.png',
    'https://cdn.prod.website-files.com/5f10ed4c0ebf7221fb5661a5/5f2f630735aafe2300802edd_git-logo.png',
    'https://static-00.iconduck.com/assets.00/xampp-icon-507x512-8c1bi2hr.png',
    'https://images.icon-icons.com/1381/PNG/512/mysqlworkbench_93532.png',
    'https://zmartests.com/fr/wp-content/uploads/2024/07/microsoft-office-1024x683.png'// placeholders
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading: About Me */}
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hello! I'm a passionate JAVA full-stack developer with a love for creating
              beautiful and functional web applications. With over 5 years of experience,
              I've had the opportunity to work on various exciting projects and collaborate with talented people.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I’m a passionate and driven Computer Science Engineering student with a deep enthusiasm for frontend development, Python programming, and cutting-edge technologies such as blockchain and Web3.
            </p>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl text-white">
              <p className="text-lg font-medium">
                "I believe in hard work — it will pay off in the end. My goal is to create innovative solutions that make a difference in people's lives."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/lookism_photoism.jpeg"
                alt="About Me"
                className="rounded-lg shadow-xl animate-fade-in"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
          </div>
        </div>

        {/* My Programming Skills Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Programming Skills
            </span>
          </h2>

          {/* Skill Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-center mb-12">
            {images.map((src, index) => (
              <div
                key={index}
                className="w-20 h-20 bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={`Skill ${index + 1}`}
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Tools I Know Heading */}
          <h2 className="text-4xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tools I Know
            </span>
          </h2>

          {/* Tool Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
            {toolImages.map((src, index) => (
              <div
                key={index}
                className="w-24 h-24 bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                {src ? (
                  <img
                    src={src}
                    alt={`Tool ${index + 1}`}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <span className="text-gray-400">Empty</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
