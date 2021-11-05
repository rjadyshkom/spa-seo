import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(
        <React.StrictMode>
            <BrowserRouter>
                <HelmetProvider>
                    <App/>
                </HelmetProvider>
            </BrowserRouter>
        </React.StrictMode>, rootElement);
} else {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <HelmetProvider>
                    <App/>
                </HelmetProvider>
            </BrowserRouter>
        </React.StrictMode>, rootElement);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
