import axios from 'axios';
import $router from '@/router';

let Service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

let Auth = {
  async register(name, email, password) {
    let response = await Service.post('/auth/register', {
      name: name,
      email: email,
      password: password,
    });
    let user = response.data;
    localStorage.setItem('user', JSON.stringify(user));

    return true;
  },
  async login(email, password) {
    let response = await Service.post('/auth/login', {
      email: email,
      password: password,
    });

    let user = response.data;
    localStorage.setItem('User', JSON.stringify(user));

    return true;
  },
  logout() {
    localStorage.removeItem('User');
  },
  getUser() {
    return JSON.parse(localStorage.getItem('User'));
  },
};

export { Auth };
