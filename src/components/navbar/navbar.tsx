import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/trends'>Trends</NavLink>

        <NavLink to='/favorites'>Favorites</NavLink>
        <NavLink to='/settings'>Settings</NavLink>
      </nav>
      <footer>© All Rights Reserved</footer>
    </>
  );
}
