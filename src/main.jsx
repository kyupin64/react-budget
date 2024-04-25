import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ErrorPage from './ErrorPage';
import Home from './routes/home';
import Month from './routes/month';

// components outline: 
//    root:
//      title
//      dropdown menu opens onclick of nav button (use state for opened or not) (nested)
//        selection for budgets
//        selection for months within current budget
//    home page:
//      form to create new budget
//    month page
//      name of budget
//      month
//      button to show month overview (nested):
//        balance
//        income vs expense box
//      button to show transactions (nested):
//        scroll list of transactions (nested)
//        form to input new income/expense (nested)

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "month/:monthId",
        element: <Month />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
