import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import PhoneBook from 'pages/PhoneBook/PhoneBook';
import NotFound from 'pages/NotFound/NotFound';
import Registration from 'pages/RegistrationPage/RegistrationPage';
import Login from 'pages/Login/Login';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<PhoneBook />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Routers;
