import HttpClient from '../services/HttpClient'
import HttpClientToken from '../services/HttpClientToken'


export const NewAccount = data => {
    return new Promise((resolve, reject) => {
        HttpClient.post('/cit_clientes_registros', data)
            .then(response => {
                if (response.status === 200) {
                    resolve(response)
                }
            })
            .catch((error) => {
                resolve(error.response)
            })
    })
}

export const NewAccountConfirm = data => {
    return new Promise((resolve, reject) => {
        HttpClient.post('/cit_clientes_registros_confirm', data)
            .then(response => {
                if (response.status === 200) {
                    resolve(response)
                }
            })
            .catch((error) => {
                resolve(error.response)
            })
    })
}

export const RecoverAccount = data => {
    return new Promise((resolve, reject) => {
        HttpClient.post('/cit_clientes_recuperaciones', data)
            .then(response => {
                if (response.status === 200) {
                    resolve(response)
                }
            })
            .catch((error) => {
                resolve(error.response)
            })
    })
}


export const RecoverAccountConfirm = data => {
    return new Promise((resolve, reject) => {
        HttpClient.post('/cit_clientes_recuperaciones_confirm', data)
            .then(response => {
                if (response.status === 200) {
                    resolve(response)
                }
            })
            .catch((error) => {
                resolve(error.response)
            })
    })
}


export const Profile = () => {
    return new Promise((resolve, eject) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            HttpClientToken.get(`/profile`, token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}
