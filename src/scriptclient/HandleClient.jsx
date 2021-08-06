import { useEffect, useRef } from "react";
import { postClientConnected } from "../services/ClientService";
// import { Client } from "./Client";
import { GetIpify } from "./GetIpify";
import { GetUserIp } from "./GetUserIp";
import { ScriptClient as GetGeolocation } from "./GetGeolocation";

export const HandleClient = () => {
  // const [stateId, setstateId] = useState();
  // const dataclient = Client();
  const refclientconenected = useRef(false);
  const { innerWidth: width, innerHeight: height } = window;

  useEffect(() => {
    if (!refclientconenected.current) {
      refclientconenected.current = true;
      postClientConnected({ startdate: new Date(), screen: { width, height } })
        .then((response) => {
          const id = response.data.id;
          GetIpify(id);
          GetGeolocation(id);
          GetUserIp(id);
          // setstateId(id);
        })
        .catch((error) => {
          refclientconenected.current = false;
          // console.log(error);
        });
    }
  }, [width, height]);
};
