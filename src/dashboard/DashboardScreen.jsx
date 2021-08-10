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
      <>
        <td>{d.toLocaleDateString()}</td>
        <td>{d.toLocaleTimeString()}</td>
      </>
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
            <th>Time</th>
            <th>Ip</th>
            <th>Scr: W/H</th>
            <th>City</th>
            <th>Region</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr key={e.id}>
                {e.startdate && condate(e.startdate)}
                <td>{e.ipapi && e.ipapi.ip}</td>
                <td>
                  {e.screen && e.screen.width} / {e.screen && e.screen.height}
                </td>
                <td>{e.ipapi && e.ipapi.city}</td>
                <td>{e.ipapi && e.ipapi.region}</td>
                <td>{e.ipapi && e.ipapi.country_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
