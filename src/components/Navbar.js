import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
	<div className="container">
	  <div className="navbar-brand">
		<Link to="/" className="navbar-item">
		  <figure className="image">
			<img src={logo} alt="Kaldi" style={{ width: '88px' }} />
		  </figure>
		</Link>
	  </div>
	  <div className="navbar-end">
	  <div className="navbar-item has-dropdown is-hoverable">
		<a className="navbar-link">
		More
		</a>
			<div className="navbar-dropdown">
				<Link className="navbar-item" to="/about">About</Link>
				<Link className="navbar-item" to="/products">Products</Link>
				<Link className="navbar-item" to="/contact">Contact</Link>
				<hr className="navbar-divider"/>
				<a className="navbar-item">Report an issue</a>
			</div>
		</div>
	  </div>
	</div>
  </nav>
)

export default Navbar
