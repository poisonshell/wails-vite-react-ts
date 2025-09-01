import { ReactNode } from 'react'

interface TabProps {
  children: ReactNode
  label: string
  icon?: string
}

interface TabsProps {
  children: ReactNode[]
  activeTab: number
  onTabChange: (index: number) => void
}

export const Tab = ({ children }: TabProps) => {
  return <div>{children}</div>
}

export const Tabs = ({ children, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-1 mb-6 w-fit">
        {children.map((child: any, index) => (
          <button
            key={index}
            onClick={() => onTabChange(index)}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === index
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            {child.props.icon && (
              <span className="text-base">{child.props.icon}</span>
            )}
            <span>{child.props.label}</span>
          </button>
        ))}
      </div>

      <div className="pt-0">
        {children[activeTab]}
      </div>
    </div>
  )
}

export default Tabs
