
import { useEffect, useState } from "react";
import { getWeather, optionsRequest } from "../services/weather";

export function useSearchLocation(searchQuery) {

  const [loading, setLoading] = useState(false);
  const [weathers, setWeathers] = useState([]);
  useEffect(() => {
    (async () => {
      if (searchQuery.trim()) {
        setLoading(true);
        setWeathers(
          await getWeather(optionsRequest.searchLocation(searchQuery))
        );
        setLoading(false);
      }
    })();
  }, [searchQuery]);
  useEffect(() => {
    (async () => {
      setWeathers(await getWeather(optionsRequest.searchLocation("London")));
    })();
  }, []);

  return {
    weathers,
    loading,
  };
}
