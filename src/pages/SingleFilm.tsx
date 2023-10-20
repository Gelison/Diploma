import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmInfo } from '../API/film/getFilmPoster';
import { Movie } from '../API/film/types';
import { FavoriteButton } from '../components/favoriteButton/favoriteButton';

export const SingleFilm = (): JSX.Element => {
  const { imdbID } = useParams<{ imdbID?: string }>();

  const [film, setFilm] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    const response = await getFilmInfo(imdbID as string);
    setFilm(response);
    setLoading(false);
  };

  if (!imdbID) {
    return <div>Invalid ID</div>;
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className=' fixed top-1/2 left-1/2'>
        <div
          className=' inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        >
          <span className='  !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'></span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <img src={film?.Poster} alt={film?.Title} />
      <FavoriteButton onClick={console.log} />
      <p>{film?.Genre}</p>
      <h1>{film?.Title}</h1>
      <div>
        <div>{film?.imdbRating}</div>
        <div>{film?.Runtime}</div>
      </div>
      <p>{film?.Plot}</p>
      <div>Year{film?.Year}</div>
      <div>Released{film?.Released}</div>
      <div>BoxOffice{film?.BoxOffice}</div>
      <div>Country{film?.Country}</div>
      <div>Production{film?.Production}</div>
      <div>Actors{film?.Actors}</div>
      <div>Director{film?.Director}</div>
      <div>Writers{film?.Writer}</div>
    </div>
  );
};
