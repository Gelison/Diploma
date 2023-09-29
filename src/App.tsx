import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/layout/layout';

import { EmailActivation } from './pages/EmailActivation';
import { Trends } from './pages/Trends';
import { Settings } from './pages/Settings';
import { Favorites } from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

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
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
