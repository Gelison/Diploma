// import { Link } from 'react-router-dom';

import { logoLightIcon } from '../../assets/index';
import AVATAR from '../../assets/icons/Group 22.svg';
import { User } from '../userName/userName';

export const Head = () => {
  return (
    <div>
      <div>
        <img src={logoLightIcon} alt='stiff' />
      </div>
      <div>
        <div>
          <img src={AVATAR} alt='' />
          Guest
          <User userName='Guest' />
        </div>
      </div>
      <div></div>
    </div>
  );
};
