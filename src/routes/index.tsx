import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import { Home } from "../views/Home";
import { CarData } from "../views/CarData";

export const webRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/car-models',
                element: <CarData/>
            }
        ]
    }
])