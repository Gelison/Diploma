import { Outlet } from 'react-router-dom';
import { Button } from '../components/button/button';
// import {} from '../../src/assets/index';

export const Settings = () => {
  const hendlePrimariButtonClick = () => {
    console.log('clicked');
  };
  return (
    <div>
      <div>Settings</div>
      <Button text='Save' disabled={false} onClick={hendlePrimariButtonClick} />
      <Outlet />
    </div>
  );
};
