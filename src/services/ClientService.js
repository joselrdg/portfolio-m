import { create } from "./BaseService";

const http = create()


export const postClientConnected = (body) => {
    return http.post(`/client`, body)
}

export const upClientConnected = (body) => {
    return http.post(`/uclient`, body)
}

export const postClientDisconnected = (body) => {
    return http.post(`/client/disconnected`, body)
}