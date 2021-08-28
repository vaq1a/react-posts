import Posts from "../pages/Posts";
import About from "../pages/About";
import PostItemId from "../pages/PostItemId";
import Login from "../pages/Login";

export const privateRoute = [
    {
        path: '/posts',
        Component: Posts,
        exact: true
    },
    {
        path: '/posts/:id',
        Component: PostItemId,
        exact: true
    },
    {
        path: '/about',
        Component: About,
        exact: false
    },

]

export const publicRoute = [
    {
        path: '/login',
        Component: Login,
        exact: false
    }
]