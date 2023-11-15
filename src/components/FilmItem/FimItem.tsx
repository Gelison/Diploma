import React from 'react';
import noImage from '../../assets/paginationAssets/noImg.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Film } from '../../API/film/types';
import favorButton from '../../assets/favouritesPageAssets/favorButton.svg';
import trendsImg from '../../assets/trendsAssets/trendsFlame.svg';

const generateRandRate = () => {
  const random = Math.random() * 100;
  const rounded = Math.round(random);
  const result = rounded / 10;
  return result;
};

type Props = {
  film: Film;
  favor?: boolean;
  setFilms?: React.Dispatch<React.SetStateAction<Film[]>>;
  trends?: boolean;
};

export const FilmItem = ({ film, favor, trends }: Props) => {
  const [appear, setAppear] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const randomRate = generateRandRate();
  const randomTrendsRate = (Math.random() * 3 + 7).toFixed(1);
  const navigate = useNavigate();

  const handleImgError = () => {
    setImageError(true);
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
    <div className=' pl-6'>
      {trends ? (
        <div className='absolute w-10 h-8 bg-primary rounded-md -mb-8 '>
          <div className='flex justify-center'>
            <img src={trendsImg} alt='flame' />
            <div>{randomTrendsRate}</div>
          </div>
        </div>
      ) : (
        <div className=' absolute w-8 h-8 bg-primary rounded-md -mb-8'>
          <div className='flex justify-center'>{randomRate}</div>
        </div>
      )}
      {favor ? (
        <img className='w-8 h-8' src={favorButton} alt='favorBtn' />
      ) : (
        ''
      )}
      {imageError ? (
        <img
          className=' h-80 w-60 rounded-2xl cursor-pointer'
          src={noImage}
          onClick={() => navigate(`/film/${film.imdbID}`)}
        />
      ) : (
        <img
          className=' h-80 w-60 rounded-2xl cursor-pointer'
          onError={handleImgError}
          src={film.Poster}
          onClick={() => navigate(`/film/${film.imdbID}`)}
        />
      )}
      <div className='w-60 text-base font-bold'>{film.Title}</div>
      <div className='w-30 text-base '>{film.Type}</div>
    </div>
  );
};

export default React.memo(FilmItem);
