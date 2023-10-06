import axios from 'axios';
// import { Movie } from './types';

export const getFilms = async (page: number) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=4e56c6b4&s=popular&page=${page}`
  );
  if (!response.data || response.status !== 200) return;
  return response.data;
};
