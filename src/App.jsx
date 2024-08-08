import { useEffect, useRef } from "react";
import "./App.css";
import { fetchWeatherApi } from "openmeteo";

function App() {
  useEffect(() => {
    async function fetchWeather() {
      const params = {
        latitude: [22.7179],
        longitude: [75.8333],
        hourly: "temperature_2m",
      };
      const url = "https://api.open-meteo.com/v1/forecast";
      const responses = await fetchWeatherApi(url, params);
      const response = responses[0];
      console.log(response);
      const utcOffsetSeconds = response.utcOffsetSeconds();
      const timezone = response.timezone();
      const timezoneAbbreviation = response.timezoneAbbreviation();
      const latitude = response.latitude();
      const longitude = response.longitude();
      console.log(
        utcOffsetSeconds,
        timezone,
        timezoneAbbreviation,
        latitude,
        longitude
      );
    }
    fetchWeather();
  });
  return (
    <div className="flex w-screen h-screen">
      <div className="container flex flex-col w-2/6 bg-red-100 p-10 gap-5 items-center self-center">
        <span className="text-2xl">Button click count:</span>
        <button className="text-2xl border p-2 border-black  rounded-sm">
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
