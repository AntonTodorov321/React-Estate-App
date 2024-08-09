import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Path } from "../paths";
import * as authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accesToken');

        return {};
    });
    const navigate = useNavigate();

    const loginSubmitHandler = async values => {
        const result = await authService.login(values);

        localStorage.setItem('accessToken', result.accessToken);
        setAuth(result);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values);

        localStorage.setItem('accessToken', result.accessToken);
        setAuth(result);
        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        isAuthenticated: !!auth.email
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}