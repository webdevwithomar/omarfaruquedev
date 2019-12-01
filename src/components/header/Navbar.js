import React from 'react'
import ReactGA from 'react-ga';

export default function Navbar() {
  const helpAnalytic = (category, action) => {
    ReactGA.event({
      category: category,
      action: action
    })
  }

  const clickHandler1 = () => {
    helpAnalytic('Home', 'Clicked the home page')
  }

  const clickHandler2 = () => {
    helpAnalytic('About', 'Eager to learn more about me')
  }

  const clickHandler3 = () => {
    helpAnalytic('Skills', 'Wanted to know about my skills')
  }

  const clickHandler4 = () => {
    helpAnalytic('Projects', 'Interested to see projects')
  }

  const clickHandler5 = () => {
    helpAnalytic('Contact', 'Tried to contact me')
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#home"><img className="logo" src="./img/icons/logo-white.svg" alt="" /></a>
        <button className="ml-auto navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a onClick={clickHandler1} className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a onClick={clickHandler2} className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a onClick={clickHandler3} className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a onClick={clickHandler4} className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a onClick={clickHandler5} className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
