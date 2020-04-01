import axios from 'axios' 
import store from '../store/store'
import actionCreatore from '../store/actionCreatore'
axios.interceptors.request.use(function (config) {
  //调用接口时携带token
  let token = localStorage.getItem('token') || 'no token'
  config.headers.Authorization = 'Bearer ' + token
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  let {code,msg}= response.data
  if(code === 402){
    //token失效
    let action = actionCreatore.changeTokenModal(true)
    store.dispatch(action)
  }
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
export default axios 