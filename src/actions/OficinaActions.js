import HttpClientToken from '../services/HttpClientToken'

export const Oficinas = (distrito_id) => {

    return new Promise((resolve, reject) => {
        const data = JSON.parse(window.localStorage.getItem('data'));
        if(data){
            const { access_token } = data;
            let ruta = '/v2/oficinas';
            if(distrito_id !== null){ 
                ruta = ruta + `?distrito_id=${distrito_id}`
            }
            console.log(ruta)
            HttpClientToken.get(ruta, access_token)
                .then( response => {
                    resolve(response);
                })
                .catch((error) => {
                    resolve(error.response);
                });
        }
    });
}

export const Oficina = (id) => {
    
    return new Promise(( resolve, reject ) => {
        const data = JSON.parse(window.localStorage.getItem('data'));
        if(data){
            const { access_token } = data;
            HttpClientToken.get(`/v2/oficina/${id}`, access_token)
                .then(response => {
                    if(response.status === 200){
                        resolve(response);
                    }
                })
                .catch((error) => {
                    resolve( error.response );
                });
            }
    });
}