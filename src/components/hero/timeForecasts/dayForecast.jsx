/* eslint-disable camelcase */

import {
	getFormattedDate,
	getWeekDay,
	roundDegrees,
} from '../../../helpers/main';

export function DayForecast({ forecast }) {
	const { weather, main, dt_txt } = forecast;
	const { temp_max } = main;
	const { icon } = weather ? weather[0] : '';
	const day = getWeekDay(dt_txt);
	const date = getFormattedDate(dt_txt);

	return (
		<article className='text-onSurfaceVariant text-md font-regular flex items-center  justify-between '>
			<header className='flex items-center gap-2 mr-4'>
				{icon ? (
				<img
					className='object-contain w-8 h-8 '
					src={`images/weather_icons/${icon}.png`}
				/>
				) : null}
				<h3 className='text-xl font-semibold text-onSurface'>
					{roundDegrees(temp_max)}°
				</h3>
			</header>
			<p>{day}</p>
			<p>{date}</p>
		</article>
	);
}
