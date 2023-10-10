import { Logo } from './logo';
import { Search } from './search/search';
import { CurrentLocation } from './currentLocation';

export function Navigation() {
	return (
		<div className='bg-red-500 fixed top-0 w-full z-50'>
			<header
				className=' max-w-[90.625rem] m-auto flex items-center xl:justify-between 
      gap-2 sm:gap-4 p-4'>
				<div className='sm:w-60 w-44 mr-auto xl:mr-0  '>
					<Logo className='object-contain ' />
				</div>
				<Search />
				<CurrentLocation />
			</header>
		</div>
	);
}
