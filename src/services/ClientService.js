import { create } from "./BaseService";

const http = create()

export const createClientConnected = (body) => {
    return http.post(`create/client/connected`, body)
}

export const postClientConnected = (body) => {
    return http.post(`/client`, body)
}

export const postClientDisconnected = (body) => {
    return http.post(`/client/disconnected`, body)
}