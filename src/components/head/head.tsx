// import { Link } from 'react-router-dom';

import { logoLightIcon, Profil, SearchIcon } from '../../assets/index';
import { User } from '../userName/userName';

export const Head = () => {
  return (
    <div className=' flex  '>
      <div className='flex-none mb-14 cursor-pointer '>
        <img src={logoLightIcon} alt='' className='' />
      </div>
      <form className=' grow '>
        <div className='flex justify-center h-10  '>
          <input
            className=' w-3/4 rounded-lg border-2 border-primary'
            type='search'
            name='search'
            placeholder='Search'
            autoComplete='off'
          />
          <img
            src={SearchIcon}
            alt=''
            className=' h-6 w-6 cursor-pointer mt-2 -ml-8'
          />
        </div>
      </form>
      <div className=' flex-none'>
        <div className=' flex '>
          <img src={Profil} alt='' className=' h-12 w-12' />
          <h3 className=' font-semibold mx-5 my-2'>Guest</h3>
          <div className='content-center flex'>
            <User userName='Guest' />
          </div>
        </div>
      </div>
    </div>
  );
};
