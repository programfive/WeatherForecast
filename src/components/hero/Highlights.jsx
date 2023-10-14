import { Card } from '../card';
import { AirQualityIndex } from './dailyHighlights/airQualityIndex';
import { SunriseSunset } from './dailyHighlights/sunriseSunset';
import { TemperatureData } from './dailyHighlights/temperatureData';

export function Highlights({ weatherData,airPollution }) {
	return (
		<>
			<Card className='p-6'>
				<h2 className='text-onSurface  mb-3 font-semibold text-xl'>
					Todays Highlights
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 '>
					<AirQualityIndex airPollution={airPollution} />
					<SunriseSunset
						weatherData={weatherData}
					/>
				</div>
				<TemperatureData
					weatherData={weatherData}
				/>
			</Card>
		</>
	);
}
