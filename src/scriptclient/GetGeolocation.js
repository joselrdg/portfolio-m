import { upClientConnected } from "../services/ClientService";

export const ScriptClient = (id) => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        upClientConnected({ id: id, data: { geolocation: { position: { latitude: position.coords.latitude, longitude: position.coords.longitude }, error: '0' } } })
          .then((response) => {
          })
          .catch((error) => {
          });
      },
      function (error) {
        upClientConnected({ id: id, data: { geolocation: { error: error.message, position: null } } })
          .then((response) => {
          })
          .catch((error) => {
          });
        // console.error(`Error Code =  ${error.code} -  error.message`);
      }
    );
  } else {
    upClientConnected({ id: id, data: { geolocation: { error: "Not Available", position: null } } })
      .then((response) => {
      })
      .catch((error) => {
      });
  }
}
