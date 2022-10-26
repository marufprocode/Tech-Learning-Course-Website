import Blog from "../pages/Blog/Blog";
import Checkout from "../pages/Checkout/Checkout";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
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
                path: '/course-detail',
                element: <CourseDetail/>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout/></PrivateRoute>
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
            },
        ]
    }
])

export default routes;