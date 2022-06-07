import HttpClientToken from '../services/HttpClientToken'


export const GetCitCitas = () => {
    return new Promise((resolve, eject) => {
        const token = window.localStorage.getItem('token')
        if (token) {
            HttpClientToken.get(`/cit_citas`, token)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    resolve(error.response)
                })
        }
    })
}

export const GetDistritos = () => {
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

export const GetOficinas = (distrito_id) => {
    return new Promise((resolve, reject) => {
        const token = window.localStorage.getItem('token')
        if(token){
            let ruta = '/v2/oficinas'
            if(distrito_id !== null){ 
                ruta = ruta + `?distrito_id=${distrito_id}`
            }
            console.log(ruta)
            HttpClientToken.get(ruta, token)
                .then( response => {
                    resolve(response)
                })
                .catch((error) => {
                    resolve(error.response)
                });
        }
    });
}

export const GetOficinaServicio = (oficina_id) => {
    return new Promise((resolve, reject) => {
        const token = window.localStorage.getItem('token')
        if(token){
            let ruta = '/v2/cit_oficinas_servicios'
            if(oficina_id !== null){
                ruta = ruta + `?oficina_id=${oficina_id}`
            }
            console.log(ruta)
            HttpClientToken.get(ruta, token)
                .then(response => {
                    resolve(response)
                })
                .catch((error) => {
                    resolve(error.response)
                })
        }
    })
}


export const GetCitDiasDisponibles = (oficina_id) => {
    return new Promise((resolve, reject) => {
        const token = window.localStorage.getItem('token')
        if(token){
            let ruta = '/v2/cit_dias_disponibles'
            if(oficina_id !== null){
                ruta = ruta + `?oficina_id=${oficina_id}`
            }
            console.log(ruta)
            HttpClientToken.get(ruta, token)
                .then(response => {
                    resolve(response)
                })
                .catch((error) => {
                    resolve(error.response)
                })
        }
    })
}

export const GetHorasDisponibles = (filtros) => {
    return new Promise((resolve, reject) => {
        const token = window.localStorage.getItem('token')
        if(token){
            let ruta = '/v2/cit_horas_disponibles'
            if(filtros.oficina_id){
                ruta = ruta + `?oficina_id=${filtros.oficina_id}`
            }
            if(filtros.cit_servicio_id){
                ruta = ruta + `&cit_servicio_id=${filtros.cit_servicio_id}`
            }
            if(filtros.fecha){
                ruta = ruta + `&fecha=${filtros.fecha_id}`
            }
            console.log(ruta)
            HttpClientToken.get(ruta, token)
                .then(response => {
                    resolve(response)
                })
                .catch((error) => {
                    resolve(error.reponse)
                })
        }
    })
}