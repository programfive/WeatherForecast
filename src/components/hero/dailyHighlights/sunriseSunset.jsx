import { Card } from '../../card';
import { SunriseIcon } from '../../icons/SunriseIcon';
import { SunsetIcon } from '../../icons/SunsetIcon';

import { formatUnixTime } from '../../../helpers/main';

export function SunriseSunset({ weatherData }) {
	const { sunrise, sunset } = weatherData.sys || {};
	return (
		<>
			<Card
				variant='secondary'
				className=' p-4 text-onSurfaceVariant font-regular'>
				<h2 className=' my-2'>Sunrise & Sunset</h2>
				<div className='flex justify-between'>
					<div className='flex flex-col xl:flex-row gap-2 justify-center items-center'>
						<SunriseIcon className='w-10 h-10 md:w-12 md:h-12 text-onSurface' />
						<div className='text-center'>
							<p className=' xl:text-lg xl:mb-2'>
								Sunrise
							</p>
							<p className='text-white text-xl font-semiBold xl:text-body2'>
								{formatUnixTime(sunrise)}
							</p>
						</div>
					</div>
					<div className='flex flex-col  xl:flex-row gap-2 justify-center items-center'>
						<SunsetIcon className='w-10 h-10 text-onSurface md:w-12 md:h-12' />
						<div className='text-center'>
							<p className=' xl:text-lg xl:mb-2'>
								Sunset
							</p>
							<p className='text-white text-xl font-semiBold xl:text-body2'>
								{formatUnixTime(sunset)}
							</p>
						</div>
					</div>
				</div>
			</Card>
		</>
	);
}
