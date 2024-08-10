import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import { Path } from "../paths";
import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = usePersistedState('auth', {});
    const navigate = useNavigate();

    const loginSubmitHandler = async values => {
        const result = await authService.login(values);

        setAuth(result);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values);

        setAuth(result);
        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem('auth');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        isAuthenticated: !!auth.email,
        userId: auth._id
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}