import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './index.css'
import Test from '../test'


class home extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="home">
                    <Route path="/" component={Test} />
                </div>
            </BrowserRouter>
        );
    }
}

export default home;
