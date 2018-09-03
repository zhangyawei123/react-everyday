import React, {Component} from 'react';
import { Button ,Input } from 'antd';
import axios from 'axios'

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            arr: [],
            inputValue: 'input'
        }
    }
    componentWillMount() {

    }
    componentDidMount() {
        axios.get('http://192.168.1.20:9428/api/warn_info').then(res=> {
            console.log(res.data)
            this.setState({
                arr: res.data
            });
        })
        console.log(this.refs.demo)
        this.refs.demo.onclick = () => {
            console.log(this.refs.demo)
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

    listcs() {
        if (this.state.loading) {
            return <div>loadng</div>
        }
    }
    render() {
        let ifelse = null;
        if(this.state.loading) {
            ifelse = <div>条件判断</div>
        }else{
            ifelse = ''
        }
        return (
                <div>
                    <Button type="primary" onClick={this.handleClick.bind(this)} shape="circle" icon="search" />
                    <Input placeholder="Basic usage" value={this.state.inputValue} onChange={this.inputHandleChange.bind(this)} />
                    <ul>
                        <p ref="demo">列表渲染</p>
                        {this.state.arr.map((item,index)=> {
                            return <li key={index}>{item.event}</li>
                        })}
                    </ul>
                    {ifelse}
                </div>
        );
    }
}

export default Test;
