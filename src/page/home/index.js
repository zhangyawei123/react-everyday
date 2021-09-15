import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import './index.css'
import Test from '../test'
import Header from '../header'
import Clock from '../../components/Clock'

class home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <Route path="/" exact component={Test} />
                <Route path="/clock" component={Clock} />
                <div><Link to="/login">登录</Link></div>
                <div><Link to="/book">book</Link></div>
            </div>
        );
    }
}

export default home;
