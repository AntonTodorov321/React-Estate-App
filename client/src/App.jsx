import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './contexts/authContext';
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
import EditEstate from './components/edit-estate/EditEstate';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guard/AuthGuard';

function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.AllEstates} element={<EstateList />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />

                    <Route element={<AuthGuard />}>
                        <Route path={Path.AddEstate} element={<AddEstate />} />
                        <Route path='/estates/:estateId' element={<EstateDetails />} />
                        <Route path='/estates/edit/:estateId' element={<EditEstate />} />
                        <Route path={Path.Logout} element={<Logout />} />
                    </Route>
                </Routes>

                <Footer />
            </AuthProvider>
        </ErrorBoundary>
    );
};

export default App;
