import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css'

import './App.css'

import Home from './components/Home';
import Clock from "./components/Clock";
import Other from "./components/Other";





class App extends Component {
    state = {
        collapsed: false,
    }

    render() {
    return (
            <BrowserRouter>
                <div>
                    <div className={'container'}>
                        <div className={'menubar'}>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}
                            >
                                <Menu.Item key="1">
                                    <NavLink to="/clock">
                                        <Icon type="pie-chart" />
                                        <span>cloke</span>
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <NavLink to="/other">
                                        <Icon type="desktop" />
                                        <span>other</span>
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <NavLink to="/">
                                        <Icon type="desktop" />
                                        <span>home</span>
                                    </NavLink>
                                </Menu.Item>
                            </Menu>
                        </div>
                        <Route path="/" exact component={Home} />
                        <Route path="/clock" exact component={Clock} />
                        <Route path="/other" component={Other} />
                    </div>
                </div>
            </BrowserRouter>
    );
  }
}

export default App;
