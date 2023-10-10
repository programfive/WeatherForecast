import { useContext, useEffect, useState } from "react";
import { optionsRequest, getWeather } from "../services/weather";
import { LocationContext } from "../context/location";

export function useDayForecast() {
  const [forecastsData, setForecastsData] = useState([]);
  const [hoursForecastData, setHourForecastData] = useState([]);

  const {
    location: { lat, lon },
  } = useContext(LocationContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
    
        const forecast = await getWeather(optionsRequest.dayForecast(lat, lon));
        setForecastsData(
          forecast.list?.filter((element, index) => index % 8 === 0),
        );
        setHourForecastData(
          forecast.list?.filter((element, index) => index < 8),
        );
    
      } catch (error) {
        console.error("Error fetching weather data:", error);
      
      }
    };

    fetchData();
  }, [lat, lon]);
  return {
    forecastsData,
    hoursForecastData,
  };
}
