import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import './index.css'
import Test from '../test'
import Header from '../header'
import Clock from '../../components/Clock'

class home extends Component {
    state = {
        headerName: 'header属性'
    }
    render() {
        return (
            <div className="home">
                <Header name={this.state.headerName} />
                <Clock />
                <Route path="/" component={Test} />
                <div><Link to="/login">登录</Link></div>
            </div>
        );
    }
}

export default home;
