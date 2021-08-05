import React, { useEffect, useRef } from "react";
import { postClientConnected } from "../services/ClientService";
import { Client } from "./Client";

export const HandleClient = () => {
  const dataclient = Client();
  const ref = useRef({
    clientconenected: false,
  });

  useEffect(() => {
    if (
      dataclient.geolocation !== null &&
      dataclient.ip !== null &&
      dataclient.ipify !== null &&
      !ref.current.clientconenected
    ) {
      ref.current.clientconenected = true;
      postClientConnected(dataclient)
        .then((response) => {
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }    
}, [dataclient])



  // console.log(dataclient);

  // return <div></div>;
};
