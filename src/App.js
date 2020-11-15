import React from 'react';
import './styles.css';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Technology from "./Pages/Technology";
import Funding from "./Pages/Funding";
import Contact from "./Pages/Contact";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (

    <Router>
      <Header />

          <Switch>
            <Route path="/" exact component={Home}/>

            {/* All of our remaining pages will be inserted into a container */}
            <React.Fragment>
              <div className="container">
                <Route path="/team" component={Team}/>
                <Route path="/technology" component={Technology}/>
                <Route path="/funding" component={Funding}/>
                <Route path="/contact" component={Contact}/>
              </div>
            </React.Fragment>

          </Switch>

      <Footer />
    </Router>
  );
}

export default App;
