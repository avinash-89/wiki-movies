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

function AllRoutes() {
    return (
        <>
        <BrowserRouter>
            <Routes >
            <Route path='/' element = {<Home/>} >
            <Route path='/login' element={<Login/>} />
            </Route>


            <Route path='*' element={<NotFound/>} />
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default AllRoutes;