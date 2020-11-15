import React, { Component } from "react";
import {Link} from 'react-router-dom';

class NavigationBar extends Component {
  render() {
      
    return (
        <nav className="header-nav">
            <ul className="header-nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/team">Team</Link>
                </li>
                <li>
                    <Link to="/technology">Technology</Link>
                </li>
                <li>
                    <Link to="/Funding">Funding</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
  }
}
 
export default NavigationBar;