import React from 'react'
import { Link } from 'gatsby'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2>company</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog/">Blog</Link></li>
        <li><Link to="/product/">Product</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
