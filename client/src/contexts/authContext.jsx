import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import { toast } from "react-toastify";

import { Path } from "../paths";
import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = usePersistedState('auth', {});
    const navigate = useNavigate();

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values);
            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);
        } catch (err) {
            toast.error('An error occurred: ' + err.message);
        };
    };

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authService.register(values);
            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);
        } catch (err) {
            toast.error('An error occurred: ' + err.message);
        };
    };

    const logoutHandler = async () => {
        try {
            setAuth({});
            localStorage.removeItem('accessToken');
        } catch (err) {
            toast.error('An error occurred: ' + err.message);
        };
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