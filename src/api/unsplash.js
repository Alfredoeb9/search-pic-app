import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',

  headers: {
    Authorization: 'Client-ID 67068dbce91d728386a576b8af17a9f34cc304cbafc84a32ce7438cf3c028063'
  }
});