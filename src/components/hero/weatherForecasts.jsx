import { CurrentTime } from "./timeForecasts/currentTime";
import { DayForecasts } from "./timeForecasts/dayForecasts";


export function WeatherForecasts({weatherData}) {

  return (
    <section className="md:fixed md:w-[18.75rem] w-full ">
      <aside className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 ">
        <CurrentTime weatherData={weatherData} />
        <div>
          <h2 className="text-xl mb-1 block sm:hidden md:block  font-semibold text-onSurface ">
            5 Days Forecast
          </h2>        
        <DayForecasts />
        </div>
      </aside>
    </section>
  );
}
