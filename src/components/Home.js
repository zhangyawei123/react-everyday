import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import './home.css'


class Home extends Component {

    render() {
        return (
            <div>
                <NavLink to="/" activeClassName="selected">home</NavLink>
                <NavLink to="/other">other</NavLink>
                <NavLink to="/clock">clock</NavLink>
            </div>
        );
    }
}

export default Home;
