import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './index.css'
import Test from '../test'
import Header from '../header'
import Clock from '../../components/Clock'


class home extends Component {
    state = {
        headerName: 'hahhaha'
    }
    render() {
        return (
            <BrowserRouter>
                <div className="home">
                    <Header name={this.state.headerName} />
                    <Clock />
                    <Route path="/" component={Test} />
                </div>
            </BrowserRouter>
        );
    }
}

export default home;
