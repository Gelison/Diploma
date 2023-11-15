import noFavor from '../../assets/favouritesPageAssets/noFavor.svg';

export function NoFavourites() {
  return (
    <div className=' '>
      <img
        className=' flex justify-center m-auto -mt-32'
        src={noFavor}
        alt='not found'
      />
      <div className='flex justify-center m-auto mt-3'>
        You have no favourites yet
      </div>
    </div>
  );
}
