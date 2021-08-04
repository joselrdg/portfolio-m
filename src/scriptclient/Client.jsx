import React, { useEffect } from "react";
import { GetIpify } from "./GetIpify";
import { GetUserIp } from "./GetUserIp";
import { ScriptClient as GetGeolocation } from "./GetGeolocation";

export const Client = () => {
    



  const geolocation = GetGeolocation();
  console.log(geolocation);
  const ip = GetUserIp();
  console.log(ip);
  const ipify = GetIpify();
  console.log(ipify)

//   return <div></div>;
};
