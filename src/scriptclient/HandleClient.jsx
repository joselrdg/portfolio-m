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

    if (refclientconenected.current === true && stateId) {
      if (geolocation !== null && !geolocationRef.current) {
        geolocationRef.current = true;
        upClientConnected({ id: stateId, data: { ipify, ip, geolocation } })
          .then((response) => {
            console.log("geolocation ok");
          })
          .catch((error) => {
            console.log("geolocation error");
            geolocationRef.current = false;
          });
      }
      if (ipify !== null && !ipifyRef.current) {
        upClientConnected({ id: stateId, data: { ipify, ip, geolocation } })
          .then((response) => {
            console.log("ipify ok");
            ipifyRef.current = true;
          })
          .catch((error) => {
            console.log("ipify error");
            ipifyRef.current = false;
          });
      }
      if (ip !== null && !ipRef.current) {
        upClientConnected({ id: stateId, data: { ipify, ip, geolocation } })
          .then((response) => {
            console.log("ip ok");
            ipRef.current = true;
          })
          .catch((error) => {
            console.log("ip error");
            ipRef.current = false;
          });
      }
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
  }, [geolocation, ip, ipify, stateId]);
};
