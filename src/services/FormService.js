
import { create } from "./BaseService";

const http = create()



export const postFormContact = (body) => {
    return http.post(`/form/contact`, body)
}
