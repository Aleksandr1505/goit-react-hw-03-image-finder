import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = (pageNumber = 1, querySearch = 'dog') => {
  const key = `?key=${process.env.REACT_APP_PIXABAY_API_KEY}`;
  const settings = '&image_type=photo&orientation=horizontal';
  const perPAGE = '&per_page=12';
  const page = `&page=${pageNumber}`;
  const search = `&q=${querySearch}`;
  return axios.get(key + settings + perPAGE + page + search);
};

export const o = () => null;
