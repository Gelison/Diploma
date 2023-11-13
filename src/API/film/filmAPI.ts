import axios from 'axios';
import { Props, FilmArr } from './types';

export async function getFilms({ currentPage, searchParams }: Props) {
  searchParams.delete('apikey');
  searchParams.delete('page');
  const response = axios.get(
    `http://www.omdbapi.com/?apikey=4e56c6b4&${
      searchParams || ''
    }&page=${currentPage}`
  );
  const answer: FilmArr = (await response).data;
  return answer;
}
