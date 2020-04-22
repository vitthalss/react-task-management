import axios from 'axios';
import baseURL from '../constants/apiConstant';

export default class ProjectApi {
  constructor() {
    this.instance = axios.create({
      baseURL: `${baseURL}`,
      timeout: 10000,
    });
    this.fetch.bind(this);
  }

  fetch() {
    const url = '/projects';
    return this.instance.get(url);
  }
}
