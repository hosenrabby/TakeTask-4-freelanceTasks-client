import { createBrowserRouter } from "react-router";
import HomeLayout from "../Home/HomeLayout";
import Home from "../Pages/Home/Home";
import AddTask from "../Pages/AddTask/AddTask";
import MyPostedTasks from "../Pages/MyPostedTasks/MyPostedTasks";
import BrowseTask from "../Pages/BrowseTask/BrowseTask";
import ContactUs from "../Pages/ContactUs/ContactUs";
import TaskDetails from "../Pages/TaskDetails/TaskDetails";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import UpdatePost from "../Pages/MyPostedTasks/UpdatePost";
import PrivateRoute from "../Private/PrivateRoute";
import ErrorPage from "../Pages/Error/ErrorPage";
import Loader from "../Pages/Loader";


const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        loader: async () => {
          const taskData = await fetch('https://freelance-task-marketplace-sarver.vercel.app/all-tasks').then(res => res.json());
          const category = await fetch('https://freelance-task-marketplace-sarver.vercel.app/all-category').then(res => res.json());
          return { taskData, category };
        },
        hydrateFallbackElement:<Loader></Loader>,
        element: <Home />,
      },
      {
        path: '/browse-tasks',
        loader: async () => {
          const taskData = await fetch('https://freelance-task-marketplace-sarver.vercel.app/all-tasks').then(res => res.json());
          const category = await fetch('https://freelance-task-marketplace-sarver.vercel.app/all-category').then(res => res.json());
          return { taskData, category };
        },
        hydrateFallbackElement:<Loader></Loader>,
        element: <BrowseTask />,
      },
      {
        path: '/my-posted-tasks',
        loader: async () => {
          const taskData = await fetch('https://freelance-task-marketplace-sarver.vercel.app/all-tasks').then(res => res.json());
          const category = await fetch('https://freelance-task-marketplace-sarver.vercel.app/all-category').then(res => res.json());
          return { taskData, category };
        },
        hydrateFallbackElement:<Loader></Loader>,
        element: <PrivateRoute><MyPostedTasks /></PrivateRoute>
      },
      {
        path: '/tasks-details/:id',
        loader: ({ params }) => fetch(`https://freelance-task-marketplace-sarver.vercel.app/task-details/${params.id}`),
        hydrateFallbackElement:<Loader></Loader>,
        element: <PrivateRoute><TaskDetails /></PrivateRoute>
      },
      { 
        path: '/update-task/:id', 
        loader: ({ params }) => fetch(`https://freelance-task-marketplace-sarver.vercel.app/task-details/${params.id}`),
        hydrateFallbackElement:<Loader></Loader>,
        element: <PrivateRoute><UpdatePost /></PrivateRoute> 
      },
      { path: '/add-task', element: <PrivateRoute><AddTask /></PrivateRoute> },
      { path: '/sign-up', element: <Register /> },
      { path: '/login', element: <Login /> },
      { path: '/contact-us', element: <ContactUs /> },
      { path: "/*", element: <ErrorPage/> },
    ],
  },
]);


export default Router;