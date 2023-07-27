import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Greeting from './src/componenets/Greeting'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' element={<Greeting/>}>
        <Route index path element={<Greeting/>}/>
      </Route>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
