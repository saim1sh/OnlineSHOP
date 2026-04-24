import React from 'react'

export default function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
    </div>
  )
}
