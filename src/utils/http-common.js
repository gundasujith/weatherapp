//Purpose: axios configuration setup
import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  s: {
    'Content-type': 'application/json'
  }
});
