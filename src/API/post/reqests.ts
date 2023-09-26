import axios from 'axios';
import { Post } from './types';

export const getPostById = async ({
  imdbID,
  onSuccess,
}: {
  imdbID: string;
  onSuccess(data: Post): void;
}) => {
  const response = await axios.get<Post>(
    `https://www.omdbapi.com/?apikey=4e56c6b4&${imdbID}`
  );
  if (!response.data || response.status !== 200) return;
  onSuccess(response.data);
};
