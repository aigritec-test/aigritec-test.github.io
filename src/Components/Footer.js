import React, { Component } from "react";

class Footer extends Component {
    constructor() {

        super();
        
        // get current date
        let date = new Date();

        // create state object holding current year
        this.state = { currentYear: date.getFullYear() };
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer-text">
                    Aigritec © {this.state.currentYear} - Via Carducci 6B 39100 Bolzano, Italy
                </div>
            </footer>
        );
    }
}
 
export default Footer;