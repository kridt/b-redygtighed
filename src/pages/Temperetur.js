import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Temperetur() {
  const nu = new Date().getHours();
  const [weather, setWeather] = useState({});
  const [currentTime, setCurrentTime] = useState("");
  /*   const [tempArray, setTempArray] = useState([]);
  const [timeArray, setTimeArray] = useState([]); */

  var timeLine = nu * 41 + 250;
  window.setInterval(function () {
    const minut = new Date().getMinutes();
    const sec = new Date().getSeconds();
    // call your function here
    setCurrentTime(`${nu}:${minut}:${sec}`);
  }, 1000);

  useEffect(() => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=55.62&longitude=12.08&hourly=temperature_2m&timezone=Europe%2FBerlin`
      )
      .then((e) => {
        setWeather(e.data);
      })
      .then(() => {
        /* console.log(weather); */
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h2>Lige nu</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h2>Time: {currentTime}</h2>
          <h2>Grader: {weather?.hourly?.temperature_2m[nu]} °C</h2>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginLeft: "1.1em",
        }}
      >
        <p style={{ flex: "2" }}>Dato</p>
        <p style={{ flex: "1" }}>Udenfor</p>
        <p style={{ flex: "1" }}>Indenfor</p>
        <p style={{ flex: "1" }}>Boksen</p>
      </div>

      <div>
        <hr
          style={{
            backgroundColor: "black",
            position: "absolute",
            top: `${timeLine}px`,
            left: "0",
            right: "0",
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          {weather?.hourly?.time?.slice(0, 24).map((data) => {
            const splitDate = data.split("-");
            const datoArray = splitDate[2].split("T");
            const dato = datoArray[0];
            const time = datoArray[1];

            return (
              <>
                <div style={{ height: "25px" }} key={time}>
                  <p>
                    kl {time} Den {dato}. er det
                  </p>
                </div>
              </>
            );
          })}
        </div>
        <div>
          {weather?.hourly?.temperature_2m?.slice(0, 24).map((data) => {
            return <p style={{ height: "25px" }}> {data} °C</p>;
          })}
        </div>
        <div>
          {weather?.hourly?.temperature_2m?.slice(0, 24).map((data) => {
            return <p style={{ height: "25px" }}> {data} °C</p>;
          })}
        </div>
        <div>
          {weather?.hourly?.temperature_2m?.slice(0, 24).map((data) => {
            return <p style={{ height: "25px" }}> {data} °C</p>;
          })}
        </div>
      </div>
    </div>
  );
}
