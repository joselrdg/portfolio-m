import { create } from "./BaseService";

const http = create()

export const postClientConnected = (body) => {
    console.log("postClientConnected", body)
    return http.post(`/client/connected`, body)
}

export const postClientDisconnected = (body) => {
    console.log("postClientDisconnected", body)
    return http.post(`/client/disconnected`, body)
}