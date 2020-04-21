import TestPage from '../TestPage/TestPage'
const routes = [
    {
        path: "/",
        exact: true,
        auth: true,
        component: TestPage
    }
];

export default routes;