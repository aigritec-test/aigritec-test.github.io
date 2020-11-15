import React, { Component } from "react";

class Team extends Component {

    constructor() {

        // call super
        super()

        /**
         *  Assign data object to account for devs
         * 
         *  MESSAGE TO USER:
         *  If you wish to add a new member to the team page, make sure to 
         *  add all their info in the following structure to the object below:
         * 
         *  {
         *      name:       'user',
         *      function:   'developer',
         *      image:      'imagename.js',
         *  
         *  }
         * 
         *  Please note that they will also be presented in this order
         */
        this.team = [
            {
                name:       'Elia Bruni',
                function:   'CEO',
                img:        'ebruni1.jpg'
            },
            {
                name:       'Daniele Facchin',
                function:   'CTO',
                img:        'dfacchin.jpg'
            },
            {
                name:       'Oscar Ligthart',
                function:   'Head of AI',
                img:        'oligthart.jpeg'
            },
            {
                name:       'Florian Dallago',
                function:   'Mechanical Engineer',
                img:        'fdallago.jpg'
            },
            {
                name:       'Martin Regolini',
                function:   'Mechatronic Engineer',
                img:        'mregolini.jpeg'     
            },
            {
                name:       'Leon Eshuijs',
                function:   'AI Engineer',
                img:        'leshuijs.jpg'
            },
            {
                name:       'Frank Brongers',
                function:   'AI Engineer',
                img:        'fbrongers.jpg'
            }
        ];

        this.items = [];

        // create a loop of HTML elements holding the team entries
        for (let [index, property] of Object.values(this.team).entries()) {
            
            // add the member to the team
            this.items.push(
            <div className="team-member" key={index}>
                <img src={process.env.PUBLIC_URL + '/Images/Team/' + property.img} alt=""></img>
                <h4>{property.name}</h4>
                <p>{property.function}</p>
            </div>
            )
        }
    }

  render() {
    return (
        <div className="page">
            <div className="page-title"><h1>Team</h1></div>
            <div className="page-content">
                <div className="team">
                    <div className="team-grid">
                        {/* The code below dynamically loads all team members according to the information above */}
                        {this.items}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
 
export default Team;