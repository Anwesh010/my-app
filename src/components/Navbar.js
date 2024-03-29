import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './Nav.css'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
        </ul>
        <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.togglemode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}> </div>
       
            <div className="bg-secondary rounded mx-2" onClick={()=>{props.togglemode('secondary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}> </div>
       
            <div className="bg-success rounded mx-2" onClick={()=>{props.togglemode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}> </div>
       
            <div className="bg-danger rounded mx-2" onClick={()=>{props.togglemode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}> </div>
        
            <div className="bg-light rounded mx-2" onClick={()=>{props.togglemode('light')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'2px solid black'}}> </div>
       
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string
}
Navbar.defaultProps={
    title:"company name",
    about:"company about"
}