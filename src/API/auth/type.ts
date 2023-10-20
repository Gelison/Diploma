import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface ILoginValues {
  email: string;
  password: string;
}

export interface IPropsLogin {
  navigate: (to: string) => void;
  initialValues: ILoginValues;
  loading: boolean;
  onSubmit: (values: ILoginValues) => void;
}

export interface IPropsRegister<
  TFieldValues extends FieldValues = FieldValues,
> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  loading: boolean;
}

export interface IAuthState {
  user: {
    user: IPublicUser;
    token: string;
  };
  isLogged: boolean;
  isLoading: boolean;
}

export interface IPublicUser {
  id: number | null;
  firstName: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  // watchlist: [IWatchlist];
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  firstName: string;
  username: string;
}
