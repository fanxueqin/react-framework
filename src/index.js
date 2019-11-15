
// import 'babel-polyfill'

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
// import { LocaleProvider } from 'antd';
import * as serviceWorker from './serviceWorker';
import * as stores from "./store";
import './index.css';
import App from './App';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './assets/style/antd.less';
import './assets/style/common.less';

moment.locale('zh-cn');

ReactDOM.render(
<Provider {...stores} locale={zhCN}>
      <ConfigProvider locale={zhCN}>
            <App />
      </ConfigProvider>
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
