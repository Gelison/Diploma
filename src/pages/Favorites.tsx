import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NoFavourites } from '../components/NoFavourites/noFavourites';
import { Film } from '../API/film/types';
import FilmItem from '../components/FilmItem/FilmItem';
import { useUserContext } from '../uilse/context/userContext';
import { User } from '../uilse/user';

export function Favourites() {
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();
  const [films, setFilms] = useState<Film[]>([]);
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      const data = localStorage.getItem(user.email);
      if (data) {
        const parsedData: User = JSON.parse(data);
        setFilms((prevFilms) => [...prevFilms, ...parsedData.films]);
      }
    }
    return;
  }, []);

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
