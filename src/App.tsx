import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';

import { Home } from './pages/Home';
import { Trends } from './pages/Trends';
import { Settings } from './pages/Settings';
import { Favorites } from './pages/Favorites';
import { SingleFilm } from './pages/SingleFilm';
import { SingInPage } from './pages/SingInPage';
import { SingUpPage } from './pages/SingUpPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';

import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='film/:imdbID' element={<SingleFilm />} />

          <Route path='trends'>
            <Route index element={<Trends />} />
          </Route>
          <Route path='favorites'>
            <Route index element={<Favorites />} />
          </Route>
          <Route path='settings'>
            <Route index element={<Settings />} />
          </Route>
        </Route>
        <Route path='singin' element={<SingInPage />} />
        <Route path='/resetpassword' element={<ResetPasswordPage />} />

        <Route path='/singup' element={<SingUpPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
