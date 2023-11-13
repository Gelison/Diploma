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
        <div className=' pt-12 pl-16'>
          <img src={logoIcon} alt='' />
        </div>
        <div className=' w-[474px] h-[440px] bg-dark rounded-lg flex items-center mx-auto my-10'>
          <div className=' p-5 mx-auto'></div>
          <h3>Sing In</h3>
          <form action=''>
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
                <div>
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
                  <Button
                    type={`submit`}
                    text='Sing in'
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                  />
                  <div>
                    Don’t have an account?
                    <span
                      className=' text-primary hover:text-primary2 cursor-pointer'
                      onClick={() => navigate('/singup')}
                    >
                      Sign Up
                    </span>
                  </div>
                </div>
              )}
            </Formik>
          </form>
        </div>
        <footer className='flex items-center mx-auto'>
          <p className='flex items-center mx-auto'>© All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};
