import axios from 'axios';
// import { Movie } from './types';

export const getFilmInfo = async (id: string) => {
  const response = await axios.get(
    `http://omdbapi.com/?apikey=4e56c6b4&i=${id}`
  );
  if (!response.data || response.status !== 200) return;
  return response.data;
};
