import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8005';

const request = {
    get: (url, token) => axios.get(url, { headers: { 'Authorization': 'Bearer ' + token } } ),
    post: (url, body, token) => axios.post(url, body, { headers: { 'Authorization': 'Bearer ' + token } } ),
    put: (url, body, token) => axios.put(url, body, { headers: { 'Authorization': 'Bearer ' + token } } ),
    delete: (url, token) => axios.delete(url, { headers: { 'Authorization': 'Bearer ' + token } } )
}

export default request;
