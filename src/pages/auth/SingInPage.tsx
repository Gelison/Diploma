// // import { Link } from 'react-router-dom';
// import { IPropsLogin } from '../../types/auth/type';
// import { Button } from '../../components/button/button';
// import { logoIcon } from '../../assets/index';
// import { useFormik } from 'formik';
// import { LoginSchema } from '../../uilse/yap/yap';

// export const SingInPage: React.FC<IPropsLogin> = ({
//   navigate,
//   initialValues,
//   loading,
//   onSubmit,
// }: IPropsLogin): JSX.Element => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validationSchema: LoginSchema,
//     validateOnBlur: false,
//   });

//   const { handleChange, handleBlur, touched, values, errors, handleSubmit } =
//     formik;
//   return (
//     <div className=' bg-myimg w-screen h-screen bg-center'>
//       <div className=' w-screen h-screen backdrop-opacity-10 backdrop-invert bg-black/50  '>
//         <div className=' pt-12 pl-16'>
//           <img src={logoIcon} alt='' />
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className=' w-[474px] h-[440px] bg-dark rounded-lg flex items-center mx-auto my-10'>
//             <div className=' p-5 mx-auto'>
//               <h3>Sing In</h3>

//               <div>
//                 <p>Email</p>
//                 <input
//                   className=' text-black'
//                   type='email'
//                   name='email'
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.email}
//                 />
//                 {errors.email && touched.email && <span>{errors.email}</span>}
//               </div>
//               <div>
//                 <p>Password</p>
//                 <input
//                   className=' text-black'
//                   type='Password'
//                   name='password'
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                 />
//                 {errors.password && touched.password && (
//                   <span>{errors.password}</span>
//                 )}
//               </div>
//               <div>
//                 <Link to='/resetpassword'>Forgot password?</Link>
//               </div>

//               <Button text='Sing in' disabled={false} onClick={handleSubmit} />
//               <div>
//                 Don’t have an account?
//                 <span
//                   className=' text-primary hover:text-primary2 cursor-pointer'
//                   onClick={() => navigate('/singup')}
//                 >
//                   Sign Up
//                 </span>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//       <footer className='flex items-center mx-auto'>
//         <p className='flex items-center mx-auto'>© All Rights Reserved</p>
//       </footer>
//     </div>
//   );
// };
