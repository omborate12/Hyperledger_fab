import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
       <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand text-primary" to="/">Chainify</Link>
  <Link className="navbar-brand text-lg" to="/health">Assets</Link>
  <Link className="navbar-brand text-lg" to="/form">create Asset</Link>
  <Link className="navbar-brand text-lg" to="/change">transfer Asset</Link>
  <Link className="navbar-brand text-lg" to="/multi">Display Asset</Link>
  <Link className="navbar-brand text-lg" to="/transactions">Transactions</Link>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item"><Link className="nav-link" to="/multi">Multi Asset</Link></li>

      <li className="nav-item active">
        <Link className="nav-link" to="#">Create Asset <span className="sr-only">Form</span></Link>
      </li>
      <li className="nav-item"><Link className="nav-link" to="/change">Transfer Asset</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/multi">Multi Asset</Link></li>
      {/* <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li> */}
    </ul>
    
  </div>
</nav>

    )
  }
}

export default Navbar