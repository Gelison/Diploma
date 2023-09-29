import { Outlet } from 'react-router-dom';
import { NavBar } from '../navbar/navbar';
import { Head } from '../head/head';

const Layout = () => {
  return (
    <>
      <div>
        <div>
          <Head />
        </div>
        <div>
          <NavBar />
        </div>
      </div>
      <Outlet />
    </>
  );
};
export { Layout };
