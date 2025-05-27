import React, { useState, useEffect } from 'react'
import { Settings } from 'lucide-react'

const Dashboard = () => {
  const userName = 'Jane Doe' // Replace with dynamic user data
  const fullGreeting = `Hi, ${userName}`
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let idx = 0
    const timer = setInterval(() => {
      setDisplayText(fullGreeting.slice(0, idx + 1))
      idx++
      if (idx === fullGreeting.length) clearInterval(timer)
    }, 100)
    return () => clearInterval(timer)
  }, [fullGreeting])

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      {/* Greeting with typewriter effect */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 h-8">{displayText}</h1>
      </div>

      <div className="flex items-center space-x-4">
        {/* User Avatar */}
        <img
          src="https://via.placeholder.com/64"
          alt="User Avatar"
          className="w-16 h-16 rounded-full border-2 border-indigo-500"
        />

        {/* User Info */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{userName}</h2>
          <p className="text-gray-600 truncate w-64">
            Frontend Engineer exploring the latest in React, Tailwind, and AI-driven UIs.
          </p>
        </div>

        {/* Settings Icon */}
        <Settings className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
      </div>
    </div>
  )
}

export default Dashboard
