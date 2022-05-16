import HttpClient from '../../services/HttpClient';

export const NewAccount = data => {

    return new Promise((resolve, reject) => {
        HttpClient.post('/cit_clientes_registros', data)
            .then(response => {
                if (response.status === 200) {
                    resolve(response);
                }
            })
            .catch((error) => {
                resolve(error.response);
            });
    });

}
