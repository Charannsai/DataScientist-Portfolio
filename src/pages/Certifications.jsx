import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const certifications = [
  {
    title: "CMMI V3.0 Practitioner",
    issuer: "CUNIX Infotech",
    date: "March 2024",
    score: "96%",
    badge: "🏆",
    details: {
      description: "Advanced certification in CMMI V3.0 implementation and assessment methodologies",
      skills: [
        "Process Assessment",
        "Quality Management",
        "Performance Optimization",
        "Risk Management"
      ],
      achievements: [
        "Highest score in the batch",
        "Completed practical implementation project",
        "Recognized for innovative process solutions"
      ],
      validity: "3 years",
      accreditation: "Internationally recognized certification",
      externalLink: "https://www.cunixinfotech.com/certifications"
    }
  },
  {
    title: "Google Cloud - ML Engineer",
    issuer: "Google Cloud Platform",
    date: "July 2022",
    badge: "☁️",
    details: {
      description: "Professional certification for machine learning engineering on Google Cloud Platform",
      skills: [
        "ML Model Development",
        "Cloud Infrastructure",
        "Data Pipeline Design",
        "Model Deployment"
      ],
      achievements: [
        "Completed all advanced modules",
        "Built production-ready ML solutions",
        "Implemented automated ML pipelines"
      ],
      validity: "2 years",
      accreditation: "Google Professional Certification",
      externalLink: "https://cloud.google.com/certification/machine-learning-engineer"
    }
  },
  {
    title: "Professional Scrum Master",
    issuer: "Scrum.org",
    date: "2023",
    badge: "📊",
    details: {
      description: "Professional certification in Scrum methodology and agile project management",
      skills: [
        "Agile Project Management",
        "Team Leadership",
        "Sprint Planning",
        "Stakeholder Management"
      ],
      achievements: [
        "98% score in assessment",
        "Successfully led multiple Scrum teams",
        "Implemented Scrum in 5+ projects"
      ],
      validity: "Lifetime",
      accreditation: "Scrum.org Official Certification",
      externalLink: "https://www.scrum.org/professional-scrum-certifications"
    }
  },
  {
    title: "ITIL V3 Foundation",
    issuer: "EXIN, Netherlands",
    date: "2022",
    badge: "🔧",
    details: {
      description: "Foundation level certification in IT Service Management framework",
      skills: [
        "Service Strategy",
        "Service Design",
        "Service Transition",
        "Service Operation"
      ],
      achievements: [
        "Completed with distinction",
        "Practical implementation experience",
        "Applied ITIL in real projects"
      ],
      validity: "Lifetime",
      accreditation: "EXIN International Certification",
      externalLink: "https://www.exin.com/certifications"
    }
  }
];

const awards = [
  {
    title: "IGU Kailasam Memorial Award",
    category: "Lifetime Achievement",
    year: "2022",
    description: "Recognition for contributions to geophysical research",
    details: {
      significance: "Highest honor in Indian geophysical research community",
      criteria: [
        "Outstanding research contributions",
        "Innovation in methodology",
        "Impact on industry practices"
      ],
      impact: [
        "Advanced geophysical research methodologies",
        "Mentored next generation researchers",
        "Contributed to national research policies"
      ],
      recognition: "National level acknowledgment of research excellence",
      externalLink: "https://www.igu.in/awards"
    }
  },
  {
    title: "TOP 100 Global Educational Leaders",
    organization: "Mc. Stem Eduversity, India",
    year: "2023",
    description: "Recognition for educational leadership",
    details: {
      significance: "Global recognition for innovation in education",
      criteria: [
        "Educational innovation",
        "Student impact",
        "Industry collaboration",
        "Research contributions"
      ],
      impact: [
        "Transformed educational practices",
        "Enhanced industry-academia partnership",
        "Improved student outcomes"
      ],
      recognition: "International acknowledgment of educational excellence",
      externalLink: "https://www.mcstem.edu/awards"
    }
  }
];

function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [selectedAward, setSelectedAward] = useState(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Certifications & Awards</h1>
        <p className="text-gray-400">Professional achievements and recognition</p>
      </motion.div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Professional Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid-card"
              onClick={() => setSelectedCertification(cert)}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{cert.badge}</span>
                <div>
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-400">{cert.date}</p>
                {cert.score && (
                  <p className="text-green-400 font-semibold mt-2">Score: {cert.score}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid-card"
              onClick={() => setSelectedAward(award)}
            >
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <p className="text-gray-400 mb-2">{award.category || award.organization}</p>
              <p className="text-gray-300">{award.description}</p>
              <p className="text-gray-400 mt-4">Year: {award.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certification Modal */}
      <Modal
        isOpen={!!selectedCertification}
        onClose={() => setSelectedCertification(null)}
        title={selectedCertification?.title}
        externalLink={selectedCertification?.details.externalLink}
      >
        {selectedCertification && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">{selectedCertification.issuer}</p>
              <p className="text-gray-400">{selectedCertification.date}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Description</h4>
              <p className="text-gray-300">{selectedCertification.details.description}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Key Skills</h4>
              <ul className="list-disc list-inside text-gray-300">
                {selectedCertification.details.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Achievements</h4>
              <ul className="list-disc list-inside text-gray-300">
                {selectedCertification.details.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">Validity</h4>
                <p className="text-gray-300">{selectedCertification.details.validity}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Accreditation</h4>
                <p className="text-gray-300">{selectedCertification.details.accreditation}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Award Modal */}
      <Modal
        isOpen={!!selectedAward}
        onClose={() => setSelectedAward(null)}
        title={selectedAward?.title}
        externalLink={selectedAward?.details.externalLink}
      >
        {selectedAward && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-400">
                {selectedAward.category || selectedAward.organization}
              </p>
              <p className="text-gray-400">Year: {selectedAward.year}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Significance</h4>
              <p className="text-gray-300">{selectedAward.details.significance}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Award Criteria</h4>
              <ul className="list-disc list-inside text-gray-300">
                {selectedAward.details.criteria.map((criterion, index) => (
                  <li key={index}>{criterion}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Impact</h4>
              <ul className="list-disc list-inside text-gray-300">
                {selectedAward.details.impact.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Recognition</h4>
              <p className="text-gray-300">{selectedAward.details.recognition}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Certifications;