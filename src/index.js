import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {Provider} from 'react-redux'
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store";
import './firebase'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
