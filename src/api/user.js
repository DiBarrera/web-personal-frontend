import { basePath } from './config';

const cors = require('cors');

export function signUpApi(data) {
    const url = `${basePath}/signup`
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    console.log(data)

    return fetch(url, params)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(result => {
            console.log(result)
            if(result.user) {
                return {
                    ok: true,
                    status: 200,
                    message: 'Usuario creado exitosamente'
                }   
            }
            return {
                ok: false,
                message: result.message
            }
        })
        .catch(error => {
            return {
                ok: false,
                message: error.message
            }
        })
}