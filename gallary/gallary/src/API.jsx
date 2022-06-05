import axios from 'axios';

const API = axios.create({
  baseURL: 'https://pixabay.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    key: '13509518-a6c289caf564a521969cf6536',
    safesearch: true,
  },
});

export default API;