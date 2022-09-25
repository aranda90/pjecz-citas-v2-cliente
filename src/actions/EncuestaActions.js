import HttpClient from '../services/HttpClientToken'
import HttpClientToken from '../services/HttpClientToken'


export const GetPollSystem = (data) => {
    return new Promise((resolve, reject) => {
        
            const ruta = `/v2/enc_sistemas/validar?hashid=${data}`
            
            HttpClient.get(ruta)
            .then(response => {
                resolve(response)
            })
            .catch((error) => {
                resolve(error.response)
            })
        
    })
}

export const UpdatePollSystem = data => {
    return new Promise((resolve, reject) => {
        HttpClient.post('/v2/enc_sistemas/contestar', data)
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


export const GetPollService = (data) => {
    return new Promise((resolve, reject) => {
        
            const ruta = `/v2/enc_servicios/validar?hashid=${data}`
            
            HttpClient.get(ruta)
            .then(response => {
                resolve(response)
            })
            .catch((error) => {
                resolve(error.response)
            })
        
    })
}

export const GetPollPendiente = () => {
    return new Promise((resolve, eject) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            HttpClientToken.get(`/v2/enc_servicios/pendiente`, token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}

export const UpdatePollService = data => {
    return new Promise((resolve, reject) => {
        HttpClient.post('/v2/enc_servicios/contestar', data)
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