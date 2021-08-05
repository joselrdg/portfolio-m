import React, { useEffect, useRef, useState } from "react";
import { postClientConnected } from "../services/ClientService";
// import { Client } from "./Client";
import { GetIpify } from "./GetIpify";
import { GetUserIp } from "./GetUserIp";
import { ScriptClient as GetGeolocation } from "./GetGeolocation";

export const HandleClient = () => {
  const [stateId, setstateId] = useState();
  // const dataclient = Client();
  const refclientconenected = useRef({
    star: false
  });

  const geolocation = GetGeolocation();
  const ip = GetUserIp();
  const ipify = GetIpify();
  const startdate = new Date();

  useEffect(() => {
    if (!refclientconenected.current.start) {
      postClientConnected({ startdate: new Date() })
      .then((response) => {
        refclientconenected.current.star = true;
        const id = response.data.id
        setstateId(id);
      })
      .catch((error) => {
        // console.log(error);
      });

      if (ipify !== null){
        // updapteClientConnected()
      }

      // if (ip != null && ipify != null && geolocation != null) {
      //   console.log("use effect todos pasaron", geolocation, ip, ipify);
      //   refclientconenected.current = true;
      //   postClientConnected({ startdate, geolocation, ip, ipify })
      //     .then((response) => {
      //       setstateId(response.data.id);
      //     })
      //     .catch((error) => {
      //       // console.log(error);
      //     });
      // }
    }

  }, [ipify]);
};
