import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/404')({
  component: () => <NotFound />,
})

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-700">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist. It may have been moved or deleted.
        </p>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Go back to the main screen
          </Link>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Let's get you back to the main screen and explore the app!
          </div>
        </div>
      </div>
    </div>
  )
}
