import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from '@headlessui/react';
import { 
  FaAward, FaUsers, FaFileAlt, FaStar, FaBrain, 
  FaDatabase, FaChartLine, FaCode, FaGithub, 
  FaLinkedin, FaTwitter
} from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '1990', projects: 1, publications: 0 },
  { year: '1992', projects: 2, publications: 1 },
  { year: '1994', projects: 4, publications: 2 },
  { year: '1996', projects: 6, publications: 3 },
  { year: '1998', projects: 8, publications: 4 },
  { year: '2000', projects: 10, publications: 6 },
  { year: '2002', projects: 12, publications: 8 },
  { year: '2004', projects: 15, publications: 10 },
  { year: '2006', projects: 18, publications: 12 },
  { year: '2008', projects: 20, publications: 15 },
  { year: '2010', projects: 23, publications: 18 },
  { year: '2012', projects: 25, publications: 20 },
  { year: '2014', projects: 28, publications: 22 },
  { year: '2016', projects: 30, publications: 24 },
  { year: '2018', projects: 32, publications: 26 },
  { year: '2020', projects: 35, publications: 28 },
  { year: '2022', projects: 38, publications: 30 },
  { year: '2024', projects: 40, publications: 32 }
];

const skills = [
  { name: 'Machine Learning', icon: <FaBrain />, level: 95 },
  { name: 'Data Analytics', icon: <FaDatabase />, level: 90 },
  { name: 'Deep Learning', icon: <FaChartLine />, level: 85 },
  { name: 'Python/R', icon: <FaCode />, level: 88 },
];

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
];

function Dashboard() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card p-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">Dr. DV Ramana</h1>
            <p className="text-xl opacity-80 mb-6">Data Science & AI Expert</p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="data-tag">Machine Learning</span>
              <span className="data-tag">Deep Learning</span>
              <span className="data-tag">Data Analytics</span>
              <span className="data-tag">AI Research</span>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl z-50 hover:text-accent-color transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="w-48 z-50 h-48 rounded-full overflow-hidden border-4 animated-border">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQH8OpSqfmq_xg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722615658664?e=1748476800&v=beta&t=AQupd9kXX90MhRmyv1ox_nSsbXu3ig2e7AP6iSf93YQ"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          { icon: <FaAward />, value: "20+", label: "Years Experience", tooltip: "Over two decades of expertise in Data Science & AI" },
          { icon: <FaUsers />, value: "500+", label: "Students Mentored", tooltip: "Guided hundreds of students in their academic journey" },
          { icon: <FaFileAlt />, value: "30+", label: "Publications", tooltip: "Published research papers in prestigious journals" },
          { icon: <FaStar />, value: "15+", label: "Awards", tooltip: "Recognized for outstanding contributions to the field" }
        ].map((stat, index) => (
          <Menu key={index} as="div" className="relative">
            <Menu.Button className="focus:outline-none w-full">
              <div className="stat-card group">
                {React.cloneElement(stat.icon, { className: "text-3xl mb-4 group-hover:text-accent-color transition-colors" })}
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="opacity-80">{stat.label}</p>
              </div>
            </Menu.Button>
            <Menu.Items className="absolute z-50 px-3 py-2 text-sm bg-card-bg/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-700 mt-2">
              <Menu.Item>
                <span>{stat.tooltip}</span>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card"
        >
          <h2 className="section-title">Research Impact</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-color)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent-color)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPublications" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#64ffda" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#64ffda" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                <XAxis dataKey="year" stroke="currentColor" />
                <YAxis stroke="currentColor" />
                <RechartsTooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card-bg)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="projects" 
                  stroke="var(--accent-color)" 
                  fill="url(#colorProjects)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="publications" 
                  stroke="#64ffda" 
                  fill="url(#colorPublications)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card"
        >
          <h2 className="section-title">Core Competencies</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="skill-progress"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;