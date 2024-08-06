import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/Home';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import EstateList from "./components/estate-list/EstateList";
import AddEstate from "./components/add-estate/AddEstate";
import EstateDetails from "./components/estate-details/EstateDetails";
import Login from './components/login/Login';

function App() {
    return (
        <>
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
        </>
    )
}

export default App
