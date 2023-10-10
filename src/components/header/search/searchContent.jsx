import { motion } from 'framer-motion';
import { SearchItems } from './searchItems';
import { animationHeader } from '../../../animation/header';
import { useSearchLocation } from "../../../hooks/useSearchLocation";
import { SearchContext } from "../../../context/search";
import { useContext } from 'react';
export function SearchContent() {
	const { SearchContentVariant } = animationHeader();
  const {searchQuery}=useContext(SearchContext)
  const { weathers } = useSearchLocation(searchQuery);
	return (
		<>
			<motion.section
				variants={SearchContentVariant}
				className='xl:absolute  h-full xl:h-auto w-full border-t xl:border-none border-on-surface-variant'>
				<motion.ul
					className={` flex flex-col py-4 bg-surface rounded-radius16 xl:mt-2`}>
					{weathers.length !== 0 ? (
						weathers?.map(
							(weather, index) => {
								return (
									<SearchItems
										key={index}
										weather={weather}
									/>
								);
							},
						)
					) : (
						<h1 className='px-4 text-onSurface'>
							No relevant search results found.
						</h1>
					)}
				</motion.ul>
			</motion.section>
		</>
	);
}
