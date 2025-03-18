import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.render.com/v1/services?includePreviews=true&limit=20',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer rnd_9UZ6gqCs3m9u2kP5j8qi8UBjHW8v'
  }
};

axios
  .request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));