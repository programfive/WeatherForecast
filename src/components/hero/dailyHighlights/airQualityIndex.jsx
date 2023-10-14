/* eslint-disable camelcase */
import { Card } from "../../card";
import { WindIcon } from "../../icons/WindIcon";


export function AirQualityIndex({airPollution}) {

  const pm25=airPollution?.list?.[0]?.components.pm2_5
  const so2=airPollution?.list?.[0]?.components.so2;
  const no2=airPollution?.list?.[0]?.components.no2;
  const o3=airPollution?.list?.[0]?.components.o3;
  
  return (
    <Card variant="secondary" className="p-4  text-onSurfaceVariant">
      <h2 className="font-regular my-2">Air Quality Index</h2>
      <div className="flex sm:flex-col flex-row xl:flex-row gap-4 items-center">
        <WindIcon className="w-8 h-8 md:w-12 md:h-12 text-on-surface" />

        <section className="grid  grid-cols-2 xl:grid-cols-4 gap-x-4 w-full">
          <div className="flex items-center justify-center gap-2 xl:flex-col-reverse">
            <h3 className="text-lg font-semibold text-white xl:text-body2">
              {pm25}
            </h3>
            <p className="sm:text-lg md:uppercase">pm25</p>
          </div>

          <div className="flex items-center justify-center gap-2 xl:flex-col-reverse">
            <h3 className="text-lg font-semibold text-white xl:text-body2">
           {   so2}
            </h3>
            <p className="sm:text-lg md:uppercase">so2</p>
          </div>

          <div className="flex items-center justify-center gap-2 xl:flex-col-reverse">
            <h3 className="text-lg font-semibold text-white xl:text-body2">
            {  no2}
            </h3>
            <p className="sm:text-lg md:uppercase">no2</p>
          </div>

          <div className="flex items-center justify-center gap-2 xl:flex-col-reverse">
            <h3 className="text-lg font-semibold text-white xl:text-body2">
              {o3}
            </h3>
            <p className="sm:text-lg md:uppercase">o3</p>
          </div>
        </section>
      </div>
    </Card>
  );
}
