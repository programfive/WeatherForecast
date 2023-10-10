import { animationHeader } from '../../../animation/header';
import { LocationIcon } from '../../icons/locationIcon';
import { motion } from 'framer-motion';
import { OpenContext } from "../../../context/open";
import { useContext } from "react";
import { SearchContext } from "../../../context/search";
import { LocationContext } from "../../../context/location";
export function SearchItems({ weather }) {
	const { SearchItemsVariant } = animationHeader();
	const { setOpen } = useContext(OpenContext);
  const { setSearchQuery } = useContext(SearchContext);
  const {setLocation } = useContext(LocationContext);
  const handleOpen = () => setOpen(false);
  const handleSearchQuery = () => setSearchQuery(weather.name);
  const handleSetLocation = () => {
    const coordinates = {
      lat: weather?.lat,
      lon: weather?.lon,
    };
    setLocation(coordinates);
  };
  const handleModifyValue = () => {
    handleOpen();
    handleSearchQuery();
    handleSetLocation();
  };
	return (
		<motion.li
			variants={SearchItemsVariant}
			className='hover:bg-white-alpha-4'>
			<motion.div
				whileHover='hover'
				whileTap='tap'
				variants={SearchItemsVariant}
				className='cursor-pointer text-onSurfaceVariant
        outline-none flex gap-2 px-4 py-2'
				onClick={handleModifyValue}>
				<div className='grid place-content-center'>
					<LocationIcon className='w-6 h-6 ' />
				</div>

				<div className='flex flex-col'>
					<span className='text-onSurface'>
						{weather.name}
					</span>
					<span>
						{`${
							weather.state
								? `${weather.state}, `
								: null
						}`}
						{weather.country}
					</span>
				</div>
			</motion.div>
		</motion.li>
	);
}
