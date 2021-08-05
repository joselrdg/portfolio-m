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
            setIpify({ ip: response.data.ip, error: '0' })
        }).catch((error) => {setIpify({ ip: null, error: error })})
    }
    return ipify
}
