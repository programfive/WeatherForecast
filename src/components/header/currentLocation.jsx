import { motion } from 'framer-motion';
import { CurrentLocationIcon } from '../icons/currentLocationIcon';
import { animationHeader } from '../../animation/header';
import { LocationContext } from "../../context/location";
import { geolocation } from "../../helpers/geolocation";
import { useContext } from 'react';
export function CurrentLocation() {
	const {buttonVariants}=animationHeader()
	const {setLocation}=useContext(LocationContext)
  const currentLocation =()=>{
    geolocation((result) => {
      setLocation(result);
    });
  }
	return (
		<>
			<motion.button
				onClick={currentLocation}
				variants={buttonVariants}
				whileHover='hover'
				whileTap='tap'
				initial='initial'
				className='lg:hover:shadow-buttonPrimary  text-onPrimary bg-primary rounded-full xl:rounded-radius28  p-2 sm:p-4 lg:px-6 lg:py-3 active:shadow-buttonSecondary  flex gap-3 items-center justify-center '>
				<CurrentLocationIcon className='w-6 h-6 ' />
				<span className='font-bold lg:block hidden '>
					Current Location
				</span>
			</motion.button>
		</>
	);
}
