/* eslint-disable camelcase */
import { formatHour, mptToKmh } from "../../../helpers/main";
import { Card } from "../../card";

export function TodayATCard({ hourForecast }) {
  const { weather, main, wind, dt_txt } = hourForecast || {};
  const { icon } = weather ? weather[0] : "";
  const { temp } = main;
  const { deg, speed } = wind || "";
  const hour = formatHour(dt_txt);
  const km = mptToKmh(speed);
  return (
    <section className="flex flex-col gap-4 text-xl text-onSurface">
      <Card className="rounded-lg  px-6 flex flex-col items-center text-center gap-2">
        <p>{hour}</p>
        <img src={`/images/weather_icons/${icon}.png`} className="w-10 h-10" />

        <p>{parseInt(temp)}°</p>
      </Card>

      <Card className="rounded-lg px-6 flex flex-col items-center text-center gap-2">
        <p>{hour}</p>
        <img
          style={{ transform: `rotate(${deg - 180}deg)` }}
          className="w-10 h-10"
          src="/images/weather_icons/direction.png"
          alt="Direction Icon"
        />

        <p>{parseInt(km)}Km/h</p>
      </Card>
    </section>
  );
}
