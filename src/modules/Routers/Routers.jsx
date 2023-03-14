import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import PhoneBook from 'pages/PhoneBook/PhoneBook';
import NotFound from 'pages/NotFound/NotFound';
import Registration from 'pages/RegistrationPage/RegistrationPage';
import Login from 'pages/Login/Login';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRouter/PublicRoute';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PublicRoute />}>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/contacts" element={<PhoneBook />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routers;
