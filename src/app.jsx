import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './Content.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Content/>
        </BrowserRouter>
    </Provider>

    
);