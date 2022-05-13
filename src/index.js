import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'


let funct = (lala) => {
  console.log("desde index", lala);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <App bus_mayor={funct} />

      <p>Total Corozo: 0</p>
      <p>Total Zapote: 0</p>
      <p>Total Mongo: 0</p>
    </>
  </React.StrictMode>
);

