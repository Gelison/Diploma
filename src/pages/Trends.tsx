import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Film } from '../API/film/types';
import FilmItem from '../components/FilmItem/FilmItem';

export function TrendsPage() {
  const [films, setFilms] = useState<Film[]>([]);
  const [height, setHeight] = useState<number>(1024);
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();

  const newContentHeight = height;

  useEffect(() => {
    document.addEventListener('scroll', srclHandler);
    document.documentElement.style.height = newContentHeight + 'px';
    document.body.style.height = newContentHeight + 'px';
    return function () {
      document.removeEventListener('scroll', srclHandler);
    };
  }, [height]);

  const srclHandler = (e: Event) => {
    const target = e.target as Document;
    setHeight(target.documentElement.scrollHeight);
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=966f2bf4&s=movie&page=${
          Math.floor(Math.random() * 50) + 1
        }`
      );
      setFilms(response.data.Search);
    })();
  }, []);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleSearchInputConfirm = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/?s=${inputValue}&page=1`);
    }
  };

  return (
    <div>
      <div className=''>
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
