import { Card } from '../../card';
import { CalendarIcon } from '../../icons/CalendarIcon';
import { LocationIcon } from '../../icons/locationIcon';


import {
	roundDegrees,
	getFormattedDateTime,
} from '../../../helpers/main';

export function CurrentTime({weatherData}) {
	
	const { main, weather, dt, timezone, name, sys } =
		weatherData;
	const { description, icon } = weather ? weather[0] : '';
	const { country } = sys || '';
	const { temp } = main || '';
	const tempData = roundDegrees(temp);
	const formatData = getFormattedDateTime(dt, timezone);

	return (
		<Card className='text-onSurface'>
			<header className='flex justify-center flex-col font-semibold gap-1'>
				<h2 className='text-xl '>Now</h2>
				<div className='flex sm:flex-col-reverse md:flex-row  gap-8 items-center'>
					<p className='text-5xl  md:text-7xl'>
						{tempData}
						°c
					</p>
					{icon ? (
						<img
							className='object-contain w-16 h-16 '
							src={`images/weather_icons/${icon}.png`}
							alt='weather icon'
						/>
					) : null}
				</div>
				<p className='text-lg text-onSurfaceVariant2'>
					{description}
				</p>
			</header>
			<section className='mt-2 border-t flex flex-col gap-2 text-onSurfaceVariant font-regular border-on-surface-variant pt-4'>
				<div className='flex gap-2 items-center'>
					<CalendarIcon className='w-5 h-5 text-onSurfaceVariant2' />
					<p>{formatData}</p>
				</div>
				<div className='flex gap-2 items-center'>
					<LocationIcon className='w-5 h-5 text-onSurfaceVariant2' />
					<p>
						{name}, {country}
					</p>
				</div>
			</section>
		</Card>
	);
}
