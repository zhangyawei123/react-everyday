import React, {Component} from 'react';
import { Button } from 'antd';


class Test extends Component {
    state = {
        loading: true
    }
    render() {
        return (
                <div>
                    <Button type="primary" block shape="circle" icon="search" />
                    <Button type="primary" block loading={this.state.loading} icon="search">Search</Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <br />
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button type="dashed" icon="search">Search</Button>
                </div>
        );
    }
}

export default Test;
