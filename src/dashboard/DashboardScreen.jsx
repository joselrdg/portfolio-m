import React, { useEffect, useState } from "react";
import { getClientsInfo } from "../services/admservice/InfoClientService";
import "./Dashboard.css";

export const DashboardScreen = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    getClientsInfo().then((clients) => {
      setdata(clients);
    });
  }, []);

  
  if (!data) {
      return <p>Loading...</p>;
    }
    console.log(data[data.length-1])

  return (
    <div style={{ backgroundColor: "white" }}>
        <table id="customers">
          <tr>
            <th>Date</th>
            <th>Ipify</th>
            <th>Ip</th>
            <th>Screen</th>
            <th>Geolocation</th>
          </tr>
      {data.map((e) => {
          console.log(e.ipify && e.ipify.ip)
          return (

          <tr>
            <td>{e.startdate}</td>
            <td>{e.ipify && e.ipify.ip}</td>
            <td>{e.ip && e.ip.ip}</td>
            <td>W: {e.screen && e.screen.width} / H: {e.screen && e.screen.height}</td>
            <td>{e.geolocation && e.geolocation.position}</td>
          </tr>
      )})}
      </table>
    </div>
  );
};
