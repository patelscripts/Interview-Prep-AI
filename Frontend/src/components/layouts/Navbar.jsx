import React from 'react'
import { Link } from 'react-router-dom'
import ProfileInfoCard from '../Cards/ProfileInfoCard'

const Navbar = () => {
  return (
    <div className='h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30'>
      <div className='max-w-7xl mx-auto flex items-center justify-between h-full px-4'>
        
        {/* Logo */}
        <Link to="/dashboard">
          <h2 className='text-xl font-semibold text-gray-800 hover:text-blue-600 transition'>
            Interview<span className="text-blue-600">Pilot</span>
          </h2>
        </Link>

        {/* Right Section */}
        <div className='flex items-center gap-4'>
          <ProfileInfoCard />
        </div>

      </div>
    </div>
  )
}

export default Navbar