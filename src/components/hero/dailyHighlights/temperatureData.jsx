/* eslint-disable camelcase */
import { Card } from '../../card';
import { HumidityIcon } from '../../icons/HumidityIcon';
import { PressureIcon } from '../../icons/PressureIcon';
import { TemperatureIcon } from '../../icons/TemperatureIcon';
import { ViewIcon } from '../../icons/ViewIcon';
import {
	formatVisibility,
	formatPressure,
} from '../../../helpers/main';

export function TemperatureData({ weatherData }) {
	const { humidity, pressure, feels_like } =
		weatherData.main || {};

	return (
		<>
			<section className='grid grid-cols-1 font-regular sm:grid-cols-2 xl:grid-cols-4 gap-4'>
				<Card variant='secondary' className='p-4'>
					<h2 className='text-onSurfaceVariant  my-2'>
						Humidity
					</h2>
					<div className='flex justify-between items-center'>
						<HumidityIcon className='w-10 h-10 text-onSurface ' />
						<p className='text-xl font-semibold text-onSurfaceVariant2 md:text-body-2 sm:text-white '>
							{humidity}%
						</p>
					</div>
				</Card>

				<Card variant='secondary' className='p-4'>
					<h2 className='text-onSurfaceVariant  my-2'>
						Pressure
					</h2>
					<div className='flex justify-between items-center'>
						<PressureIcon className='w-10 h-10  text-onSurface ' />
						<p className='text-xl font-semibold text-onSurfaceVariant2 md:text-body-2 sm:text-white '>
							{formatPressure(pressure)}
						</p>
					</div>
				</Card>

				<Card variant='secondary' className='p-4'>
					<h2 className='text-onSurfaceVariant  my-2'>
						Visibility
					</h2>
					<div className='flex justify-between items-center'>
						<ViewIcon className='w-10 h-10  text-onSurface' />
						<p className='text-xl font-semibold text-onSurfaceVariant2 md:text-body-2 sm:text-white '>
							{formatVisibility(
								weatherData?.visibility,
							)}
							Km
						</p>
					</div>
				</Card>

				<Card variant='secondary' className='p-4'>
					<h2 className='text-onSurfaceVariant  my-2'>
						Feels like
					</h2>
					<div className='flex justify-between items-center'>
						<TemperatureIcon className='w-10 h-10  text-onSurface ' />
						<p className='text-xl font-semibold text-onSurfaceVariant2 md:text-body-2 sm:text-white '>
							{parseInt(feels_like)}
							°C
						</p>
					</div>
				</Card>
			</section>
		</>
	);
}
