import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createBrowserHistory()
root.render(
    <Router history={history}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>
);
