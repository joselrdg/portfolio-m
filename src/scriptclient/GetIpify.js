import { useRef, useState } from "react"
import axios from 'axios';

const createIpify = (opts = {}) => {
    const http = axios.create({
        baseURL: 'https://api64.ipify.org?format=json',
        ...opts
    })
return http
}


export const GetIpify = () => {
    const [ipify, setIpify] = useState(null)
    const ref = useRef(false)

    if (ipify === null && !ref.current) {
        ref.current = true;
        const http = createIpify()
        http.get().then((response) => {
            setIpify({ type: 'ipify', data: response.data, error: null })
        }).catch((error) => {setIpify({ type: 'ipify', data: null, error: error })})
    }
    return ipify
}
