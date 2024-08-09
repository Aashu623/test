import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      alert(error);
      setError("");
    }
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
        );
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchWeather();
  }, []);

  const temperature = weatherData?.current.temperature_2m;
  const windSpeed = weatherData?.current.wind_speed_10m;
  const humidity = weatherData?.current.relative_humidity_2m;

  return (
    <div className="flex justify-center py-5">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="bg-white p-4 rounded-3xl shadow-lg">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h6 className="text-lg font-semibold">Warsaw</h6>
              <h6 className="text-lg">{weatherData?.current.time}</h6>
            </div>

            <div className="flex flex-col items-center mt-5 mb-4">
              <h6 className="text-4xl font-bold mb-0">
                {weatherData?.current.temperature_2m}°C
              </h6>
              <span className="text-sm text-gray-600">Stormy</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-base text-gray-600 space-y-2">
                <div>
                  <i className="fas fa-wind"></i>{" "}
                  <span className="ml-1">
                    {weatherData?.current.wind_speed_10m} km/h
                  </span>
                </div>
                <div>
                  <i className="fas fa-tint"></i>{" "}
                  <span className="ml-1">{humidity}%</span>
                </div>
                <div>
                  <i className="fas fa-sun"></i>{" "}
                  <span className="ml-1">0.2h</span>
                </div>
              </div>
              <div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                  width="100"
                  alt="Weather icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
