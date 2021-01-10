import axios from 'axios';

const url = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('refreshToken');
export const axiosWithAuth = axios.create({
  headers: {
    Authorization: token,
    contentType: 'application/json',
  },
  baseURL: url,
});

export const client = axios.create({
  headers: {
    contentType: 'application/json',
  },
  baseURL: url,
});
