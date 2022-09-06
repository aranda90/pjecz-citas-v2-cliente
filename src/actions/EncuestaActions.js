import HttpClient from '../services/HttpClientToken'


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

