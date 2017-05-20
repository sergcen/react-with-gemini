import Main from './components/Main';
import Gemini from './components/Gemini';
import RegisterForm from './components/RegisterForm';
import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route path="/gemini-test" component={Gemini}/>
                <Route exact path="/" component={Main}/>
                <Route exact path="/register" component={RegisterForm}/>
            </div>
        </Router>
    );
  }
}

export default App;
