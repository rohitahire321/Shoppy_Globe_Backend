import React from 'react'

function Footer() {
  return (
    <footer className='w-full fixed bottom-0 left-0 bg-blue-950 py-6 mt-10 border-t border-white'>
      <div className='w-full mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between'>
        <p className='text-lg ml-50'>@ 2025 Shoppy_Globe. All Rights Reserved.</p>
        <nav className='flex gap-10'>
          <a href="#" className='transition-colors'>Privacy Policy</a>
          <a href="#" className='transition-colors'>Terms</a>
          <a href="#" className='transition-colors'>Contact</a>
        </nav>
      </div>
      
    </footer>
  )
}

export default Footer
