import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Film } from '../API/film/types';
import FilmItem from '../components/FilmItem/FimItem';

export function TrendsPage() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=4e56c6b4&s=movie&page=${
          Math.floor(Math.random() * 50) + 1
        }`
      );
      setFilms(response.data.Search);
    })();
  }, []);

  return (
    <div>
      <div className=' flex flex-wrap -mt-64 pl-80'>
        {films.map((elem) => (
          <FilmItem
            trends={true}
            key={`${elem.Title}-${elem.Poster}`}
            film={elem}
          />
        ))}
      </div>
    </div>
  );
}
