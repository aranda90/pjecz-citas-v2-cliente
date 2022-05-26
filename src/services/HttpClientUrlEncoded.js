import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_URL_BASE

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

const request = {
    post: (url, params) => axios.post(url, params, headers),
}

export default request
