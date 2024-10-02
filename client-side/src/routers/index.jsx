import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Login from "../pages/login";
import Homepage from "../pages/Homepage";

export const router = createBrowserRouter([
    {
        path:"/login",
        element: <Login />
    },
    {
        path:"/",
        element:<RootLayout/>,
        children:[
            {
                path:"",
                element:<Homepage/>
            }
        ]
    }
])