import React, { Component } from 'react';

//Stateless functional component - here, instead of using a class to define this component NavBar we 
// can use a function

const NavBar = ({totalCounters}) => {
    // returning react element
    return ( 
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span></a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
     );
};

// class NavBar extends Component {
//     // state = {  }
//     render() { 
        
//     }
// }
 
export default NavBar;