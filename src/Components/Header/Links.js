import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Links extends Component {

    handleClick = e => {
        e.stopPropagation();  //  <------ Here is the magic
        this.props.onClick();
    }

    render() {
    return (
        <ul className="header-dropdown-menu">
            <li>
                <Link to="/" onClick={this.handleClick}>Home</Link>
            </li>
            <li>
                <Link to="/team" onClick={this.handleClick}>Team</Link>
            </li>
            <li>
                <Link to="/technology" onClick={this.handleClick}>Technology</Link>
            </li>
            <li>
                <Link to="/Funding" onClick={this.handleClick}>Funding</Link>
            </li>
            <li>
                <Link to="/Contact" onClick={this.handleClick}>Contact</Link>
            </li>
        </ul>
    );
  }

  
}
 
export default Links;