import { FilmArr } from '../API/film/types';

export type User = {
  username: string;
  email: string;
  password: string;
  films: FilmArr[];
};
export function SignUpUser() {
  const userObj: User = {
    username: '',
    email: '',
    password: '',
    films: [],
  };
  return userObj;
}
