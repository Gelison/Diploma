import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Film, FilmArr } from '../../API/film/types';
import { useUserContext } from '../../uilse/context/userContext';
import { User } from '../../uilse/user';

const generateRandRate = () => {
  const random = Math.random() * 100;
  const rounded = Math.round(random);
  const result = rounded / 10;
  return result;
};

type Props = {
  film: Film;
  favor?: boolean;
  setFilms?: React.Dispatch<React.SetStateAction<FilmArr[]>>;
  trends?: boolean;
};

const FilmItem = ({ film, favor, setFilms, trends }: Props) => {
  const { user } = useUserContext();
  const [appear, setAppear] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const randomRate = generateRandRate();
  const randomTrendsRate = (Math.random() * 3 + 7).toFixed(1);
  const navigate = useNavigate();

  const handleImgError = () => {
    setImageError(true);
  };

  const handleClick = () => {
    const data = localStorage.getItem(user.email);
    if (data) {
      const parsedData: User = JSON.parse(data);
      const removedFilm = parsedData.films.findIndex(
        (elem) => elem.imdbID === film.imdbID
      );
      if (removedFilm !== -1) {
        parsedData.films.splice(removedFilm, 1);
        user.films.splice(removedFilm, 1);
        localStorage.setItem(user.email, JSON.stringify(parsedData));
      }
      if (setFilms)
        setFilms((prevFilms) =>
          prevFilms.filter((favorFilm) => favorFilm.Title !== film.Title)
        );
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setAppear(true);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [appear]);

  return (
    <div className=''>
      {trends ? (
        <div className=''>
          <img src='' alt='flame' />
          {randomTrendsRate}
        </div>
      ) : (
        <div className=''>{randomRate}</div>
      )}
      {favor ? (
        <img className='' src='' alt='favorBtn' onClick={handleClick} />
      ) : (
        ''
      )}
      {imageError ? (
        <img
          className=''
          src=''
          alt='alt'
          onClick={() => navigate(`/${film.imdbID}`)}
        />
      ) : (
        <img
          className=''
          onError={handleImgError}
          src={film.Poster}
          alt=''
          onClick={() => navigate(`/${film.imdbID}`)}
        />
      )}
      <div className=''>{film.Title}</div>
      <div className=''>{film.Type}</div>
    </div>
  );
};

export default React.memo(FilmItem);
