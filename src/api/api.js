import axios from 'axios';

const API_KEY = '99b8738aa775f3085ac0a8a731554e22';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`);
  return response.data.results;
};

export const fetchMovieByQuery = async movieName => {
  const response = await axios.get(`search/movie?query=${movieName}`);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  console.log('response from api', response);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error; 
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error; 
  }
};


