import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

library.add(faHandPointRight);

class Home extends Component {

  constructor(props) {
    super();

    // initialize this components state
    this.state = {
        layoutMode: this.getLayoutMode(),
        renderFirst: false,
        renderSecond: false
    };

    // create resize handler
    this.onResize = this.onResize.bind(this);
   
  }

    // add listeners when component is mounted 
    componentDidMount() {

        window.addEventListener('resize', this.onResize);

        this.setState({renderFirst: true});
        // setTimeout(()=> {this.setState({renderFirst: true})}, 10)

        setTimeout(()=> {this.setState({renderSecond: true})}, 1500)
    }

    // remove listeners when component is unmounted
    componentWillUnmount() {

        window.removeEventListener('resize', this.onResize);
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

  render() {

    const backgroundStyle = {
      backgroundImage: 'url(' + process.env.PUBLIC_URL + '/Images/Index/background.jpg)',
      height: '100vh'
    };

    const technologyStyle = {
      backgroundImage: 'url(' + process.env.PUBLIC_URL + '/Images/Technology/arm2.png)',
    }

    return (
      
      <div className="index">

          {this.state.layoutMode === 'desktop' ? 

            // the page loaded on desktop
            <div className="index-content" style={backgroundStyle}>
              <div className="index-content-box>">
                <div className="index-content-text">
                  <h2>Welcome to<br></br>the future of agriculture</h2>
                  <h4>
                    Through advanced robotics and state-of-the-art artificial intelligence, 
                    Aigritec produces the new generation of precision agriculture
                  </h4>
                </div>
              </div>
            </div>
          : 
            // the page loaded on mobile
            <div className="index-mobile">

              <div className="index-mobile-landing">
                <img src= {process.env.PUBLIC_URL + '/Images/Index/background.jpg'} className="index-mobile-image" alt=""/>

                  <div className="index-mobile-landing-text">

                    <div className="index-mobile-landing-box-container">
                      <ReactCSSTransitionGroup
                        component={React.Fragment}
                        transitionName="slide-right"
                        transitionLeaveTimeout={300}
                        >
                        {
                          this.state.renderFirst ?
                            <div className="index-mobile-landing-box" key="1">
                              <div className="text-box text-1">
                                <h1>Welcome to </h1>
                              </div>
                            </div>
                        : null}
                      </ReactCSSTransitionGroup>  
                    </div>
                        
                    <div className="index-mobile-landing-box-container">
                      <ReactCSSTransitionGroup
                          component={React.Fragment}
                          transitionName="slide-left"

                          transitionLeaveTimeout={300}
                          >
                        {
                          this.state.renderSecond ?
                            <div className="index-mobile-landing-box" key="1">
                              <div className="text-box text-2">
                                <h1> The Future of Agriculture</h1>
                              </div>
                            </div>
                        :            
                          // This is a hacky solution that acts as a placeholder such that the grid will always
                          // keep its original size. It is not preferable, should remove in the future
                          <div className="index-mobile-landing-box" key="2" style={{opacity:0}}>
                            <div className="text-box text-2">
                              <h1> The Future of Agriculture</h1>
                            </div>
                          </div>
                        }
                      </ReactCSSTransitionGroup>
                    </div>

                  </div>
              </div>
              
              <div className="index-mobile-technology" style={technologyStyle}>
                <div className="index-mobile-technology-description">

                    <h4>
                      Through advanced robotics and state-of-the-art artificial intelligence, 
                      Aigritec produces the new generation of precision agriculture
                    </h4>
                    
                    <Link to="/technology" className="index-mobile-technology-link">
                      <button>See how <FontAwesomeIcon icon="hand-point-right"/></button>
                    </Link>
                </div>
              </div>

            </div>


          }
      </div>
    );
  }
}
 
export default Home;