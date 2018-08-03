import React, {Component} from 'react';
import {BrowserRouter, Route, Link,NavLink} from 'react-router-dom';
import './clock.css'
import Clock1 from "./Clock1";
import Clock2 from "./Clock2";


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <BrowserRouter basename="clock">
                <div>
                    <h1>这里是时钟父亲</h1>
                    <NavLink to="/">clock1</NavLink>
                    <NavLink to="/clock2" activeStyle={{fontWeight: 'bold',
                        color: 'aqua'}}>clock2</NavLink>
                    <Route path="/" exact component={Clock1} />
                    <Route path="/clock2" component={Clock2} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Clock;
