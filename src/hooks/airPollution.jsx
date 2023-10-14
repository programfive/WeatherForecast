import { useContext, useEffect, useState } from 'react';
import {
	optionsRequest,
	getWeather,
} from '../services/weather';
import { LocationContext } from '../context/location';

export function useAirPollution() {
	const {
		location: { lat, lon },
	} = useContext(LocationContext);
	const [airPollution, setAirPollution] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getWeather(
					optionsRequest.airPollution(lat, lon),
				);
				setAirPollution(data);
			} catch (error) {
				console.error(
					'Error fetching air pollution data:',
					error,
				);
			}
		};

		fetchData();
	}, [lat, lon]);

	return {
		airPollution,
	};
}
