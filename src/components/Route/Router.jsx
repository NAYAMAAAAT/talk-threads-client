import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Add from "../Add";
import Update from "../Update";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
        
            {
                path: '/addCoffee',
                element: <Add></Add>
            },
            {
                path: '/updateCoffee',
                element: <Update></Update>
            },
        ]
    }
])

export default router;