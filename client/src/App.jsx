const baseUrl = 'http://localhost:3030/users/login';

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

function App() {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();

    const loginSubmitHandler = async (loginFormValues) => {
        let result = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(loginFormValues)
        });

        setAuth(result);
        navigate(Path.Home);
    };

    return (
        <AuthContext.Provider value={loginSubmitHandler}>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/all-estates' element={<EstateList />} />
                <Route path='/add-estate' element={<AddEstate />} />
                <Route path='/estates/:estateId' element={<EstateDetails />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<EstateDetails />} />
            </Routes>

            <Footer />
        </AuthContext.Provider>
    )
}

export default App
