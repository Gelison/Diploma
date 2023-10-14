import { useState } from 'react';

import { logoLightIcon, Profil, SearchIcon } from '../../assets/index';
import { User } from '../userName/userName';
import { Search } from '../search/search';

export const Head = () => {
  return (
    <div className=' flex'>
      <div className='flex-none mb-14 cursor-pointer '>
        <img src={logoLightIcon} alt='' />
      </div>
      <Search />

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
