import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import LoginForm from './Pages/LoginForm';
import Navigation from './Pages/Navbar';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Fee from './Pages/Fee';
import FeeStatus from './Pages/FeeStatus';
import AuthContext from './store/AuthContext';
import Record from './Pages/Record'
import DetailPage from './Pages/DetailPage'
import Student from './Pages/Student';
import NotFound from './Pages/NotFound';
import Source from './Pages/Source';
function App() {
  const authCtx = useContext(AuthContext);

  if (authCtx.token) {
    try {
      fetchData()
      async function fetchData() {
        await axios.post('https://fmtfee.herokuapp.com/user/me', {}, {
          headers: {
            'Authorization': `Bearer ${authCtx.token}`
          }
        })
      }
    } catch (err) {
      authCtx.logout()
    }
  }
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={'/'} element={!authCtx.isLogIn ? <LoginForm /> : <Source />} />
        {authCtx.isLogIn && <> <Route path={'/fee'} element={<Fee />} />
          <Route path={'/feestatus'} element={<FeeStatus />} />
          <Route path={'/student'} element={<Student />} />
          <Route path={'/record'} element={<Record />} />
          <Route path={'/record/:id'} element={<DetailPage />} /> </>}
        <Route path={'*'} element={< NotFound />} />
      </Routes>
    </>
  );
}

export default App
