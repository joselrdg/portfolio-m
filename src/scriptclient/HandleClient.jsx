import { useEffect, useRef } from "react";
import { postClientConnected } from "../services/ClientService";
// import { Client } from "./Client";
import { GetIpify } from "./GetIpify";
import { GetUserIp } from "./GetUserIp";
import { ScriptClient as GetGeolocation } from "./GetGeolocation";
import { getAccessToken } from "../stores/AccessTokenStore";

export const HandleClient = () => {
  // const [stateId, setstateId] = useState();
  // const dataclient = Client();
  const refclientconenected = useRef(false);
  const { innerWidth: width, innerHeight: height } = window;
  const accessToken = getAccessToken() ? true : false;

  useEffect(() => {
    console.log(accessToken)
    if (!accessToken && !refclientconenected.current) {
      refclientconenected.current = true;
      postClientConnected({ startdate: new Date(), screen: { width, height } })
      .then((response) => {
        const id = response.id;
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
  }, []);
};
