const baseUrl = 'http://localhost:3030/users';

import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

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

function App() {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();

    const loginSubmitHandler = async (loginFormValues) => {
        const result = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            body: JSON.stringify(loginFormValues)
        }).then(data => data.json())

        setAuth(result);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (registerFormValues) => {
        console.log(registerFormValues);

        const result = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            body: JSON.stringify(registerFormValues)
        }).then(data => (data.json()));

        setAuth(result);
        navigate(Path.Home);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
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
                <Route path={Path.Logout} element={<EstateDetails />} />
                <Route path={Path.Register} element={<Register />} />
                <Route path='/estates/:estateId' element={<EstateDetails />} />
            </Routes>

            <Footer />
        </AuthContext.Provider>
    )
}

export default App
