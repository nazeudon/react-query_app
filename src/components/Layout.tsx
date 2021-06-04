import { ReactNode, VFC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono text-gray-600">
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link
                className="px-3 py-2 text-sm text-gray-300 rounded hover:bg-gray-700"
                to="/"
              >
                react-query
              </Link>
              <Link
                className="px-3 py-2 text-sm text-gray-300 rounded hover:bg-gray-700"
                to="/fetch-a"
              >
                Regular fetch
              </Link>
              <Link
                className="px-3 py-2 text-sm text-gray-300 rounded hover:bg-gray-700"
                to="/main-context"
              >
                useContext
              </Link>
              <Link
                className="px-3 py-2 text-sm text-gray-300 rounded hover:bg-gray-700"
                to="/main-rtkit"
              >
                RTKit
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-screen">
        {children}
      </main>
    </div>
  )
}
