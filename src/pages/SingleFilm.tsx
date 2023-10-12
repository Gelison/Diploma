import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmInfo } from '../API/film/getFilmPoster';
// import { Route } from 'react-router-dom';
import { Movie } from '../API/film/types';

export const SingleFilm = (): JSX.Element => {
  const { imdbID } = useParams<{ imdbID?: string }>();

  if (!imdbID) {
    return <div>Invalid ID</div>;
  }

  const [film, setFilm] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    const response = await getFilmInfo(imdbID);
    setFilm(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={film?.Poster} alt={film?.Title} />

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
      {/* <div>Production{film.}</div> */}
      <div>Actors{film?.Actors}</div>
      <div>Director{film?.Director}</div>
      <div>Writers{film?.Writer}</div>
    </div>
  );
};
