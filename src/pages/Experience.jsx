import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const experiences = [
  {
    role: "Independent Consultant",
    period: "2021 - Present",
    description: "Leading data science initiatives and providing strategic consulting services in AI/ML implementation.",
    highlights: [
      "Trained US students in Emerging Technologies",
      "CMMI Process Implementation",
      "Quality & Test Management"
    ],
    details: {
      responsibilities: [
        "Developing and implementing AI/ML strategies for clients",
        "Conducting training sessions on emerging technologies",
        "Providing technical consultation for CMMI implementation",
        "Establishing quality management frameworks"
      ],
      achievements: [
        "Successfully trained 200+ US students in AI/ML",
        "Implemented CMMI processes in 5 organizations",
        "Reduced testing cycle time by 40% through automation"
      ],
      technologies: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Docker",
        "Kubernetes"
      ],
      impact: "Improved operational efficiency by 35% across client projects",
      externalLink: "https://www.linkedin.com/in/dvramana"
    }
  },
  {
    role: "Professor of Practice",
    company: "Institute of Aeronautical Engineering",
    period: "2023 - 2024",
    description: "Teaching advanced concepts in ML, AI, and Data Analytics while mentoring future data scientists.",
    highlights: [
      "Curriculum Development",
      "Student Mentoring",
      "Research Guidance"
    ],
    details: {
      responsibilities: [
        "Designing and delivering advanced ML/AI courses",
        "Mentoring students in research projects",
        "Developing industry-aligned curriculum",
        "Establishing industry collaborations"
      ],
      achievements: [
        "Developed 3 new courses in AI/ML",
        "Guided 15+ research projects",
        "Published 5 papers with students"
      ],
      technologies: [
        "Python",
        "R",
        "Deep Learning",
        "Computer Vision",
        "NLP"
      ],
      impact: "90% placement rate for mentored students",
      externalLink: "https://www.iare.ac.in"
    }
  },
  {
    role: "Process Definition Consultant",
    company: "QAI India Ltd",
    period: "2022 - 2023",
    description: "Led process improvement initiatives and quality management systems implementation.",
    highlights: [
      "CMMI Implementation",
      "Process Optimization",
      "Quality Frameworks"
    ],
    details: {
      responsibilities: [
        "Defining and implementing CMMI processes",
        "Conducting process assessments",
        "Training teams on quality frameworks",
        "Establishing measurement systems"
      ],
      achievements: [
        "Successfully implemented CMMI Level 3",
        "Reduced process overhead by 25%",
        "Trained 300+ professionals"
      ],
      technologies: [
        "JIRA",
        "Confluence",
        "Jenkins",
        "Quality Center"
      ],
      impact: "Improved process efficiency by 40%",
      externalLink: "https://www.qaiindia.com"
    }
  }
];

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Experience</h1>
        <p className="text-gray-400">Professional journey and roles</p>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="grid-card"
            onClick={() => setSelectedExperience(exp)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                {exp.company && (
                  <p className="text-gray-800 dark:text-gray-300">{exp.company}</p>
                )}
              </div>
              <span className="text-gray-5500">{exp.period}</span>
            </div>
            <p className="text-gray-800 dark:text-gray-300 mb-4">{exp.description}</p>
            <ul className="space-y-2">
              {exp.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.role}
        externalLink={selectedExperience?.details.externalLink}
      >
        {selectedExperience && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                {selectedExperience.company && (
                  <p className="text-lg text-gray-400">{selectedExperience.company}</p>
                )}
              </div>
              <span className="text-gray-500">{selectedExperience.period}</span>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Key Responsibilities</h4>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
                {selectedExperience.details.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Achievements</h4>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-300">
                {selectedExperience.details.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.details.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 bg-gray-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Impact</h4>
              <p className="text-gray-800 dark:text-gray-300">{selectedExperience.details.impact}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Experience;