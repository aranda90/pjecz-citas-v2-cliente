import HttpClientToken from '../services/HttpClientToken'


export const Distritos = () => {
    return new Promise((resolve, reject) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            HttpClientToken.get('/v2/distritos/', token)
                .then(response => {
                    resolve(response)
                })
                .catch((error) => {
                    resolve(error.response)
                })
        }
    })
}


export const Distrito = (id) => {
    return new Promise(( resolve, reject ) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            HttpClientToken.get(`/v2/distritos/${id}`, token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}
