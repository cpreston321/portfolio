import React from "react"

import "typeface-poppins"
import "typeface-aleo"
import "./layout.css"

import Header from "./header/header"

export default function Layout({ children }) {
  return (
      <div className="container mx-auto w-full h-full relative">
        <Header />
        {children}
      </div>
  )
}