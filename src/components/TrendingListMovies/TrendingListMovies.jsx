'use client';
import { useState } from 'react';
import { useGetData } from '../hooks/useGetData';
export const TrendingListMovies = () => {
  const [data, setData] = useGetData({ params: `trending/movie/day` }, []);
  console.log(data);
  return (
    <ul>
      {data.length &&
        data.map(movie => (
          <li key={movie.id}>
            <p>{movie.title}</p>
          </li>
        ))}
    </ul>
  );
};
