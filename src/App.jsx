import { Navigation } from './components/header/navigation';
import { Highlights } from './components/hero/Highlights';
import { TodayAT } from './components/hero/todayAt/todayAt';
import { WeatherForecasts } from './components/hero/weatherForecasts';
import { useDayForecast } from './hooks/useDayForecast';
import { useWeatherData } from './hooks/useWeatherData';
import { Footer } from './components/footer/footer';
import { useAirPollution } from './hooks/airPollution';
import { LoaderContext } from './context/loader';
import { useContext } from 'react';
import { Loading } from './components/loading';
function App() {
	const { weatherData } = useWeatherData();
	const { forecastsData, hoursForecastData } =
		useDayForecast();
	const { airPollution } = useAirPollution();
	const { loader } = useContext(LoaderContext);

	return (
		<>
			<Navigation />

			{!loader ? (
				<div>
					<div className='md:mt-24 mt-20 py-2  m-auto  '>
						<main className='flex px-4 gap-4 flex-col '>
							<WeatherForecasts
								weatherData={weatherData}
								forecastsData={
									forecastsData
								}
							/>
							<div className='md:ml-[20rem]'>
								<Highlights
									weatherData={
										weatherData
									}
									airPollution={
										airPollution
									}
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
						</main>
					</div>
					<Footer />
				</div>
			) : (
				<Loading />
			)}
		</>
	);
}
export default App;
