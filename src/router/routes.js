import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("./Main");


const routes = createBrowserRouter([
    {
        element: <Main/>,
        path: '/',
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    }
])

export default routes;