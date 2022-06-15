import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1f2231d799563a30b24b357a44da2aa2';

export const fetchApi = async () => {
  try {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};

export const fetchDetails = async id => {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};

export const fetchCast = async id => {
  try {
    const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};

export const fetchReviews = async id => {
  try {
    const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};

export const fetchSearch = async query => {
  try {
    const searchParams = new URLSearchParams({
      api_key: '1f2231d799563a30b24b357a44da2aa2',
      query: query,
      language: 'en-US',
      include_adult: false,
    });
    const url = `${BASE_URL}/search/movie?${searchParams}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
};
