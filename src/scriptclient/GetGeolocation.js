import { useRef, useState } from "react"

export const ScriptClient = (id) => {
  const [geolocation, setGeolocation] = useState(null)
  const ref = useRef(false)

  if (geolocation === null && !ref.current) {
    ref.current = true;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setGeolocation({ position: { latitude: position.coords.latitude, longitude: position.coords.longitude }, error: '0'})
        },
        function (error) {
          // console.error(`Error Code =  ${error.code} -  error.message`);
          setGeolocation({ type: "geolocation", error: error.message, position: null });
        }
      );
    } else {
      geolocation === null && setGeolocation({ type: "geolocation", error: "Not Available", position: null });
    }
  }
  return geolocation
}
