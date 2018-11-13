import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.css'

const selectedStyle = {
    backgroundColor: 'white',
    color: 'aqua'
}

class Header extends Component {
    render() {
        return (
            <Row gutter={24}>
                <Col span={12} className="menu-item">
                    <NavLink to='/' exact activeStyle ={selectedStyle}>主页</NavLink>
                </Col>
                <Col span={12} className="menu-item">
                    <NavLink to='/clock' activeStyle ={selectedStyle}>测试页</NavLink>
                </Col>
            </Row>
        );
    }
}

export default Header;
