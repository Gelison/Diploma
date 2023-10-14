import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className=''>
      This page doesn`t exist <Link to='/'>Home</Link>
    </div>
  );
};

export { NotFoundPage };
