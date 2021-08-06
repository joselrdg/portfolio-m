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
  const [stateIp, setstateIp] = useState();
  // const dataclient = Client();
  const refclientconenected = useRef(false);

  const conIp = (id) => {
    GetUserIp(id)
      .then((response) => {
        console.log("---yiiiii ip", response);
        setstateIp(response);
      })
      .catch((error) => {
        console.log(error);
        conIp(id);
      });
      console.log('stateIp, ', stateIp)
  };

  useEffect(() => {
    if (!refclientconenected.current) {
      refclientconenected.current = true;
      postClientConnected({ startdate: new Date() })
        .then((response) => {
          const id = response.data.id;
          GetIpify(id);
          GetGeolocation(id);
          conIp(id)
          setstateId(id);
        })
        .catch((error) => {
          refclientconenected.current = false;
          // console.log(error);
        });
    }
  }, []);
};
