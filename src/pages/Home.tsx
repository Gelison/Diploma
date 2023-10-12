import { useState, useEffect } from 'react';
import { getFilms } from '../API/film/getFilms';
import { ShowMoreButton } from '../components/showMoreButton/showMoreButton';
import { Link } from 'react-router-dom';
// import { notFoundPoster } from '../assets';
import { Films } from '../API/film/types';

export const Home = () => {
  const [films, setFilms] = useState<Films[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const onClick = () => {
    setPage((prev) => prev + 1);
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await getFilms(page);
    if (films.length > 0) {
      setFilms((prev) => prev.concat(response.Search));
    } else {
      setFilms(response.Search);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchData();
    }
  }, [page]);

  console.log(films);

  return (
    <div className='-mt-64 pl-80'>
      <div className=' flex flex-wrap '>
        {films.map((film) => (
          <Link key={film.imdbID} to={`/film/${film.imdbID}`} className=' ml-3'>
            <img
              src={film.Poster}
              alt=''
              className=' h-80 w-60 rounded-2xl cursor-pointer'
            />
            <h2 className='w-60 text-base font-bold'>{film.Title}</h2>
            <p>ganres</p>
          </Link>
        ))}
      </div>

      <div className=' flex justify-center'>
        <ShowMoreButton text='Show More' onClick={onClick} />
      </div>
    </div>
  );
};
