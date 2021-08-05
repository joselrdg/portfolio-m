import React, { useEffect, useRef, useState } from "react";
import { postClientConnected } from "../services/ClientService";
// import { Client } from "./Client";
import { GetIpify } from "./GetIpify";
import { GetUserIp } from "./GetUserIp";
import { ScriptClient as GetGeolocation } from "./GetGeolocation";

export const HandleClient = () => {
  const [stateId, setstateId] = useState()
  // const dataclient = Client();
  const refclientconenected = useRef(false)

  const geolocation = GetGeolocation();
  const ip = GetUserIp();
  const ipify = GetIpify();
  const startdate = new Date();

  useEffect(() => {
    if (ip != null && ipify != null && geolocation != null && !refclientconenected.current) {
      refclientconenected.current = true;
      postClientConnected({ startdate, geolocation, ip, ipify})
      .then((response) => {
        setstateId(response.data.id);
      })
      .catch((error) => {
        // console.log(error);
      });
    }
  }, [startdate, geolocation, ip, ipify])

};
