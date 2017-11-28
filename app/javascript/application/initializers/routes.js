import LoginContainer  from "../components/login/LoginContainer";
import SignupContainer from "../components/signup/SignupContainer";

import PrivateTest from "../components/privatetest/PrivateTest";

export const publicRoutes = [
    {
        extact: true,
        path: "/login",
        component: LoginContainer
    },
    {
        extact: true,
        path: "/signup",
        component: SignupContainer
    }
];

export const privateRoutes = [
    {
        exact: true,
        strict: true,
        path: "/",
        component: PrivateTest
    }
];

export const publicRoot = publicRoutes[0].path;
export const privateRoot = privateRoutes[0].path;

export const isPublicRoute = (route) => {
    return publicRoutes.map(route => route.path).indexOf(route) !== -1;
};

export const isPrivateRoute = (route) => {
    return privateRoutes.map(route => route.path).indexOf(route) !== -1;
};
