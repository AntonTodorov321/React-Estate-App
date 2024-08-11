import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import * as authService from '../../services/authService';
import { Path } from "../../paths";
import { AuthContext } from "../../contexts/authContext";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        try {
            authService.logout()
                .then(() => {
                    logoutHandler();
                    navigate(Path.Home);
                })
                .catch(() => navigate(Path.Home));
        } catch (err) {
            toast.error('An error occurred: ' + err.message);
        };
    }, []);

    return null;
};