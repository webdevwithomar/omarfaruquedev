import React from 'react'

export default function Footer() {
  const copyDate = new Date().getFullYear()
  return (
    <footer className="py-5 bg-dark text-white text-center">
      <div className="container">
        <h2 className="mb-4">Omar Faruque</h2>
        <hr />
        <p className="mt-5">Learn more about me: <a href="https://linkedin.com/in/webdevwithomar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          | <a href="https://github.com/webdevwithomar" target="_blank" rel="noopener noreferrer">Github</a> | <a href="http://webdevwithomar.com"
            target="_blank" rel="noopener noreferrer">Web Dev with
          Omar</a></p>
        <p className="mt-5"><small>&copy; Copyright {copyDate}. Web Dev with Omar. All rights
          reserved.</small></p>
      </div>
    </footer>
  )
}
