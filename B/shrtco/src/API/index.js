import {SHORTEN_URL} from './config';
import axios from 'axios';

const shortenService = {
  createShorterURL : (url) => {
    return axios(`${SHORTEN_URL}${url}`);
  },
}

export default shortenService;
