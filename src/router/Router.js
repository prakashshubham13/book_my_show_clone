import {createBrowserRouter} from 'react-router-dom';
import SeatLayout from '../pages/SeatLayoutContainer/SeatLayout';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <SeatLayout/>,
    },
    {
        path: "/seatlayout",
        element: <SeatLayout/>,
      },
  ]);
