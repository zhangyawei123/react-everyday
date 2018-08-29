import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import './home.css'


class Home extends Component {
    render() {
        return (
                <div>
                    <NavLink to="/login">login</NavLink>
                </div>
        );
    }
}

export default Home;
