import axios from 'axios';
import { upClientConnected, upGClientConnected } from '../services/ClientService';

const createIpify = (opts = {}) => {
    const http = axios.create({
        baseURL: 'https://api64.ipify.org?format=json',
        ...opts
    })
    return http
}


export const GetIpify = (id) => {
    const http = createIpify()
    http.get().then((response) => {
        upClientConnected({ id: id, data: { ipify: { ip: response.data.ip, error: '0' } } })
            .then((response) => {
            })
            .catch((error) => {
            });
    }).catch((error) => {
        upClientConnected({ id: id, data: { ipify: { ip: null, error: error } } })
            .then((response) => {
            })
            .catch((error) => {
            });
    })
}
