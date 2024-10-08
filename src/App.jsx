

import './App.scss'


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MasterLayout from "./Components/MasterLayout/MasterLayout.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import Home from "./Components/Home/Home.jsx";
import Cars from './Components/AllCars/AllCars.jsx';
import CarDetails from './Components/CarDetails/CarDetails.jsx';


function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "home/all-vehicles", element: <Cars /> },
        { path: "home/all-vehicles/:id", element: <CarDetails /> },
        // {
        //   path: "work",
        //   element: <Work />,
        //   children: [{ path: "graphic-design", element: <GraphicDesign /> }],
        // },
        // { path: "skills", element: <Skills /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App
