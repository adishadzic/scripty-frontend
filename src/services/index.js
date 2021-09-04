import axios from 'axios';
import $router from '@/router';

let Service = axios.create({
  baseURL: `http://localhost:4000`,
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
  getToken() {
    let token = Auth.getUser();
    if (token) {
      return token;
    } else {
      return false;
    }
  },
  authenticated() {
    let user = Auth.getUser();
    if (user) {
      return true;
    } else {
      return false;
    }
  },
  state: {
    get authenticated() {
      return Auth.authenticated();
    },
    get userEmail() {
      let user = Auth.getUser();
      if (user) {
        return user.email;
      }
    },
  },
};

export { Auth };
