import React from 'react'
import {Link} from 'react-router-dom';
export default function Navigation() {
  return (
    <div>
      <nav>
          <Link to="/" >Projects</Link>
          <Link to="/" >Contact</Link>
      </nav>
    </div>
  )
}
