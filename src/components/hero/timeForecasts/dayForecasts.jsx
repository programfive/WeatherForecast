import { Card } from '../../card';

import { useDayForecast } from '../../../hooks/useDayForecast';
import { DayForecast } from './dayForecast';
export function DayForecasts({ forecastsData }) {
	return (
		<Card className=' flex gap-4 flex-col text-onSurface'>
			<h2 className='text-xl text-onSurface  hidden sm:block md:hidden  font-semibold '>
				5 Days Forecast
			</h2>
			DayForecast
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
