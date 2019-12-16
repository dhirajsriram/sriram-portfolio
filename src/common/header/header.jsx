import React from "react";
import "./header.scss";

function Header() {
  function linkClick(e) {
    e.preventDefault();
    let link = new URL(e.target.href);
    if (link.hash !== "#home") {
      let block = document.querySelector(link.hash);
      let elementPosition = block.offsetTop;
      var offsetPosition = elementPosition;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href=" ">
          MS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={e => linkClick(e)}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={e => linkClick(e)}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#expertise"
                onClick={e => linkClick(e)}
              >
                Expertise
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#experience"
                onClick={e => linkClick(e)}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#endorsements"
                onClick={e => linkClick(e)}
              >
                Endorsements
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={e => linkClick(e)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
