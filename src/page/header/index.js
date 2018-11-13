import React, {Component} from 'react';
import { Tag } from 'antd';

class Header extends Component {
    render() {
        return (
            <div>header组件 <Tag color="cyan">{this.props.name}</Tag></div>
        );
    }
}

export default Header;
