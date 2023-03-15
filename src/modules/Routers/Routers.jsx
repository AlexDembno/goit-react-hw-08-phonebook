import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from 'modules/Layout/Layout';
import Loader from 'modules/Loader/Loader';

import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRouter/PublicRoute';

const Home = lazy(() => import('pages/Home/Home'));
const PhoneBook = lazy(() => import('pages/PhoneBook/PhoneBook'));
const Registration = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const Login = lazy(() => import('pages/Login/Login'));

function Routers() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<PhoneBook />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Routers;
