import React, { Component } from "react";
import {Link} from 'react-router-dom';
import NavigationBar from './Header/NavigationBar';
import Links from './Header/Links'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { VelocityTransitionGroup } from 'velocity-react';

library.add(faBars);

class Header extends Component {
    constructor(props) {
        super();

        // initialize this components state
        this.state = {
            layoutMode: this.getLayoutMode(),
            showMenu: false
        };

        // create resize handler
        this.onResize = this.onResize.bind(this);

        // create a reference to the dropdown button
        this.dropdownMenu = React.createRef();

        // initialize node
        this.node = null;
        
        // create outside click handler
        this.handleClickOutside = this.handleClickOutside.bind(this);
        
    }

    // add listeners when component is mounted 
    componentDidMount() {

        window.addEventListener('resize', this.onResize);
        document.addEventListener('mousedown', this.handleClickOutside, false);
    }

    // remove listeners when component is unmounted
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);

        document.removeEventListener('mousedown', this.handleClickOutside, false);
    }

    // handle resizes of the screen
    onResize() {
        this.setState({
            layoutMode: this.getLayoutMode(),
        });
    }

    // determine if user is on desktop or mobile
    getLayoutMode() {
        return window.innerWidth > 880 ?
            'desktop'
            : 'mobile';
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {

        // check if clicked within the element and whether the dropdown is being shows
        if (this.node && this.state.showMenu) {
            if (!this.node.contains(event.target)) {
                this.setState({ showMenu: !this.state.showMenu });
            }
        }
    }

    /**
     *  Function to remove a dropdown
     */
    toggleDropdown() { this.setState({ showMenu: !this.state.showMenu }); }

  render() {
      
    return (
        <div className="header" ref={node => this.node = node}>

            <div className="header-logo">
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + '/Images/logo.png'} alt="Logo" />
                </Link>
            </div>
            
            {/* Check if user is on a desktop or mobile */}
            {this.state.layoutMode === 'desktop' ? (
                
                // load navigation bar if on desktop
                <NavigationBar/>
            ) : (

                // load dropdown button if on mobile
                <div className="header-dropdown"><FontAwesomeIcon icon="bars" onClick={this.toggleDropdown.bind(this)}/></div>
            )}

            {/* Depending on the state, show the links or not using a nice animation */}
            <VelocityTransitionGroup className="header-dropdown-menu" enter="slideDown" leave="slideUp">
                { this.state.showMenu && this.state.layoutMode === 'mobile' ? <Links onClick={this.toggleDropdown.bind(this)}/> : null}
            </VelocityTransitionGroup>

        </div>
    );
  }
}

export default Header;

