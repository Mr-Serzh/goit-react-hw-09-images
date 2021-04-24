import axios from 'axios';

const API_KEY = '19173841-1948c6c8698f2c876b72e0f5c';
const BASE_URL = 'https://pixabay.com/api';

const api = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default api;
