import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import 'antd/dist/antd.css'

import Home from '../home';
import Login from '../login';
import Book from '../book/Book';
import javaBook from '../book/javaBook';
import webBook from '../book/webBook';





class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                  <Switch>
                  <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Book>
                      <Route path="/book/javabook" component={javaBook} />
                      <Route path="/book/webbook" component={webBook} />
                    </Book>
                  </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
