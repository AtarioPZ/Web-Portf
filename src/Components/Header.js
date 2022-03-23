import React from 'react'
import PropTypes from 'prop-types';
import dp from '../Image/pic.png'

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <img className='w-24 h-24 rounded-full mx-6' src={dp} alt="" width="40" height="40"/>
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Me</a>
        </li>
      </ul>
      {props.search? <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>: ""}
    </div>
  </div>
</nav>
  );
}

Header.defaultProps = {
  title: "Enter title",
  search: false
}

Header.prototype = {
  title: PropTypes.string,
  search: PropTypes.bool
}
