import { useContext, useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { toast } from 'react-toastify';

import { AuthContext } from '../../contexts/authContext';
import Spinner from '../spinner/Spinner';
import { Path } from '../../paths';

export default function GuestGuard() {
    const { isAuthenticated } = useContext(AuthContext);
    const [isRedirecting, setIsRedirecting] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let redirectTimeout;
        let showToast;

        if (isAuthenticated) {
            showToast = setTimeout(() => {
                toast.info('You are already authenticated. Redirecting ...');
            }, 100);

            redirectTimeout = setTimeout(() => {
                navigate(-1);
            }, 1000);
        } else {
            setIsRedirecting(false);
        }

        return () => {
            clearTimeout(redirectTimeout);
            clearTimeout(showToast);
        };
    }, [isAuthenticated, navigate]);

    if (isRedirecting) {
        return <Spinner />;
    }

    return <Outlet />;
}
