import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { 
  FaChartBar, 
  FaProjectDiagram, 
  FaBriefcase, 
  FaBook, 
  FaCertificate, 
  FaEnvelope,
  FaSun,
  FaMoon
} from 'react-icons/fa';

const sidebarLinks = [
  { path: '/', icon: <FaChartBar />, label: 'Dashboard', tooltip: 'View overall statistics and achievements' },
  { path: '/projects', icon: <FaProjectDiagram />, label: 'Projects', tooltip: 'Explore completed and ongoing projects' },
  { path: '/experience', icon: <FaBriefcase />, label: 'Experience', tooltip: 'Professional journey and roles' },
  { path: '/publications', icon: <FaBook />, label: 'Publications', tooltip: 'Research papers and academic contributions' },
  { path: '/certifications', icon: <FaCertificate />, label: 'Certifications', tooltip: 'Professional certifications and awards' },
  { path: '/contact', icon: <FaEnvelope />, label: 'Contact', tooltip: 'Get in touch' },
];

function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-4 left-1/2 transform card -translate-x-1/2 z-50 bg-card-bg/80 backdrop-blur-lg rounded-full shadow-lg px-2 py-1">
        <div className="flex items-center space-x-1">
          {sidebarLinks.map((link) => (
            <Menu key={link.path} as="div" className="relative">
              <Menu.Button className="focus:outline-none">
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 
                    ${location.pathname === link.path 
                      ? 'bg-accent-color text-bg-primary' 
                      : 'hover:bg-white/10'}`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="hidden md:block text-sm font-medium">{link.label}</span>
                </Link>
              </Menu.Button>
              <Menu.Items className="absolute z-50 px-3 py-2 text-sm bg-card-bg/90 backdrop-blur-sm rounded-lg shadow-lg border border-border-color mt-2">
                <Menu.Item>
                  <span>{link.tooltip}</span>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ))}

          <div className="h-6 w-px bg-border-color mx-2" />
          
          <Menu as="div" className="relative">
            <Menu.Button
              className="p-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none"
              onClick={toggleTheme}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </Menu.Button>
            <Menu.Items className="absolute z-50 px-3 py-2 text-sm bg-card-bg/90 backdrop-blur-sm rounded-lg shadow-lg border border-border-color mt-2">
              <Menu.Item>
                <span>Toggle {isDarkMode ? 'light' : 'dark'} mode</span>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;