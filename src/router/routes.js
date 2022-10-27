import Blog from "../pages/Blog/Blog";
import Checkout from "../pages/Checkout/Checkout";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CourseDetail from "../pages/Courses/CourseDetail";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("./Main");


const routes = createBrowserRouter([
    {
        element: <Main/>,
        path: '/',
        errorElement: <ErrorPage/>,
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
                path: '/courses',
                loader: () => fetch("https://assignment-10-dev-one.vercel.app/courses"),
                element: <Courses/>
            },
            {
                path: '/faq',
                element: <Faq/>
            },
            {
                path: '/blogs',
                element: <Blog/>
            },
            {
                path: '/courses/:id',
                element: <CourseDetail/>,
                loader: ({params}) => fetch(`https://assignment-10-dev-one.vercel.app/courses/${parseInt(params.id)}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout/></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-10-dev-one.vercel.app/courses/${parseInt(params.id)}`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile/></PrivateRoute>
            }
        ]
    }
])

export default routes;