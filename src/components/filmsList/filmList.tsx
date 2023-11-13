import { MovieListItem } from '../FilmItem/FilmItem';
import { LoadingSpinner } from '../loadingSpinner/loadingSpinner';
import { getMovies } from '../../store/selectors';
import { IMovie } from '../../types/film/types';
import { useAppSelector } from '../../store/hooks/hook';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getFilms } from '../../API/film/getFilms';
// import { ShowMoreButton } from '../showMoreButton/showMoreButton';

export const MovieList = () => {
  const { isLoading, movies } = useAppSelector(getMovies);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    //     <div className=''>
    //     <div className='-mt-64 pl-80 '>
    //       <div className=' flex flex-wrap '>
    //         {films.map((film) => (
    //           <Link
    //             key={film.imdbID}
    //             to={`/film/${film.imdbID}`}
    //             className=' ml-3'
    //           >
    //             <img
    //               src={film.Poster}
    //               alt=''
    //               className=' h-80 w-60 rounded-2xl cursor-pointer'
    //             />
    //             <h2 className='w-60 text-base font-bold'>{film.Title}</h2>
    //             <p>ganres</p>
    //           </Link>
    //         ))}
    //       </div>

    //       <div className=' flex justify-center'>
    //         <ShowMoreButton
    //           text='Show More'
    //           onClick={onClick}
    //           loading={loading}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // );
    // };

    <div>
      {movies.map(({ year, title, poster, imdbID }: IMovie) => (
        <MovieListItem
          key={imdbID}
          year={year}
          title={title}
          poster={poster}
          imdbID={imdbID}
        />
      ))}
    </div>
  );
};

// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getFilms } from '../../API/film/getFilms';
// import { ShowMoreButton } from '../showMoreButton/showMoreButton';

// import { IMovieAPI } from '../../types/film/types';

// export const Home = () => {
//   const [films, setFilms] = useState<IMovieAPI[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const onClick = () => {
//     setPage((prev) => prev + 1);
//   };

//   const fetchData = async () => {
//     setLoading(true);
//     const response = await getFilms(page);
//     if (films.length > 0) {
//       setFilms((prev) => prev.concat(response.Search));
//     } else {
//       setFilms(response.Search);
//     }

//     setLoading(false);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (page > 1) {
//       fetchData();
//     }
//   }, [page]);

//   return  (
//     <div className=''>
//       <div className='-mt-64 pl-80 '>
//         <div className=' flex flex-wrap '>
//           {films.map((film) => (
//             <Link
//               key={film.imdbID}
//               to={`/film/${film.imdbID}`}
//               className=' ml-3'
//             >
//               <img
//                 src={film.Poster}
//                 alt=''
//                 className=' h-80 w-60 rounded-2xl cursor-pointer'
//               />
//               <h2 className='w-60 text-base font-bold'>{film.Title}</h2>
//               <p>ganres</p>
//             </Link>
//           ))}
//         </div>

//         <div className=' flex justify-center'>
//           <ShowMoreButton
//             text='Show More'
//             onClick={onClick}
//             loading={loading}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
