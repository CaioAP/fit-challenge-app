import axios from 'axios';

export function useAxios() {
  axios.defaults.baseURL = 'http://localhost:9000';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';
  axios.defaults.withCredentials = true;

  return axios;
}
