import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Detail from './pages/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
const basename = process.env.PUBLIC_URL;
const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  }
];

const router = createBrowserRouter(routes, {basename: basename});

root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
