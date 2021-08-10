import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getClientsInfo } from "../services/admservice/InfoClientService";
import { getAccessToken } from "../stores/AccessTokenStore";
import "./Dashboard.css";

export const DashboardScreen = () => {
  const { push } = useHistory();
  const [data, setdata] = useState();
  useEffect(() => {
    getClientsInfo().then((clients) => {
      setdata(clients);
    });
  }, []);

  if (!getAccessToken()) {
    push("/adm/login");
  }

  const condate = (e) => {
    const d = new Date(e);
    return (
      <td>
        {d.toLocaleDateString()} - {d.toLocaleTimeString()}
      </td>
    );
  };

  const error = (e) => {
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

  return (
    <div style={{ backgroundColor: "white" }}>
      <table id="customers">
        <thead>
          <tr>
            <th>Date</th>
            <th>Ipify</th>
            <th>Ip</th>
            <th>Screen</th>
            <th>Geolocation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr key={e.id}>
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
        </tbody>
      </table>
    </div>
  );
};
