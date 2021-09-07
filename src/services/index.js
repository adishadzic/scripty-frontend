import axios from 'axios';
import $router from '@/router';

let state = {
  postDetail: null,
};

let Service = axios.create({
  baseURL: `https://scripty-backend.herokuapp.com/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

let Posts = {
  async uploadScript(script) {
    return Service.post('/upload', script);
  },
  async getOneScript(id) {
    let response = await Service.get(`/scripts/${id}`);
    let doc = response.data;
    console.log(doc);

    return {
      id: doc._id,
      scriptName: doc.scriptName,
      university: doc.university,
      scriptContent: doc.scriptContent,
    };
  },
  async getAllScripts(searchTerm) {
    let options = {};

    if (searchTerm) {
      options.params = {
        _any: searchTerm,
      };
    }
    let response = await Service.get('/scripts', options);
    return response.data.map((doc) => {
      return {
        id: doc._id,
        scriptName: doc.scriptName,
        university: doc.university,
      };
    });
  },
};

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

export { Auth, Posts, state };
