import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const projects = [
  {
    title: "Predictive Analytics for Server Infrastructure",
    client: "GE",
    description: "Developed time-series prediction system for AWS infrastructure, reducing downtime by 45%",
    technologies: ["Python", "Machine Learning", "AWS", "Time Series Analysis"],
    impact: "45% reduction in server failures",
    details: {
      challenge: "High server downtime causing significant business impact",
      solution: "Implemented advanced time-series prediction models using LSTM networks",
      methodology: [
        "Data collection from AWS CloudWatch",
        "Feature engineering and preprocessing",
        "Model development and validation",
        "Real-time prediction system deployment"
      ],
      results: [
        "45% reduction in unexpected server failures",
        "Cost savings of approximately $2M annually",
        "Improved resource allocation efficiency"
      ],
      externalLink: "https://aws.amazon.com/solutions/case-studies/"
    }
  },
  {
    title: "Automated Energy Analysis System",
    client: "NABL Lab",
    description: "Created automated report generation system, reducing processing time from 40 hours to 25 seconds",
    technologies: ["Python", "Automation", "Data Analysis"],
    impact: "99.9% time reduction in processing",
    details: {
      challenge: "Manual report generation taking excessive time and prone to errors",
      solution: "Developed automated system using Python and ML algorithms",
      methodology: [
        "Process analysis and optimization",
        "Automated data extraction and validation",
        "Report template generation",
        "Quality assurance system"
      ],
      results: [
        "Processing time reduced from 40 hours to 25 seconds",
        "100% accuracy in report generation",
        "Standardized reporting format"
      ],
      externalLink: "https://www.nabl-india.org/"
    }
  },
  {
    title: "Deep GRULS Architecture",
    client: "Research",
    description: "Developed architecture for smart power consumption prediction",
    technologies: ["Deep Learning", "Python", "Energy Analytics"],
    impact: "Published in Springer",
    details: {
      challenge: "Accurate prediction of power consumption patterns",
      solution: "Novel deep learning architecture combining GRU and LSM",
      methodology: [
        "Architecture design and implementation",
        "Model training and optimization",
        "Performance comparison with existing solutions",
        "Real-world validation"
      ],
      results: [
        "Published in Springer journal",
        "15% improvement over existing methods",
        "Adopted by 3 major energy companies"
      ],
      externalLink: "https://link.springer.com/"
    }
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-gray-400">Notable projects and achievements</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="grid-card"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">Client: {project.client}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="mb-4">
              <p className="text-green-400 font-semibold">{project.impact}</p>
            </div>
            <div className="flex flex-wrap gap-2  rounded-full p-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 dark:bg-white/5 bg-gray-400/30  rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        externalLink={selectedProject?.details.externalLink}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Challenge</h4>
              <p className="text-secondary mb-2">
                {selectedProject.details.challenge}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Solution</h4>
              <p className="text-gray-800 dark:text-gray-300">{selectedProject.details.solution}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Methodology</h4>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
                {selectedProject.details.methodology.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Results</h4>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
                {selectedProject.details.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 dark:bg-white/5 bg-gray-400/30 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Projects;