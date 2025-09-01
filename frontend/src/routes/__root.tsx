import { createRootRoute, Outlet } from '@tanstack/react-router'
import TitleBar from '../components/TitleBar'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 no-overscroll" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <TitleBar />
      <main className="h-[calc(100vh-2.5rem)] overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 smooth-scroll no-overscroll">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  ),
})
