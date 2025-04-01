import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const publications = [
  {
    title: "Deep GRULS Architecture for Smart Power Consumption Prediction",
    publisher: "Springer",
    year: "2023",
    type: "Research Paper",
    impact: "Novel approach to power consumption prediction",
    details: {
      abstract: "This paper presents a novel deep learning architecture combining Gated Recurrent Units (GRU) and Long Short-Term Memory (LSTM) networks for accurate power consumption prediction in smart grid systems.",
      methodology: [
        "Hybrid architecture development combining GRU and LSTM",
        "Feature engineering for power consumption data",
        "Model optimization and hyperparameter tuning",
        "Comparative analysis with existing approaches"
      ],
      results: [
        "15% improvement in prediction accuracy",
        "30% reduction in computational overhead",
        "Successfully deployed in 3 power distribution companies"
      ],
      citations: 12,
      keywords: [
        "Deep Learning",
        "Smart Grid",
        "Power Consumption",
        "Time Series Prediction",
        "Neural Networks"
      ],
      externalLink: "https://link.springer.com/article/smart-power-prediction"
    }
  },
  {
    title: "Applications of AI in Healthcare Systems",
    publisher: "International Conference on Healthcare Informatics",
    year: "2022",
    type: "Conference Paper",
    impact: "Cited by 15+ research papers",
    details: {
      abstract: "A comprehensive review of artificial intelligence applications in modern healthcare systems, focusing on diagnosis, treatment planning, and patient care optimization.",
      methodology: [
        "Systematic literature review",
        "Case study analysis",
        "Performance metrics evaluation",
        "Implementation framework development"
      ],
      results: [
        "Identified key AI implementation challenges",
        "Proposed standardized evaluation framework",
        "Demonstrated 40% improvement in diagnosis accuracy"
      ],
      citations: 15,
      keywords: [
        "Healthcare AI",
        "Medical Diagnosis",
        "Machine Learning",
        "Patient Care",
        "Clinical Decision Support"
      ],
      externalLink: "https://ieee.org/conferences/healthcare-informatics"
    }
  },
  {
    title: "Machine Learning in Geophysical Data Analysis",
    publisher: "Indian Geophysical Union",
    year: "2021",
    type: "Journal Article",
    impact: "Featured in IGU special edition",
    details: {
      abstract: "An innovative approach to analyzing geophysical data using advanced machine learning techniques, with specific applications in seismic activity prediction and mineral exploration.",
      methodology: [
        "Data preprocessing and feature extraction",
        "Model development and validation",
        "Field testing and verification",
        "Performance analysis"
      ],
      results: [
        "25% improvement in prediction accuracy",
        "Successfully implemented in 5 research projects",
        "Adopted by geological survey departments"
      ],
      citations: 8,
      keywords: [
        "Geophysics",
        "Machine Learning",
        "Seismic Analysis",
        "Mineral Exploration",
        "Data Analytics"
      ],
      externalLink: "https://www.igu.org/publications"
    }
  }
];

function Publications() {
  const [selectedPublication, setSelectedPublication] = useState(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Publications</h1>
        <p className="text-gray-400">Research papers and academic contributions</p>
      </motion.div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="grid-card"
            onClick={() => setSelectedPublication(pub)}
          >
            <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
              <span>{pub.publisher}</span>
              <span>•</span>
              <span>{pub.year}</span>
              <span>•</span>
              <span>{pub.type}</span>
            </div>
            <p className="text-gray-300">{pub.impact}</p>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedPublication}
        onClose={() => setSelectedPublication(null)}
        title={selectedPublication?.title}
        externalLink={selectedPublication?.details.externalLink}
      >
        {selectedPublication && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>{selectedPublication.publisher}</span>
              <span>•</span>
              <span>{selectedPublication.year}</span>
              <span>•</span>
              <span>{selectedPublication.type}</span>
              <span>•</span>
              <span>{selectedPublication.citations} Citations</span>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Abstract</h4>
              <p className="text-gray-300">{selectedPublication.details.abstract}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Methodology</h4>
              <ul className="list-disc list-inside text-gray-300">
                {selectedPublication.details.methodology.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Key Results</h4>
              <ul className="list-disc list-inside text-gray-300">
                {selectedPublication.details.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPublication.details.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Publications;