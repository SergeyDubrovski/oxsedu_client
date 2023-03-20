import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from './App';
//import './styles/index.css';
import {store} from './redux/store.js'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


/*
npx create-react-app .
npm i redux react-redux

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>oxsedu</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
*/

