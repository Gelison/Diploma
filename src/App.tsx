import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';

import { Home } from './pages/Home';
import { TrendsPage } from './pages/Trends';
import { Settings } from './pages/Settings';
import { Favourites } from './pages/Favorites';
import { SingleFilm } from './pages/SingleFilm';
import { ResetPassword } from './pages/auth/ResetPasswordPage';

import { NotFoundPage } from './pages/NotFoundPage';

import { SigninForm } from './pages/auth/singIn';
import { SignupForm } from './pages/auth/singUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PrivateRoute />}> */}
        <Route path='/' element={<Layout />}>
          <Route path='trends'>
            <Route index element={<TrendsPage />} />
          </Route>
          <Route path='favorites'>
            <Route index element={<Favourites />} />
          </Route>
          <Route path='settings'>
            <Route index element={<Settings />} />
          </Route>
          {/* </Route> */}
          <Route index element={<Home />} />
          <Route path='film/:imdbID' element={<SingleFilm />} />
        </Route>

        <Route path='singin' element={<SigninForm />} />
        <Route path='singup' element={<SignupForm />} />
        <Route path='/resetpassword' element={<ResetPassword />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
