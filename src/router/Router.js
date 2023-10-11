import {createBrowserRouter} from 'react-router-dom';
import SeatLayout from '../pages/SeatLayoutContainer/SeatLayout';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/seatlayout",
        element: <SeatLayout/>,
      },
  ]);
