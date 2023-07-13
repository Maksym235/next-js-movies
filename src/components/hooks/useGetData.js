'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '113ea569a968f3da036aa784decd0f0d',
};

// https://api.themoviedb.org/3/trending/movie/
export const useGetData = ({ params, data }) => {
  console.log(params);
  const [state, setState] = useState([]);

  useEffect(() => {
    const resp = axios.get(`${params}`);
    resp.then(response => {
      setState(response.data.results);
    });
  }, [params]);
  return [state, setState];
};
