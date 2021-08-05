import React, { useEffect, useRef, useState } from "react";
import {
  postClientConnected,
  upClientConnected,
} from "../services/ClientService";
// import { Client } from "./Client";
import { GetIpify } from "./GetIpify";
import { GetUserIp } from "./GetUserIp";
import { ScriptClient as GetGeolocation } from "./GetGeolocation";

export const HandleClient = () => {
  const [stateId, setstateId] = useState();
  // const dataclient = Client();
  const refclientconenected = useRef(false);
  const geolocationRef = useRef(false);
  const ipRef = useRef(false);
  const ipifyRef = useRef(false);

  const geolocation = GetGeolocation();
  const ip = GetUserIp();
  const ipify = GetIpify();
  // const startdate = new Date();

  useEffect(() => {
    if (!refclientconenected.current) {
      refclientconenected.current = true;
      postClientConnected({ startdate: new Date() })
        .then((response) => {
          const id = response.data.id;
          setstateId(id);
        })
        .catch((error) => {
          refclientconenected.current = false;
          // console.log(error);
        });
    }

    if (refclientconenected.current === true) {
      if (geolocation !== null && !geolocationRef.current) {
        upClientConnected({ id: stateId, data: { ipify, ip, geolocation } })
          .then((response) => {
            geolocationRef.current = true;
            console.log(response);
          })
          .catch((error) => {
            geolocationRef.current = false;
            console.log(error);
          });
      }
      if (ip !== null && !ipRef.current) {
        upClientConnected({ id: stateId, data: { ipify, ip, geolocation } })
          .then((response) => {
            ipRef.current = true;
            console.log(response);
          })
          .catch((error) => {
            ipRef.current = false;
            console.log(error);
          });
      }
      if (ipify !== null && !ipifyRef.current) {
        upClientConnected({ id: stateId, data: { ipify, ip, geolocation } })
          .then((response) => {
            ipifyRef.current = true;
            console.log(response);
          })
          .catch((error) => {
            ipifyRef.current = false;
            console.log(error);
          });
      }
    }
    console.log('refclientconenected.current',refclientconenected.current)

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
  }, [geolocation, ip, ipify]);
};
