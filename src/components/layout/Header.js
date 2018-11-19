import React from 'react'
import { Link } from 'react-router-dom'

import LogoWhite from '../LogoWhite'

const Header = ({ siteTitle }) => (
  <header className="page-header" id="siteHeader">
    <nav className="navbar navbar-lg navbar-expand-md navbar-dark">
      <div className="container">
        <div className="navbar__first">
          <Link to="/">
            <LogoWhite width='100' />
          </Link>
          <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="myNav">
          <div className="navbar-nav">
            <a href="#!" className="nav-link navbar__item">
              <div className="navbar__text">Articles</div>
            </a>
            <a href="#!" className="nav-link navbar__item">
              <div className="navbar__text">Podcast</div>
            </a>
            <a href="#!" className="nav-link navbar__item">
              <div className="navbar__text">Institute</div>
            </a>
          </div>
          <div className="navbar-nav ml-auto">
            <a href="#!" className="nav-link navbar__item">
              <div className="navbar__text">About</div>
            </a>
            <a href="#!" className="nav-link navbar__item">
              <div className="navbar__text">Contact</div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
