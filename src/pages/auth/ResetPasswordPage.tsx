import { useNavigate } from 'react-router-dom';
import { logoIcon } from '../../assets/index';
import { Formik, FormikHelpers } from 'formik';
import { RegisterSchema } from '../../uilse/yap/yap';
import { Button } from '../../components/button/button';
import { IRegisterValues } from '../../types/auth/type';

export const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className=' bg-black'>
      <div className=' bg-myimg w-screen h-screen bg-center'>
        <div className=' w-screen h-screen backdrop-opacity-10 backdrop-invert bg-black/50  '>
          <div className=' pt-12 pl-16'>
            <img src={logoIcon} alt='' />
          </div>
          <div className=' w-[474px] h-[440px] bg-dark rounded-lg flex items-center mx-auto my-10'>
            <div className=' p-5 mx-auto'></div>
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
                <div>
                  <label htmlFor={`username`}>username</label>
                  <input
                    className=' text-black'
                    id='username'
                    name='username'
                    type='username'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />

                  {errors.username && touched.username && (
                    <span>{errors.username}</span>
                  )}
                  <div>
                    <label htmlFor={`email`}>email</label>
                    <input
                      className=' text-black'
                      id='email'
                      name='email'
                      type='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  {errors.email && touched.email && <span>{errors.email}</span>}
                  <div>
                    <label htmlFor={`password`}>Password</label>
                    <input
                      className=' text-black'
                      id='password'
                      name='password'
                      type='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </div>
                  {errors.password && touched.password && (
                    <span>{errors.password}</span>
                  )}
                  <div>
                    <label htmlFor={`confirmPassword`}>Password</label>
                    <input
                      className=' text-black'
                      id='confirmPassword'
                      name='confirmPassword'
                      type='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    />
                  </div>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <span>{errors.confirmPassword}</span>
                  )}

                  <Button
                    type={`submit`}
                    text='Sing in'
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                  />

                  <div>
                    Already have an account?
                    <span
                      className=' text-primary hover:text-primary2 cursor-pointer'
                      onClick={() => navigate('/singup')}
                    >
                      Sign In
                    </span>
                  </div>
                </div>
              )}
            </Formik>
          </div>
          <footer className='flex items-center mx-auto'>
            <p className='flex items-center mx-auto'>© All Rights Reserved</p>
          </footer>
        </div>
      </div>
    </div>
  );
};
