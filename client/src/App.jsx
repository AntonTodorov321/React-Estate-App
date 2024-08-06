const baseUrl = 'http://localhost:3030/users/login';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthContext } from './contexts/authContext';

import Home from './components/home/Home';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import EstateList from "./components/estate-list/EstateList";
import AddEstate from "./components/add-estate/AddEstate";
import EstateDetails from "./components/estate-details/EstateDetails";
import Login from './components/login/Login';

function App() {
    const [auth, setAuth] = useState({});

    const [loginFormValues, setLoginFormValues] = useState({
        email: '',
        password: ''
    });

    const loginSubmitHandler = () => {
        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(loginFormValues)
        }).then(data => data.json())
            .then(res => console.log(res));
    };

    const changeHandler = (e) => {
        setLoginFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const values = {
        loginSubmitHandler,
        changeHandler,
        loginFormValues,
    };

    return (
        <AuthContext.Provider value={values}>
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
