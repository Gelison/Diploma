import { Outlet } from 'react-router-dom';
import { Button } from '../components/button/button';
import { Switch } from '../components/Toggle/Toggle';
import { useTheme } from '../uilse/hooks/useTheme';
// import {} from '../../src/assets/index';

export const Settings = () => {
  const hendlePrimariButtonClick = () => {
    console.log('clicked');
  };
  return (
    <div>
      <div>
        <h3>Profil</h3>
        <div className=' bg-dark'>
          <div>
            <form action=''>
              <p className=' text-secondary'>Name</p>
              <input type='text' className=' bg-graphite' />
            </form>
          </div>

          <div>
            <form action=''>
              <p className=' text-secondary'>Email</p>
              <input type='text' className=' bg-graphite' />
            </form>
          </div>
        </div>
      </div>
      <div>
        <h3>Pasword</h3>
        <div className=' bg-dark'>
          <div>
            <form action=''>
              <p className=' text-secondary'>Password</p>
              <input type='password' className=' bg-graphite' />
            </form>
          </div>

          <div>
            <form action=''>
              <p className=' text-secondary'>New password</p>
              <input type='password' className=' bg-graphite' />
            </form>
          </div>
          <div>
            <form action=''>
              <p className=' text-secondary'>Confirm password</p>
              <input type='password' className=' bg-graphite' />
            </form>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3>Color mode</h3>
          <div className=' bg-dark'>
            <p className=' text-secondary'>Dark</p>
            <p className=' text-secondary'>Use dark theme</p>
            <Switch onClick={useTheme} />
          </div>
        </div>
      </div>
      <Button text='Save' disabled={false} onClick={hendlePrimariButtonClick} />

      <Outlet />
    </div>
  );
};
