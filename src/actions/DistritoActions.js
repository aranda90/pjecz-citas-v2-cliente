import HttpClientToken from '../services/HttpClientToken'

export const Distritos = () => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(window.localStorage.getItem('data'))
        if(data){
            const { access_token } = data
            HttpClientToken.get('/v2/distritos/', access_token)
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
        const data = JSON.parse(window.localStorage.getItem('data'))
        if(data){
            const { access_token } = data
            HttpClientToken.get(`/v2/distritos/${id}`, access_token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}