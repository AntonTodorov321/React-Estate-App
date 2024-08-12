import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/authContext";
import { toast } from "react-toastify";

export default function GuestGuard() {
    const { isAuthenticated } = useContext(AuthContext);
    const [isRedirecting, setIsRedirecting] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            toast.info('You are already authenticated');

            setTimeout(() => {
                navigate(-1, { replace: true });
            }, 800);
        } else {
            setIsRedirecting(false);
        }
    }, [isAuthenticated, navigate]);

    if (isRedirecting) {
        return null;
    };

    return <Outlet />;
};