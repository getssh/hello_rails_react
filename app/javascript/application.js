import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Greeting from './src/componenets/Greeting'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Greeting />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
