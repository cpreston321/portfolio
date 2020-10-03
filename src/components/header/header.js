import React from "react"

import { Link } from "gatsby"

export default function Header() {
  return (
    <div className="flex flex-row justify-center p-6">
      <nav className="flex flex-row space-x-5 font-nav">
        <Link to="/" activeClassName="text-electric-orange">Home</Link>
        <Link to="/solutions" activeClassName="text-electric-orange">Solutions</Link>
        <Link to="/contact" activeClassName="text-electric-orange">Contact Us</Link>
        <Link to="/about" activeClassName="text-electric-orange">About</Link>
      </nav>
    </div>
  )
}