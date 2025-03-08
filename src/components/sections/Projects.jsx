import React from "react";
import ReviewOnScroll from "../Reviewonscroll"; // Fixed import
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all duration-200">
              <h3 className="text-xl font-bold mb-4">Project 1</h3>
              <p className="text-gray-400 mb-4">Description of project 1...</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "Node", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all duration-200">
              <h3 className="text-xl font-bold mb-4">Project 2</h3>
              <p className="text-gray-400 mb-4">Description of project 2...</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Next.js", "Express", "PostgreSQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all duration-200">
              <h3 className="text-xl font-bold mb-4">Project 3</h3>
              <p className="text-gray-400 mb-4">Description of project 3...</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Vue.js", "Django", "SQLite"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all duration-200">
              <h3 className="text-xl font-bold mb-4">Project 4</h3>
              <p className="text-gray-400 mb-4">Description of project 4...</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Angular", "Spring Boot", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all duration-200">
              <h3 className="text-xl font-bold mb-4">Project 5</h3>
              <p className="text-gray-400 mb-4">Description of project 5...</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Flutter", "Firebase", "GraphQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Projects;
