import React, { useEffect, useState } from "react";

import SideMenu from "./SideMenu";
import Navbar from "./Navbar";
import Card from "./Card";

function kelvinToCelsius(k) {
  return (k - 273.15).toFixed(2);
}

const WeatherPage = () => {
  const [data, setData] = useState(null);

  function fetchData(location) {
    const apiKey = "0240e7cdfe229633e5c66bb2c7e6e85a";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    // fetch data from api and update state
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data?.weather?.length > 0) setData(data);
        else alert(`No weather found for "${location}"`);
      });
  }

  // by default, fetch weather data for Barrie
  useEffect(() => {
    fetchData("Barrie");
  }, []);

  function handleWeatherButtonClick(e) {
    e.preventDefault();
    var location = document.getElementById("location").value;
    fetchData(location);
  }

  return (
    <div>
      <SideMenu activeTab={"weather"} />
      <div className="p-2 dashboard-container">
        <Navbar />
        <div>
          <Card title="Weather">
            <div className="card-body text-center">
              <img
                id="weather-icon"
                src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />

              <p className="h2" id="temperature">
                {kelvinToCelsius(data?.main?.temp)}&deg;C
              </p>

              <p className="h5">
                <i className="fas fa-map-marker-alt"></i>
                <strong id="location-title">{data?.name}</strong>
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    <i className="fas fa-temperature-low"></i>
                    <strong id="min-temp">
                      Min: {kelvinToCelsius(data?.main?.temp_min)}&deg;C{" "}
                    </strong>
                  </p>
                  <p>
                    <i className="fas fa-temperature-high"></i>
                    <strong id="max-temp">
                      Max: {kelvinToCelsius(data?.main?.temp_max)}&deg;C{" "}
                    </strong>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <strong id="visibility">
                      Visibility: {data?.weather[0]?.main}
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
              <div className="col-auto">
                <label htmlFor="location" className="col-form-label">
                  Enter Other Location:
                </label>
              </div>
              <div className="col-auto">
                <input type="text" id="location" className="form-control" />
              </div>
              <button
                className="btn btn-primary mt-2"
                onClick={handleWeatherButtonClick}
              >
                Go
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
