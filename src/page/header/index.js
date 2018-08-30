import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>header组件 {this.props.name}</div>
        );
    }
}

export default Header;
