import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import * as authService from './services/authService';
import { AuthContext } from './contexts/authContext';
import { Path } from './paths';

import Home from './components/home/Home';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import EstateList from "./components/estate-list/EstateList";
import AddEstate from "./components/add-estate/AddEstate";
import EstateDetails from "./components/estate-details/EstateDetails";
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';

function App() {
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

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
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        isAuthenticated: !!auth.email
    };

    return (
        <AuthContext.Provider value={values}>
            <Header />

            <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.AllEstates} element={<EstateList />} />
                <Route path={Path.AddEstate} element={<AddEstate />} />
                <Route path={Path.Login} element={<Login />} />
                <Route path={Path.Logout} element={<Logout />} />
                <Route path={Path.Register} element={<Register />} />
                <Route path='/estates/:estateId' element={<EstateDetails />} />
            </Routes>

            <Footer />
        </AuthContext.Provider>
    )
}

export default App
