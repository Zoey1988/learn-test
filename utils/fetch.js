import axios from 'axios';

export function requestJsonPlaceholder(endpoint, method = 'GET', body) {
  // console.log(axios);
  return axios({
    url: `https://jsonplaceholder.typicode.com${endpoint}`,
    method,
    body,
  });
}
