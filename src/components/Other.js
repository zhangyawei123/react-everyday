import React, {Component} from 'react';
import { Input, Button,Select,Table,Pagination } from 'element-react'


class Other extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    slecChange(value) {
        console.log(value)
        this.setState({
            value
        })
    }
    showMes() {
        console.log(this.state.value)
    }
    render() {
        return (
            <div>
                <Pagination layout="prev, pager, next,jumper,total" total={50} pageSize={5} currentPage={3} onCurrentChange={this.slecChange.bind(this)} />
                <Button onClick={this.showMes.bind(this)}>clicke</Button>
            </div>
        );
    }
}

export default Other;
