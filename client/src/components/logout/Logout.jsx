const baseUrl = 'http://localhost:3030/users';

import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { Path } from "../../paths";
import { AuthContext } from "../../contexts/authContext";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${baseUrl}/logout`)
            .then(() => {
                logoutHandler();
                navigate(Path.Home);
            })
            .catch(() => navigate(Path.Home));
    }, []);

    return (
        <></>
    )
}