import HttpClient from '../services/HttpClient'
import HttpClientToken from '../services/HttpClientToken'
import HttpClientUrlEncoded from '../services/HttpClientUrlEncoded'


export const LogIn = (cliente) => {
    return new Promise((resolve, reject) => {
        const params = new URLSearchParams()
        params.append('username', cliente.username)
        params.append('password', cliente.password)
        HttpClientUrlEncoded.post('/token', params)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
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


export const NewAccount = data => {
    return new Promise((resolve, reject) => {
        HttpClient.post('/v2/nueva_cuenta/solicitar', data)
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
        HttpClient.post('/v2/nueva_cuenta/concluir', data)
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
