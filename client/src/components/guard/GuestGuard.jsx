import { useContext, useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { toast } from 'react-toastify';

import { AuthContext } from '../../contexts/authContext';
import Spinner from '../spinner/Spinner';

export default function GuestGuard() {
    const { isAuthenticated } = useContext(AuthContext);
    const [isRedirecting, setIsRedirecting] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            toast.info('You are already authenticated. Redirecting ...');
            setTimeout(() => {
                navigate(-1,);
            }, 1000);
        } else {
            setIsRedirecting(false);
        }
    }, [isAuthenticated, navigate]);

    if (isRedirecting) {
        return <Spinner/>;
    }

    return <Outlet />;
}
