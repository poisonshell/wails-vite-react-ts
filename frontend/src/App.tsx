import { useState } from 'react'
import About from './components/About'
import ApiDemo from './components/ApiDemo'
import { Tabs, Tab } from './components/Tabs'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-full">
      <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
        <Tab label="About" icon="📋">
          <About />
        </Tab>
        <Tab label="API Demo" icon="⚡">
          <ApiDemo />
        </Tab>
      </Tabs>
    </div>
  )
}

export default App


