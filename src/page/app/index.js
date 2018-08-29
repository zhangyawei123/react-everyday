import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'antd/dist/antd.css'

import Home from '../home';
import Login from '../login';





class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={'container'}>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
