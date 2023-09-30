import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  TrendsIcon,
  FavoritesIcon,
  SettingsIcon,
} from '../../assets/index';

export function NavBar() {
  return (
    <>
      <div className='flex basis-auto text-secondary '>
        <nav className={' flex-col flex space-y-6 '}>
          <NavLink to='/' className={' hover:text-primary flex'}>
            <img src={HomeIcon} alt='' className=' w-6 h-6 ' />
            <h3 className='font-sans text-xl px-5'>Home</h3>
          </NavLink>
          <NavLink to='/trends' className={' hover:text-primary flex'}>
            <img src={TrendsIcon} alt='' className=' w-6 h-6 ' />
            <h3 className='font-sans text-xl px-5'>Trends</h3>
          </NavLink>

          <NavLink to='/favorites' className={' hover:text-primary flex'}>
            <img src={FavoritesIcon} alt='' className=' w-6 h-6' />
            <h3 className='font-sans text-xl px-5'>Favorites</h3>
          </NavLink>
          <NavLink to='/settings' className={' hover:text-primary flex'}>
            <img src={SettingsIcon} alt='' className=' w-6 h-6' />
            <h3 className='font-sans text-xl px-5'>Settings</h3>
          </NavLink>
          <div>
            <footer className=' font-sans text-xs'>
              © All Rights Reserved
            </footer>
          </div>
        </nav>
      </div>
    </>
  );
}
