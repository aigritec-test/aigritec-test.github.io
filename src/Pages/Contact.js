import React, { Component } from "react";
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faHandPointDown } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone, faEnvelope, faHandPointDown);

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    }
  }

  /**
   * Function to handle the submit of the form
   * @param { } event 
   */
  handleSubmit(event) {

    // prevent default behaviour
    event.preventDefault();
    
    // create HTTP POST request
    axios({
      method: "POST", 
      url:    "http://localhost:3002/send", 
      data:   this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
      }
    })
  }

  /**
   *  Function to reset the form
   */
  resetForm(){
    this.setState({firstname: '', lastname: '', email: '', message: ''})
  }

  render() {
    return (
      <div className="page">
        <div className="page-title"><h1>Contact</h1></div>
        <div className="page-content">

          <div className="contact">

            <div className="form-container">

              <h2 className="form-title">Ask us anything!</h2>

              <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" autoComplete="given-name" className="form-name" value={this.state.firstname} onChange={this.onFirstNameChange.bind(this)} placeholder="Your First name"/>
                    <input type="text" autoComplete="family-name" className="form-name" value={this.state.lastname} onChange={this.onLastNameChange.bind(this)} placeholder="Your Last name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} placeholder="Your Email address"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea rows="10" className="form-message" value={this.state.message} onChange={this.onMessageChange.bind(this)} placeholder="What can we help you with?"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>

            </div>

            <div className="contact-info">
                <h2 className="contact-info-title">Or contact us directly!</h2>

                <div className="contact-info-boxes">

                  <div className="contact-info-box">
                    <FontAwesomeIcon icon='phone'/> 
                    <div className="contact-info-box-text">
                      <h3>+39 320 0566722</h3>
                      <p>Mon to Fri 9am to 6pm</p>
                    </div>
                  </div>

                  <div className="contact-info-box">
                    <FontAwesomeIcon icon='envelope'/> 
                    <div className="contact-info-box-text">
                      <h3>info@aigritec.com</h3>
                      <p>Send us your query anytime!</p>
                    </div>
                  </div>

                </div>
            </div>

          </div>
        
          <div className="map-container">
            <h2 className="center">Here is where to find us <FontAwesomeIcon icon="hand-point-down"/></h2>
            <iframe title="map" className="map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDBOco2zzdTU1pO93ZqISf6TSC2e-Mb_Mc&q=Via+Giosuè+Carducci+6,Bolzano+BZ" allowFullScreen=""></iframe>
          </div>
        </div>
      </div>
    );
  }

  // handle firstname changes
  onFirstNameChange(event) {
    this.setState({firstname: event.target.value})
  }

  // handle lastname changes
  onLastNameChange(event) {
    this.setState({lastname: event.target.value})
  }

  // handle email changes
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  // handle message changes
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
}

 
export default Contact;