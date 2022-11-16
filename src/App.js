import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const nu = new Date().getHours();

  console.log(nu);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position);
    });

    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=55.62&longitude=12.08&hourly=temperature_2m,rain&timezone=Europe%2FBerlin`
      )
      .then((e) => {
        setWeather(e.data);
        console.log(weather);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>

      <div style={{ textAlign: "center" }}>
        <h2>Lige nu</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h2>Time: {nu}</h2>
          <h2>Grader: {weather?.hourly.temperature_2m[nu]}</h2>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          {weather?.hourly?.time.map((data) => {
            const splitDate = data.split("-");
            const datoArray = splitDate[2].split("T");
            const dato = datoArray[0];
            const time = datoArray[1];

            return (
              <>
                <div key={time}>
                  <p>
                    kl {time} Den {dato}. er det
                  </p>
                </div>
              </>
            );
          })}
        </div>
        <div>
          {weather?.hourly?.temperature_2m?.map((data) => {
            return <p> {data} °C</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
