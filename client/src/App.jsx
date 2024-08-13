import { Routes, Route } from 'react-router-dom';

import { ToastContainer} from 'react-toastify'

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
import NotFound from './components/not-found/NotFound';
import GuestGuard from './components/guard/GuestGuard';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <Header />
                <ToastContainer
                    autoClose={1500}
                    draggable={true}
                    position="top-right"
                    theme="light" />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.AllEstates} element={<EstateList />} />

                    <Route element={<GuestGuard />}>
                        <Route path={Path.Login} element={<Login />} />
                        <Route path={Path.Register} element={<Register />} />
                    </Route>

                    <Route element={<AuthGuard />}>
                        <Route path={Path.AddEstate} element={<AddEstate />} />
                        <Route path='/estates/:estateId' element={<EstateDetails />} />
                        <Route path='/estates/edit/:estateId' element={<EditEstate />} />
                        <Route path={Path.Logout} element={<Logout />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </AuthProvider>
        </ErrorBoundary>
    );
};

export default App;
