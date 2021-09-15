import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'element-theme-default';
import App from './page/app';
// import { ConfigProvider } from 'antd';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

ReactDOM.render(<App />, document.getElementById('root'));
