import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position);
    });

    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=55.62&longitude=12.08&hourly=temperature_2m`
      )
      .then((e) => {
        setWeather(e.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{location.timestamp}</p>
      <p>Latitude: {location?.coords?.latitude}</p>
      <p>Longitude: {location?.coords?.longitude}</p>

      <div>
        <div>
          {weather?.hourly?.time.map((data) => {
            const splitDate = data.split("-");
            const datoArray = splitDate[2].split("T");
            const dato = datoArray[0];
            const time = datoArray[1];
            console.log(time);
            return (
              <>
                <div>
                  <p>
                    {time} Den {dato}.
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
