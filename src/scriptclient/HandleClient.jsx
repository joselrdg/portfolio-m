import React, { useEffect, useRef, useState } from "react";
import { postClientConnected } from "../services/ClientService";
import { Client } from "./Client";
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
    // if (
    //   !refclientconenected.current.clientconenected
    // ) {
    //   refclientconenected.current.clientconenected = true;
    //   postClientConnected({ startdate })
    //     .then((response) => {
    //       console.log(response);
    //       setstateId(response.data.id);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    if (ip != null && ipify != null && geolocation != null && !refclientconenected.current) {
      refclientconenected.current = true;
      postClientConnected({ startdate, geolocation, ip, ipify})
      .then((response) => {
        console.log(response);
        setstateId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    console.log('useEffect', stateId);
    console.log('geolocation', geolocation)
    console.log('ip', ip)
    console.log('ipify', ipify)
  
    
  }, [startdate, geolocation, ip, ipify])




  // console.log(dataclient);

  // return <div></div>;
};
