import { GetIpify } from "./GetIpify";
import { GetUserIp } from "./GetUserIp";
import { ScriptClient as GetGeolocation } from "./GetGeolocation";

export const Client = () => {
  const geolocation = GetGeolocation();
  // console.log(geolocation);
  const ip = GetUserIp();
  // console.log(ip);
  const ipify = GetIpify();
  // console.log(ipify)
  const startdate = new Date();
  // console.log(date)



  // if (geolocation !== null && ip !== null && ipify !== null) {
    return { startdate, geolocation, ip, ipify };
  // } else {
  //   return null;
  // }
};
