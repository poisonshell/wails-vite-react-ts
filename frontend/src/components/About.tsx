import viteLogo from '/vite.svg'
import wailsLogo from '../assets/wails.svg'

const About = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Wails v2',
      description: 'Go backend with web frontend framework',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚛️',
      title: 'React 19',
      description: 'Latest React with concurrent features and hooks',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '🔷',
      title: 'TypeScript 5',
      description: 'Full type safety across frontend and backend',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: '🧭',
      title: 'TanStack Router',
      description: 'Type-safe routing with automatic code generation',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '⚡',
      title: 'Vite 7',
      description: 'Lightning fast development and optimized builds',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎨',
      title: 'TailwindCSS 4',
      description: 'Utility-first CSS framework with dark mode',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: '🪟',
      title: 'Window Controls',
      description: 'Dynamic window management and resizing',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: '🔥',
      title: 'Hot Reload',
      description: 'Instant feedback during development',
      color: 'from-red-500 to-orange-500'
    }
  ]

  const techStack = [
    { name: 'Backend', tech: 'Go + Wails v2', icon: '🚀' },
    { name: 'Frontend', tech: 'React 18 + TypeScript', icon: '⚛️' },
    { name: 'Routing', tech: 'TanStack Router', icon: '🧭' },
    { name: 'Styling', tech: 'TailwindCSS 4', icon: '🎨' },
    { name: 'Build Tool', tech: 'Vite 7', icon: '⚡' },
    { name: 'Dev Experience', tech: 'Hot Reload + HMR', icon: '🔥' }
  ]

  return (
    <div className="space-y-8">
  
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-6 mb-6">
          <img src={viteLogo} className="h-16 w-16 animate-spin-slow" alt="Vite" />
          <div className="text-4xl text-blue-500">+</div>
          <img src={wailsLogo} className="h-16 w-16" alt="Wails" />
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Wails Template
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A wails template featuring  Wails, React, TypeScript, 
          TanStack Router, Vite, and TailwindCSS.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-xl mb-4`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

  
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Tech Stack Overview
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {item.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {item.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-blue-200 dark:border-gray-600">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          🚀 Getting Started
        </h2>
        
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <div className="flex items-start space-x-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <span className="font-medium">Create a new project:</span>
              <code className="block mt-1 bg-gray-800 text-green-400 p-2 rounded text-sm">
                wails init -n myapp -t https://github.com/yourusername/wails-vite-react-ts
              </code>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <span className="font-medium">Start development:</span>
              <code className="block mt-1 bg-gray-800 text-green-400 p-2 rounded text-sm">
                wails dev
              </code>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <span className="font-medium">Build for production:</span>
              <code className="block mt-1 bg-gray-800 text-green-400 p-2 rounded text-sm">
                wails build
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400">
          🚀 Happy coding! This template provides everything you need to build good desktop applications with Wails & React.
        </p>
     
      </div>
    </div>
  )
}

export default About
