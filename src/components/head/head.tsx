import { useNavigate } from 'react-router-dom';
import { logoIcon, Profil } from '../../assets/index';
import { Search } from '../search/search';

export const Head = () => {
  const navigate = useNavigate();
  return (
    <div className=' flex'>
      <div className='flex-none mb-14 cursor-pointer '>
        <img src={logoIcon} alt='' onClick={() => navigate('/')} />
      </div>
      <Search />

      <div className=' flex-none'>
        <div
          className=' flex cursor-pointer '
          onClick={() => navigate('/singin')}
        >
          <img src={Profil} alt='' className=' h-12 w-12' />
          <h3 className=' font-semibold mx-5 my-2'>Guest</h3>
          <div className='content-center flex'></div>
        </div>
      </div>
    </div>
  );
};
