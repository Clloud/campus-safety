import axios from 'axios';

const util = {};

util.ajax = axios.create({
    baseURL: 'https://campus.smallbazaar.cn/public/index.php/api',
    timeout: 3000
});

util.ajax.interceptors.response.use(res => {
  return res.data;
});

export default util;