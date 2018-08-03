import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css'

import Home from './components/Home';
import Other from './components/Other';
import Clock from './components/Clock';




class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          name: 'zhang'
      }
  }
  handleClick(name,e) {
      console.log(e.target);
      console.log(name);
  }
  render() {
    return (
            <BrowserRouter>
                    <div>
                        <Route path="/" exact  component={Home} />
                        <Route path="/clock"  component={Clock} />
                        <Route path="/other" component={Other} />
                    </div>
            </BrowserRouter>
    );
  }
}

export default App;
