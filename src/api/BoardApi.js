import axios from 'axios';
import baseURL from '../constants/apiConstant';

export default class BoardApi {
  constructor() {
    this.instance = axios.create({
      baseURL: `${baseURL}`,
      timeout: 10000,
    });
    this.fetch.bind(this);
  }

  fetch(id) {
    const url = `${id}`;
    return this.instance.get(url);
  }
}
