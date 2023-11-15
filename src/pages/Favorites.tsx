import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NoFavourites } from '../components/NoFavourites/noFavourites';
import { Film } from '../API/film/types';
import FilmItem from '../components/FilmItem/FimItem';

export function Favourites() {
  // const [inputValue, setInputValue] = useState<string>('');
  // const navigate = useNavigate();
  const [films, setFilms] = useState<Film[]>([]);

  return (
    <div className=''>
      {films.length ? (
        films.map((film) => (
          <FilmItem
            favor={true}
            key={`${film.Title}-${film.Poster}`}
            film={film}
            setFilms={setFilms}
          />
        ))
      ) : (
        <NoFavourites />
      )}
    </div>
  );
}
