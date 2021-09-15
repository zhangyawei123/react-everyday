import React, {Component} from 'react';
import {Button} from 'antd'

class Login extends Component {
    login() {
      const { history} = this.props
      history.push('/')
    }
    render() {
        return (
            <div>
                这里是一个登陆野蛮
                <Button onClick={this.login.bind(this)}>login</Button>
            </div>
        );
    }
}

export default Login;
