import React from "react";
import ReviewOnScroll from "../Reviewonscroll";

const About = () => {
  const frontendSkills = [
    "React.js",
    "React Native",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Firebase",
    "RESTful APIs",
    "GraphQL",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
        </div>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all duration-200">
          <p className="text-gray-300 text-lg mb-6">
            I am a passionate React developer with expertise in React.js and
            React Native, specializing in building full-scale applications and
            stunning web pages. With a keen eye for design and performance, I
            craft dynamic, responsive, and highly interactive user interfaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-200">
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-200">
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>
                    <strong>
                      Currently pursuing a BSc in Computer Software Engineering
                    </strong>
                    <br />
                    University of Engineering and Technology, Mardan
                  </li>
                  <li>
                    <strong>Relevant course work::</strong>
                    <br />
                    Data Structure Mobile Application Development Web
                    development Database{" "}
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="text-gray-300">Coming soon...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default About;
