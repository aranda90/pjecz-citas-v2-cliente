import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL_BASE

const request = {
    get: (url, token) => axios.get(url, { headers: { 'Authorization': 'Bearer ' + token } } ),
    getParams: (url, params, token) => axios.get(url, params, { headers: { 'Authorization': 'Bearer ' + token } } ),
    post: (url, body, token) => axios.post(url, body, { headers: { 'Authorization': 'Bearer ' + token } } ),
    //postParams: (url, params, token) => axios.post(url, params, { headers: {'Content-Type': 'application/json'}+{ 'Authorization': 'Bearer ' + token } } ),
    put: (url, body, token) => axios.put(url, body, { headers: { 'Authorization': 'Bearer ' + token } } ),
    delete: (url, token) => axios.delete(url, { headers: { 'Authorization': 'Bearer ' + token } } )
}

export default request
