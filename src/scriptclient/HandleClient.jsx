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


  useEffect(() => {
    if (!refclientconenected.current) {
      refclientconenected.current = true;
      postClientConnected({ startdate: new Date() })
        .then((response) => {
          const id = response.data.id;
          GetIpify(id);
          GetGeolocation(id);
          setstateId(id);
        })
        .catch((error) => {
          refclientconenected.current = false;
          // console.log(error);
        });
      }
    }, []);
    stateId && GetUserIp(stateId).then((response) => {console.log('---yiiiii ip',response)}).catch((error) => {console.log(error)});
};
