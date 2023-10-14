import { Card } from '../../card';
import { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../../context/location';

import { DayForecast } from './dayForecast';
import {
	getWeather,
	optionsRequest,
} from '../../../services/weather';
export function DayForecasts() {
	const [forecastsData, setForecastsData] = useState([]);
	const { location } = useContext(LocationContext);
	const lat = location?.lat;
	const lon = location?.lon;
	useEffect(() => {
		const fetchData = async () => {
			const forecast = await getWeather(
				optionsRequest.dayForecast(lat, lon),
			);
			setForecastsData(
				forecast.list?.filter(
					(element, index) => index % 8 === 0,
				),
			);
		};
		fetchData();
	}, []);

	return (
		<Card className=' flex gap-4 flex-col text-onSurface'>
			<h2 className='text-xl text-onSurface  hidden sm:block md:hidden  font-semibold '>
				5 Days Forecast
			</h2>
			{forecastsData?.map((forecast, index) => {
				return (
					<DayForecast
						key={index}
						forecast={forecast}
					/>
				);
			})}
		</Card>
	);
}
