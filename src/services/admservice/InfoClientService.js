import { create } from "../BaseService";

const http = create()

export const getClientsInfo = () => {
    return http.get('/infoclient/list')
}