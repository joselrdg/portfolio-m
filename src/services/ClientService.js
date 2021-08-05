import { create } from "./BaseService";

const http = create()

export const createClientConnected = (body) => {
    console.log("postClientConnected")
    return http.post(`create/client/connected`, body)
}

export const postClientConnected = (body) => {
    console.log("postClientConnected", body)
    return http.post(`/client`, body)
}

export const postClientDisconnected = (body) => {
    console.log("postClientDisconnected", body)
    return http.post(`/client/disconnected`, body)
}