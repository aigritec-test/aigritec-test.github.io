import React, { Component } from "react";

class Funding extends Component {
  render() {
    return (
    <div className="page">
      <div className="page-title"><h1>Funding</h1></div>
      <div className="page-content">
        <div className="funding">

          <div className="funding-grid">

            {/* Funding 1 */}
            <a href="http://www.provincia.bz.it/innovazione-ricerca/servizi.asp?bnsv_svid=1033504" target="_blank" rel="noopener noreferrer">
              <div className="funding-showcase">
                <div className="funding-showcase-header">
                  <h3>Preliminary R&D Project Grant</h3>
                  <p>Bolzano Province</p>
                </div>

                <div className="funding-showcase-content">
                  <p>Preliminary phase of industrial research and experimental project development.</p>
                </div>
              </div>
            </a>
            
            {/* Funding 2 */}
            <a href="http://www.provincia.bz.it/innovazione-ricerca/servizi.asp?bnsv_svid=1008280" target="_blank" rel="noopener noreferrer">
              <div className="funding-showcase">
                
                  <div className="funding-showcase-header">
                    <h3>R&D Project Grant</h3>
                    <p>Bolzano Province</p>
                  </div>

                  <div className="funding-showcase-content">
                    <p>Industrial research and experimental project development.</p>
                  </div>
              </div>
            </a>

            {/* Funding 3 */}
            <a href="https://www.mise.gov.it/index.php/it/per-i-media/notizie/2041069-pubblicato-il-bando-voucher-3i-per-le-start-up-innovative" target="_blank" rel="noopener noreferrer">
              <div className="funding-showcase">
                <div className="funding-showcase-header">
                  <h3>Voucher 3I</h3>
                  <p>Invitalia</p>
                </div>

                <div className="funding-showcase-content">
                  <p>Patent filing.</p>
                </div>              
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
    );
  }
}
 
export default Funding;