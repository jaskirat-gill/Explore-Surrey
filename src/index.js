import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './routes/App';
import ErrorPage from './routes/ErrorPage';
import ReadMore from './routes/ReadMore';
import Map from './routes/Map';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage /> 
  },
  {
    path: "/readmore",
    element: <ReadMore />,
  },
  {
    path: "/map",
    element: <Map />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();