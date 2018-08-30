import React, {Component} from 'react';

class Clock extends Component {
    state = {
        date: new Date()
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

    tick () {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div className="clock">{this.state.date.toLocaleTimeString()}</div>
        );
    }
}

export default Clock;
