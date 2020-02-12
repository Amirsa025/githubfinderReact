import React from "react";
import Search from './search'
const NavBar = (props) => {
  const {SearchUsers}= props
  return (
    <div>
      <nav className="nav navbar navbar-dark bg-dark  py-2">
        <div className="container ">
          <div className="d-content">
          <a href="/" className="navbar-brand">
                <i className="fab fa-github"></i> GitHub Finder
            </a>
              
          </div>
          <Search SearchUsers={SearchUsers}/> 
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
