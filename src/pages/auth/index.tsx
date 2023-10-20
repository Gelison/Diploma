import { useNavigate } from 'react-router-dom';
import { SingInPage } from './SingInPage';
// import { SingUpPage } from './SingUpPage';
import { useAppDispatch, useAppSelector } from '../../uilse/hooks/useAuth';
// import { AppErrors } from '../../uilse/errors';
import { loginUser } from '../../store/thunks/auth';
import { ILoginValues } from '../../API/auth/type';

const AuthRootPage: React.FC = (): JSX.Element => {
  // const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const initialValues = { email: '', password: '' };

  const onSubmit = (values: ILoginValues) => {
    console.log(values);
  };

  const loading = useAppSelector((state) => state.auth.isLoading);

  const handleSubmitForm = async (data: ILoginValues) => {
    // if (location.pathname === '/login') {
    try {
      await dispatch(loginUser(data));
      navigate('/');
    } catch (e) {
      return e;
    }
    // } else {
    //   if (data.password === data.confirmPassword) {
    //     try {
    //       const userData = {
    //         firstName: data.name,
    //         username: data.username,
    //         email: data.email,
    //         password: data.password,
    //       };
    //       await dispatch(registerUser(userData));
    //       navigate('/');
    //     } catch (e) {
    //       console.log(e);
    //       return e;
    //     }
    //   } else {
    //     throw new Error(AppErrors.PasswordDoNotMatch);
    //   }
    // }
  };

  return (
    <div className=''>
      <SingInPage
        initialValues={initialValues}
        navigate={navigate}
        loading={loading}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthRootPage;

// {location.pathname === '/login' ? (

// : location.pathname === '/register' ? (
//   <SingUpPage
//   // navigate={navigate}
//   // register={register}
//   // errors={errors}
//   // loading={loading}
//   />
// ) : null}
