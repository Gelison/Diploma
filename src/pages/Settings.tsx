import { Outlet } from 'react-router-dom';
import { Button } from '../components/button/button';
import { Switch } from '../components/Toggle/Toggle';
import { useTheme } from '../hooks/useTheme';
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
            <p>Name</p>
            <input type='text' className=' bg-graphite' />
          </div>

          <div>
            <p>Email</p>
            <input type='text' className=' bg-graphite' />
          </div>
        </div>
      </div>
      <div>
        <h3>Pasword</h3>
        <div className=' bg-dark'>
          <div>
            <p>Password</p>
            <input type='password' className=' bg-graphite' />
          </div>

          <div>
            <p>New password</p>
            <input type='password' className=' bg-graphite' />
          </div>
          <div>
            <p>Confirm password</p>
            <input type='password' className=' bg-graphite' />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3>Color mode</h3>
          <div className=' bg-dark'>
            <p>Dark</p>
            <p>Use dark theme</p>
            <Switch onClick={useTheme} />
          </div>
        </div>
      </div>
      <Button text='Save' disabled={false} onClick={hendlePrimariButtonClick} />

      <Outlet />
    </div>
  );
};
