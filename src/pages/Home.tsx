import { useState, useEffect } from 'react';
import { getFilms } from '../API/film/getFilms';
import { ShowMoreButton } from '../components/showMoreButton/showMoreButton';
import { IMovieAPI } from '../types/film/types';
import { FilmItem } from '../components/FilmItem/FimItem';

export const Home = () => {
  const [films, setFilms] = useState<IMovieAPI[]>([]);
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

  return (
    <div>
      <div className=' flex flex-wrap -mt-64 pl-80'>
        {films !== undefined ? (
          films.map((film) => (
            <FilmItem key={`${film.Title}-${film.Poster}`} film={film} />
          ))
        ) : (
          <div>Фильмы не найдены!</div>
        )}
      </div>

      <div className=' flex justify-center'>
        <ShowMoreButton text='Show More' onClick={onClick} loading={loading} />
      </div>
    </div>
  );
};
