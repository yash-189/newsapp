import React from 'react'
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark  fixed-top mb-5" aria-label="Third navbar example">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">iNews</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname=== "/"? "active": ""}`} to="/">Home</Link></li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname=== "/business"? "active": ""}`} to="/business">Business</Link></li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname=== "/entertainment"? "active": ""}`} to="/entertainment">Entertainment</Link></li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname=== "/health"? "active": ""}`} to="/health">Health</Link></li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname=== "/science"? "active": ""}`} to="/science">Science</Link></li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname=== "/sports"? "active": ""}`} to="/sports">Sports</Link></li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname=== "/technology"? "active": ""}`} to="/technology">Technology</Link></li>
          
         </ul>
      </div>
    </div>
  </nav>
    
    </>
  )
}

export default Navbar