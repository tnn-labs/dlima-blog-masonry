import axios from 'axios';

export const service = axios.create({
  baseURL: 'https://api.github.com/users',
});