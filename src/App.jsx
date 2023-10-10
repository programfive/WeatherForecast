import { Footer } from './components/footer/footer';
import { Navigation } from './components/header/navigation';
import { Highlights } from './components/hero/Highlights';
import { TodayAT } from './components/hero/todayAt/todayAt';
import { WeatherForecasts } from './components/hero/weatherForecasts';
import { useDayForecast } from './hooks/useDayForecast';
import { useWeatherData } from './hooks/useWeatherData';
function App() {
	const { weatherData } = useWeatherData();
	const { forecastsData, hoursForecastData } =
		useDayForecast();
	return (
		<>
			<Navigation />
			<main className='md:mt-24 mt-20 py-2  m-auto  '>
				<div className='flex px-4 gap-4 flex-col '>
					<WeatherForecasts
						weatherData={weatherData}
						forecastsData={forecastsData}
					/>
					<div className='md:ml-[20rem] '>
						<Highlights
							weatherData={weatherData}
						/>
						<div>
							<h2 className='text-onSurface my-2 font-semibold text-xl'>
								Today at
							</h2>
							<TodayAT
								hoursForecastData={
									hoursForecastData
								}
							/>
						</div>
					</div>
				</div>
			</main>
			<Footer/>
		</>
	);
}
export default App;
