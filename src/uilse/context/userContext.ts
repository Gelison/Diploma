import React, { useContext, useState } from 'react';
import { User } from '../user';

type UserContextValueType = {
  user: User;
  changeUser: (theme: User) => void;
};

const defaultContextTypeValue: UserContextValueType = {
  user: {
    username: '',
    email: '',
    password: '',
    films: [],
  },
  changeUser: () => {},
};

export const useInitUserContext = () => {
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: '',
    films: [],
  });
  const changeUser = (newUser: User) => {
    setUser(() => newUser);
  };
  return {
    user,
    changeUser,
  };
};

export const UserContext = React.createContext<UserContextValueType>(
  defaultContextTypeValue
);

export const useUserContext = () => {
  const useUserContext = useContext(UserContext);
  return useUserContext;
};
