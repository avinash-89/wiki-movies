import loadable from '@loadable/component';
import Loader from './loader';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

const Login = loadable(() => import('../screens/login'), {
    fallback: <Loader/>
});

const NotFound  = loadable(() => import('../screens/notFound'), {
    fallback: <Loader/>
});

const Home = loadable(() => import('../screens/home'), {
    fallback: <Loader/>
});

const Register = loadable(() => import('../screens/register/index.js'),{
    fallback: <Loader/>
});

function AllRoutes() {
    return (
        <>
        <BrowserRouter>
            <Routes >
            <Route path='/' element = {<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />


            <Route path='*' element={<NotFound/>} />
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default AllRoutes;