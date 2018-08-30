import React, {Component} from 'react';
import { Button ,Input } from 'antd';


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            arr: [1,2,3,4],
            inputValue: 'input'
        }
    }


    handleClick() {
        alert(33)
    }
    inputHandleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (
                <div>
                    <Button type="primary" onClick={this.handleClick.bind(this)} shape="circle" icon="search" />
                    <Input placeholder="Basic usage" value={this.state.inputValue} onChange={this.inputHandleChange.bind(this)} />
                    {this.state.inputValue}
                </div>
        );
    }
}

export default Test;
