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

  const condate = (e) => {
    const d = new Date(e);
    return (
      <td>
        {d.toLocaleDateString()} - {d.toLocaleTimeString()}
      </td>
    );
  };

  const error = (e) => {
    console.log(e);
    if (e === undefined) {
      return <td>undefined</td>;
    } else if (!e.error || e.error === null) {
      return (
        <td>
          {e.position.latitude}/{e.position.longitude}
        </td>
      );
    } else {
      return <td>{e.error}</td>;
    }
  };

  if (!data) {
    return <p>Loading...</p>;
  }
  console.log(data[data.length - 5]);

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
          console.log(e.ipify && e.ipify.ip);
          return (
            <tr>
              {e.startdate && condate(e.startdate)}
              <td>{e.ipify && e.ipify.ip}</td>
              <td>{e.ip && e.ip.ip}</td>
              <td>
                W: {e.screen && e.screen.width} / H:{" "}
                {e.screen && e.screen.height}
              </td>
              {e.geolocation && error(e.geolocation)}
            </tr>
          );
        })}
      </table>
    </div>
  );
};
