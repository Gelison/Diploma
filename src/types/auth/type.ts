export interface ILoginValues {
  email: string;
  password: string;
}

export interface IPropsLogin {
  initialValues: ILoginValues;
  loading: boolean;
  onSubmit: (values: ILoginValues) => void;
}

export interface IRegisterValues {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

export interface IPropsRegister {
  handleChange: IRegisterValues;
  loading: boolean;
  onSubmit: (values: IRegisterValues) => void;
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
  username: string;
  email: string;
}
