import React, { Component } from "react";


class Technology extends Component {

  constructor() {
    super();

    // initialize this components state
      this.state = {
        layoutMode: this.getLayoutMode(),
        class:  this.getShowcaseClass()
    };

    // create resize handler
    this.onResize = this.onResize.bind(this);
  }

    // add listeners when component is mounted 
    componentDidMount() {

        window.addEventListener('resize', this.onResize);
    }

    // remove listeners when component is unmounted
    componentWillUnmount() {

        window.removeEventListener('resize', this.onResize);
    }

    // handle resizes of the screen
    onResize() {
        this.setState({
            layoutMode: this.getLayoutMode(),
            class:      this.getShowcaseClass()
        });
    }

    // determine if user is on desktop or mobile
    getLayoutMode() {
        return window.innerWidth > 880 ?
            'desktop'
            : 'mobile';
    }

    getShowcaseClass() {
      return window.innerWidth > 880 ?
        'technology-showcase'
        : 'technology-mobile-showcase';
    }

  render() {
    return (
        <div className="page">
          <div className="page-title"><h1>Technology</h1></div>
          <div className="page-content">
            <div className="technology">
              <div className="technology-grid">

                {/* First technology piece */}
                <div className={this.state.class}>
                  <img src= {process.env.PUBLIC_URL + '/Images/Technology/arm2.png'} className="technology-showcase-image" alt=""/>

                  <div className="technology-showcase-banner">
                    <div className="text">
                      <h2>Advanced robot components</h2>
                      <p>Aigritec uses latest generation robot components that are highly modular and that guarantee high speed, precision and resistance</p>
                    </div>
                  </div>
                </div>


                {/* Second technology piece */}
                <div className={this.state.class}>
                  <img src= {process.env.PUBLIC_URL + '/Images/Technology/depth.png'} className="technology-showcase-image" alt=""/>

                  <div className="technology-showcase-banner">
                    <div className="text">
                        <h2>Robots powered by Deep Learning</h2>
                        <p>Aigritec uses state-of-the-art Deep Learning to automate vision, motion control, multi-arm planning, motor tuning, and much more!</p>
                    </div>
                  </div>
                </div>

                {/* Third technology piece */}
                <div className={this.state.class}>
                  <img src= {process.env.PUBLIC_URL + '/Images/Technology/spray.png'} className="technology-showcase-image" alt=""/>

                  <div className="technology-showcase-banner">
                    <div className="text">
                      <h2>Precise solutions</h2>
                      <p>Thanks to Aigritec's smart farming solutions, plants get precisely the treatment they need.</p>                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
 
export default Technology;