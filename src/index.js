import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {Provider} from 'react-redux'
import App from './components/App/App';
import {HashRouter} from "react-router-dom";
import {store} from "./redux/store";
import './firebase'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
);
