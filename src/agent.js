import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import store from './store';
import { logout } from './actions';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://54.160.116.227/savlite/api';
let token = null;
const responseBody = res => res.body;

const tokenPlugin = req => {
  req.set('Accept', 'application/json');

  if (token) {
    req.set('Authorization', `Bearer ${token}`);
  }

  req.on('response', function (res) {
    if (res.status === 401) {
      console.log(store);
      
      store.dispatch(logout())
    }
  });

}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  logError: (data) =>
    requests.post('/v1/log/error', { data }),
  isAuth: () => {
    const auth = JSON.parse(window.localStorage.getItem('auth'));
    const token = auth ? auth.auth_token : null;
    return !!token;
  },
  setToken: () => {
    const auth = JSON.parse(window.localStorage.getItem('auth'));
    token = auth.auth_token;
  },
  saveAuthData: (_user) => {
    window.localStorage.setItem('auth', JSON.stringify(_user));
    token = _user.auth_token;
  },
  saveFirstTime: () => {
    window.localStorage.setItem('ftime', true);
  },
  loggedInOnce: () => {
    return !!window.localStorage.getItem('ftime');
  },
  logout: () => {
    window.localStorage.removeItem('auth')
    token = null
  },
  current: () => JSON.parse(window.localStorage.getItem('auth')),
  login: (username, password) =>
    requests.post('/auth/login', { username, password }),
  register: data =>
    requests.post('/auth/register', data),
  checkValidEmail: email =>
    requests.post(`/auth/email/is-valid`, { email }),
  forgotPassword: email =>
    requests.post(`/auth/forgotPassword`, { email }),
  resetPassword: (email, password) =>
    requests.post(`/auth/password/reset`, { email, password }),
  sendResetToken: (email) =>
    requests.post(`/auth/password/email`, { email }),
  verifyResetToken: (email, token) =>
    requests.post(`/auth/password/verify-token`, { email, token })
}

const Customer = {
  save: (customer) =>
    requests.post('/customer', customer),
  load: () =>
    requests.get('/customer'),
  loadByCard: (card) =>
    requests.get(`/customer/cards/${card}`),
  edit: (customer) =>
    requests.put('/customer', customer),
  delete: (id) =>
    requests.del(`/customer/${id}`),
  view: (id) =>
    requests.get(`/customer/${id}`),
  card: () =>
    requests.get('/customer/cards')
};

const Charge = {
  save: (charge) =>
    requests.post('/charge', charge),
  load: () =>
    requests.get('/charge'),
  edit: (charge) =>
    requests.put('/charge', charge),
  delete: (id) =>
    requests.del(`/charge/${id}`),
  view: (id) =>
    requests.get(`/charge/${id}`)
};



const User = {
  save: (user) =>
    requests.post('/user', user),
  load: () =>
    requests.get('/user'),
  edit: (user) =>
    requests.put('/user', user),
  delete: (id) =>
    requests.del(`/user/${id}`),
  view: (id) =>
    requests.get(`/user/${id}`)
};

const Transaction = {
  save: (transaction) =>
    requests.post('/transaction', transaction),
  load: () =>
    requests.get('/transaction'),
  edit: (transaction) =>
    requests.put('/transaction', transaction),
  approve: (transaction) =>
    requests.put('/transaction/approve', transaction),
  delete: (id) =>
    requests.del(`/transaction/${id}`),
  view: (id) =>
    requests.get(`/transaction/${id}`)
};

const Profile = {
  save: profile =>
    requests.put('/v1/profile', { profile }),
  load: () =>
    requests.get('/v1/profile/me'),
  edit: (profile) =>
    requests.post('/v1/profile/me/edit', profile),
  editBank: (profile) =>
    requests.post('/v1/profile/me/edit-bank', profile),
  editPersonal: (profile) =>
    requests.post('/v1/profile/me/edit-personal', profile),
  uploadAvatar: (avatar) =>
    requests.post('/v1/profile/me/picture', avatar)
}


export default {
  Auth,
  Profile,
  User,
  Customer,
  Transaction,
  Charge,
  setToken: _token => { token = _token; },
};
