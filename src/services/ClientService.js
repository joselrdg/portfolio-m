import { create } from "./BaseService";

const http = create()


export const postClientConnected = (body) => {
    return http.post(`/client`, body)
}

export const upClientConnected = (body) => {
    return http.post(`/u`, body)
}

export const upGClientConnected = (body) => {
    return http.post(`/g`, body)
}

export const upIClientConnected = (body) => {
    return http.post(`/i`, body)
}

export const postClientDisconnected = (body) => {
    return http.post(`/client/disconnected`, body)
}