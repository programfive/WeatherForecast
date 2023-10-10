
import { motion } from 'framer-motion';
import { TodayATCard } from "./todayAtCard";


export function TodayAT({hoursForecastData}) {
	return (
		<>
			<div className='flex gap-4 justify-between overflow-x-auto'>
        {
          hoursForecastData?.map((hourForecast, index) => (
          <motion.div
            key={index}
            className="max-w-[10.9375rem] w-full min-w-max h-auto"
          >
            <TodayATCard hourForecast={hourForecast} />
          </motion.div>
        ))
         }
			</div>
		</>
	);
}
