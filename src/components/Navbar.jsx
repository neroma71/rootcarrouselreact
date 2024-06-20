import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services/apropos">A propos</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}
