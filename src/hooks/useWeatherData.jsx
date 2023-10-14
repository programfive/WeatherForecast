import { useContext, useEffect, useState } from 'react';
import {
	getWeather,
	optionsRequest,
} from '../services/weather';
import { LocationContext } from '../context/location';
import { LoaderContext } from '../context/loader';
export function useWeatherData() {
	const [weatherData, setWeatherData] = useState([]);
	const { location } = useContext(LocationContext);
	const { setLoader } = useContext(LoaderContext);

	const { lat, lon } = location;

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoader(true);

				const data = await getWeather(
					optionsRequest.currentWeather(lat, lon),
				);
				setWeatherData(data);

				setLoader(false);
			} catch (error) {
				console.error(
					'Error fetching weather data:',
					error,
				);

				setLoader(false);
			}
		};
		fetchData();
	}, [lat, lon]);

	return {
		weatherData,
	};
}
