// import { Layout } from '../components/layout/layout';
import { useState, useEffect } from 'react';
import { getFilms } from '../API/film/getFilms';
import { Button } from '../components/button/button';
// import { getFilmPoster } from '../API/film/getFilmPoster';

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const onClick = () => {
    setPage((prev) => prev + 1);
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await getFilms(page);
    if (films.length > 0) {
      setFilms((prev) => prev.concat(response.Search));
    } else {
      setFilms(response.Search);
    }
    // const poster = await getFilmPoster(response.Search[0].imdbID);
    // console.log(poster);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchData();
    }
  }, [page]);
  console.log(films, loading);
  return (
    <div>
      <Button text={'Show more'} onClick={onClick} />
    </div>
  );
};
