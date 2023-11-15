import { useNavigate } from 'react-router-dom';
import { logoIcon } from '../../assets/index';
import { Formik, FormikHelpers } from 'formik';
import { LoginSchema } from '../../uilse/yap/yap';
import { Button } from '../../components/button/button';
import { ILoginValues } from '../../types/auth/type';

export const SigninForm = () => {
  const navigate = useNavigate();

  return (
    <div className=' bg-myimg w-screen h-screen bg-center'>
      <div className=' w-screen h-screen backdrop-opacity-10 backdrop-invert bg-black/50  '>
        <div className=' pt-12 pl-16 cursor-pointer'>
          <img src={logoIcon} alt='' onClick={() => navigate('/')} />
        </div>
        <div className=' w-[474px] h-[440px] bg-dark rounded-lg mx-auto my-10 '>
          <div className=''>
            <h3 className=' text-2xl  ml-[75px] py-8'>Sing In</h3>
            <form action='' className=' flex justify-center'>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validateOnBlur
                validationSchema={LoginSchema}
                onSubmit={(
                  values: ILoginValues,
                  { setSubmitting }: FormikHelpers<ILoginValues>
                ) => {
                  setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 500);
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  touched,
                  values,
                  errors,
                  handleSubmit,
                  isValid,
                  dirty,
                }) => (
                  <div className='flex flex-col '>
                    <div className=''>
                      <label htmlFor={`email`} className='flex flex-col py-3'>
                        Email
                      </label>
                      <input
                        className='bg-graphite w-80 h-10 rounded-md'
                        id='email'
                        name='email'
                        type='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                    {errors.email && touched.email && (
                      <span className=' text-red-600 text-xs'>
                        {errors.email}
                      </span>
                    )}
                    <div>
                      <label
                        htmlFor={`password`}
                        className='flex flex-col py-3'
                      >
                        Password
                      </label>
                      <input
                        className=' bg-graphite w-80 h-10 rounded-md'
                        id='password'
                        name='password'
                        type='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </div>
                    {errors.password && touched.password && (
                      <span className=' text-red-600 text-xs py-3'>
                        {errors.password}
                      </span>
                    )}
                    <div className=' py-3'>
                      <Button
                        type={`submit`}
                        text='Sing in'
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                      />
                      <div className='text-xs flex justify-center my-3'>
                        Don’t have an account?
                        <span
                          className=' text-primary hover:text-primary2 cursor-pointer px-1'
                          onClick={() => navigate('/singup')}
                        >
                          Sign Up
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </Formik>
            </form>
          </div>
        </div>
        <footer className='flex items-center mx-auto'>
          <p className='flex items-center mx-auto'>© All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};
