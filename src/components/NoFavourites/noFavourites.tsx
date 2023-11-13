import noFavor from '../../assets/background/noFavor.svg';

export function NoFavourites() {
  return (
    <div className=''>
      <img className='' src={noFavor} alt='not found' />
      <div className=''>You have no favourites yet</div>
    </div>
  );
}
