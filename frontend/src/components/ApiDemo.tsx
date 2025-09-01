import { useState, useCallback } from 'react'
import {  GetHelloWorld, GetAppVersion, GetPlatform } from '../../wailsjs/go/main/App'

const ApiDemo = () => {
  const [resultText, setResultText] = useState('🔌 Ready to test API functions')
  const [loading, setLoading] = useState(false)

  
  const clearResults = useCallback(() => {
    setResultText('🔌 Ready to test API functions')
    setLoading(false)
  }, [])

  const handleApiCall = useCallback(async (apiFunction: () => Promise<string>, loadingText: string) => {
    setResultText('')
    setLoading(true)
    setTimeout(() => {
      setResultText(loadingText)
    }, 10)
    
    try {

      const result = await apiFunction()

      setResultText('')
      setTimeout(() => {
        setResultText(result || '✅ API call completed (empty response)')
      }, 10)
      
    } catch (error) {
      console.error('API call failed:', error)
      setResultText('')
      setTimeout(() => {
        setResultText(`❌ Error: ${error}`)
      }, 10)
    } finally {
      setLoading(false)
    }
  }, [])

  const getHelloWorld = useCallback(() => {
    handleApiCall(GetHelloWorld, '🔄 Calling Hello World API...')
  }, [handleApiCall])

  const getAppVersion = useCallback(() => {
    handleApiCall(GetAppVersion, '🔄 Getting app version...')
  }, [handleApiCall])

  const getPlatform = useCallback(() => {
    handleApiCall(GetPlatform, '🔄 Getting platform info...')
  }, [handleApiCall])

  const apiMethods = [
    {
      name: 'GetHelloWorld',
      description: 'Returns a simple "HELLO WORLD" message from the Go backend',
      action: getHelloWorld,
      color: 'from-green-500 to-teal-600',
      icon: '🌍'
    },
    {
      name: 'GetAppVersion',
      description: 'Retrieves the current application version',
      action: getAppVersion,
      color: 'from-blue-500 to-cyan-600',
      icon: '📱'
    },
    {
      name: 'GetPlatform',
      description: 'Returns the current platform information',
      action: getPlatform,
      color: 'from-purple-500 to-pink-600',
      icon: '💻'
    }
  ]

  return (
    <div className="space-y-8">

      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          🔌 API Communication Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Test the communication between the React frontend and Go backend through Wails bindings.
        </p>
      </div>

      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
            <span className="mr-2">📤</span>
            API Response
          </h2>
          <button
            onClick={clearResults}
            className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
          >
            Clear
          </button>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 min-h-[100px] flex items-center justify-center">
          <p className={`text-center font-medium ${loading ? 'text-blue-600 dark:text-blue-400 animate-pulse' : 'text-gray-700 dark:text-gray-300'}`}>
            {resultText}
          </p>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {apiMethods.map((method, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-white text-xl mb-4`}>
              {method.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {method.name}()
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {method.description}
            </p>
            <button
              onClick={method.action}
              disabled={loading}
              className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer`}
            >
              {loading ? 'Calling...' : 'Call API'}
            </button>
          </div>
        ))}
      </div>


      

     
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <span className="mr-2">💻</span>
          Code Examples
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Go Backend (app.go)</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`// Simple API method
func (a *App) GetHelloWorld() string {
    return "HELLO WORLD"
}

// Method with parameters
func (a *App) Greet(name string) string {
    return fmt.Sprintf("Hello %s, It's show time!", name)
}`}
            </pre>
          </div>
          
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">React Frontend</h3>
            <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto">
{`// Import Wails-generated bindings
import { GetHelloWorld, Greet } from '../../wailsjs/go/main/App'

// Call API methods
const result = await GetHelloWorld()
const greeting = await Greet("John")`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiDemo
