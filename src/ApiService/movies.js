import axios from 'axios';

const instanceMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    _language: 'en-US',
  },
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGVmNWVkYTZhODBmODM4MGVhMWYwYWQzMjczMDEwNSIsIm5iZiI6MTczOTMwOTQxOC43MDEsInN1YiI6IjY3YWJjMTZhZTA5ZDZjOTE5MGIwODdkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HPcfKYvTlNnf-AFQwL1kNuGZsxDNdoIl1AZ7qC9Stp0',
  },
});

export const getTrendingMovies = async () => {
  const data = await instanceMovies.get('trending/movie/day');
  return data.results;
};

export const getMovies = async (query = '') => {
  const data = await instanceMovies.get('search/movie', {
    params: { query, include_adult: false },
  });
  return data.results;
};

export const getMoviesById = async id => {
  const { data } = await instanceMovies.get(`/movie/${id}`);
  return data.results;
};
export const getCast = async id => {
  const data = await instanceMovies.get(`movie/${id}/credits`);
  return data.results;
};

export const getReviews = async (id, page = 1) => {
  const data = await instanceMovies.get(`movie/${id}/reviews`, { params: { page } });
  return data.results;
};

