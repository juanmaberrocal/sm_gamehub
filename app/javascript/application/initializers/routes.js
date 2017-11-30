import LoginContainer  from "../components/login/LoginContainer";
import SignupContainer from "../components/signup/SignupContainer";

import PrivateTest from "../components/privatetest/PrivateTest";
import RegistrationContainer from "../components/registration/RegistrationContainer";

export const publicRoutes = [
    {
        exact: true,
        path: "/login",
        component: LoginContainer
    },
    {
        exact: true,
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
    },
    {
        exact: true,
        strict: true,
        path: "/registration",
        component: RegistrationContainer
    }
];

export const publicRoot = publicRoutes[0].path;
export const privateRoot = privateRoutes[0].path;
export const registrationRoot = privateRoutes[1].path;

export const isPublicRoute = (route) => {
    return publicRoutes.map(route => route.path).indexOf(route) !== -1;
};

export const isPrivateRoute = (route) => {
    return privateRoutes.map(route => route.path).indexOf(route) !== -1;
};
