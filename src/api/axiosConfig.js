import axios from 'axios';

export default axios.create({
  baseURL: 'https://babb-193-138-7-192.ngrok-free.app',
  headers: {"ngrok-skip-browser-warning": "true"}
});
