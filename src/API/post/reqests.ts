// import axios from 'axios';
// import { Movie } from './types';

// export const getPostById = async ({
//   imdbID,
//   onSuccess,
// }: {
//   imdbID: string;
//   onSuccess(data: Movie): void;
// }) => {
//   const response = await axios.get<Movie>(
//     `https://www.omdbapi.com/?i=${imdbID}&apikey=4e56c6b4&`
//   );
//   if (!response.data || response.status !== 200) return;
//   onSuccess(response.data);
// };
