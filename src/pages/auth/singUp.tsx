import { useNavigate } from 'react-router-dom';
import { logoIcon } from '../../assets/index';
import { Formik, FormikHelpers } from 'formik';
import { RegisterSchema } from '../../uilse/yap/yap';
import { Button } from '../../components/button/button';
import { IRegisterValues } from '../../types/auth/type';

export const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <div className=' bg-myimg w-screen h-screen bg-center'>
      <div className=' w-screen h-screen backdrop-opacity-10 backdrop-invert bg-black/50  '>
        <div className=' pt-12 pl-16 cursor-pointer'>
          <img src={logoIcon} alt='' onClick={() => navigate('/')} />
        </div>
        <div className=' w-[474px] h-[540px] bg-dark rounded-lg mx-auto my-3'>
          <div className=''>
            <h3 className=' text-2xl  ml-[75px] py-3'>Sing In</h3>
            <form action='' className=' flex justify-center'>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  confirmPassword: '',
                  username: '',
                }}
                validateOnBlur
                validationSchema={RegisterSchema}
                onSubmit={(
                  values: IRegisterValues,
                  { setSubmitting }: FormikHelpers<IRegisterValues>
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
                    <label htmlFor={`username`} className='flex flex-col py-2'>
                      Name
                    </label>
                    <input
                      className='bg-graphite w-80 h-10 rounded-md'
                      id='username'
                      name='username'
                      type='username'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />

                    {errors.username && touched.username && (
                      <span className='text-red-600 text-xs'>
                        {errors.username}
                      </span>
                    )}
                    <div>
                      <label htmlFor={`email`} className='flex flex-col py-2'>
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
                      <span className='text-red-600 text-xs'>
                        {errors.email}
                      </span>
                    )}
                    <div>
                      <label
                        htmlFor={`password`}
                        className='flex flex-col py-2'
                      >
                        Password
                      </label>
                      <input
                        className='bg-graphite w-80 h-10 rounded-md'
                        id='password'
                        name='password'
                        type='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                    </div>
                    {errors.password && touched.password && (
                      <span className='text-red-600 text-xs'>
                        {errors.password}
                      </span>
                    )}
                    <div>
                      <label
                        htmlFor={`confirmPassword`}
                        className='flex flex-col py-2'
                      >
                        Confirm Password
                      </label>
                      <input
                        className=' bg-graphite w-80 h-10 rounded-md'
                        id='confirmPassword'
                        name='confirmPassword'
                        type='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                      />
                    </div>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <span className='text-red-600 text-xs'>
                        {errors.confirmPassword}
                      </span>
                    )}
                    <div className=' my-2'>
                      <Button
                        type={`submit`}
                        text='Sing in'
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                      />

                      <div className='text-xs flex justify-center my-3'>
                        Already have an account?
                        <span
                          className=' text-primary hover:text-primary2 cursor-pointer px-1'
                          onClick={() => navigate('/singin')}
                        >
                          Sign In
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
          <p className='flex items-center mx-auto mt-4'>
            © All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
};
