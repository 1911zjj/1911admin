import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'utils/axios.js'
React.Component.prototype.$axios=axios
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
