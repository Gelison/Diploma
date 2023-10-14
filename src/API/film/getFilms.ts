import axios from 'axios';

export const getFilms = async (page: number) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=4e56c6b4&s=love&page=${page}`
  );
  if (!response.data || response.status !== 200) return;
  return response.data;
};
