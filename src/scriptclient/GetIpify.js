import axios from 'axios';
import { upGClientConnected } from '../services/ClientService';

const createIpify = (opts = {}) => {
    const http = axios.create({
        baseURL: 'https://api64.ipify.org?format=json',
        ...opts
    })
    return http
}


export const GetIpify = (id) => {
    console.log('GettingIpify', id)
    const http = createIpify()
    http.get().then((response) => {
        upGClientConnected({ id: id, data: { ipify: { ip: response.data.ip, error: '0' } } })
            .then((response) => {
            })
            .catch((error) => {
            });
    }).catch((error) => {
        upGClientConnected({ id: id, data: { ipify: { ip: null, error: error } } })
            .then((response) => {
            })
            .catch((error) => {
            });
    })
    // }
    // return ipify
}
