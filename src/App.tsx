import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Main } from './pages/MainPage/mainPage';
// import { About } from './pages/Aboutpage';
// import { Blogpage } from './pages/Blogpage';
// import { Notfoundpage } from './pages/Notfoundpage';

function App() {
  return (
    <>
      <header>
        <a href='/'>Home</a>
        <a href='/posts'>Blog</a>
        <a href='/about'>About</a>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Blog</Link>
        <Link to='/about'>About</Link>
      </header>
      <div>
        <h1>Get started with React-Router 6</h1>
      </div>
      <Routes>
        {/* <Route path='/' element={<Main />} /> */}
        {/* <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Blogpage />} />
        <Route path='*' element={<Notfoundpage />} /> */}
      </Routes>
    </>
  );
}

export default App;
