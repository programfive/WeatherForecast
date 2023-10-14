
import { SearchIcon } from '../../icons/searchIcon';
import { ClosedIcon } from '../../icons/closedIcon';
import { SearchContent } from './searchContent';
import { motion } from "framer-motion";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside ";
import { animationHeader } from '../../../animation/header'
import { useContext, useRef } from 'react';
import { OpenContext } from "../../../context/open";
import { SearchContext } from "../../../context/search";
export function Search() {
	const isMedium = useMediaQuery("(max-width: 1280px)");
	const contentRef = useRef(null);
  const {DropMediumVariant,DropVariant}=animationHeader()
	const { open, setOpen } = useContext(OpenContext);
	const { searchQuery, setSearchQuery } = useContext(SearchContext);
	const toggleOpen =()=>setOpen(!open);
  const handleInputChange = (event) =>
    setSearchQuery(event.target.value.toLowerCase());
	  useOnClickOutside(contentRef, setOpen);
	return (
		<>
			<section className='relative xl:max-w-lg  xl:w-full'>
				<button
					onClick={() => toggleOpen()}
					aria-label='Open search'
					className='rounded-radiusCircle bg-surface text-onSurface p-2 sm:p-4 block xl:hidden'>
					<SearchIcon className='w-6 h-6' />
				</button>
				<div
								onClick={() => toggleOpen()}
								className={`${
									open
										? 'block'
										: 'hidden'
								} inset-0 fixed bg-black bg-opacity-80 xl:hidden`}></div>
				<motion.div
					variants={DropMediumVariant}
					initial='hidden'
					animate={open ? 'visible' : 'hidden'}
					exit='exit'
					className={`fixed inset-0 m-auto max-w-xl xl:static ${
						open
							? 'block xl:rounded-radius16'
							: 'hidden xl:rounded-pill'
					} rounded-radius16 xl:block z-30 py-6 px-3 xl:p-0`}>
					<div
						ref={contentRef}
						className='bg-surface rounded-radius16 overflow-hidden'>
						<div className='relative text-onSurfaceVariant2'>
							<button
								onClick={() => toggleOpen()}
								aria-label='Close search'
								type='submit'
								className='absolute  top-1/2 left-4 transform -translate-y-1/2 xl:pointer-events-none'>
								{isMedium ? (
									<ClosedIcon className='w-4 h-4 ' />
								) : (
									<SearchIcon className='w-5 h-5 ' />
								)}
							</button>

							<input
								className='placeholder-onSurfaceVariant2 py-4 outline-none  w-full pl-11 pr-4 bg-surface'
								type='text'
								name='search'
								autoComplete='off'
								placeholder='Search..'
								value={searchQuery}
								onFocus={() =>
									!isMedium &&
									toggleOpen()
								}
								onChange={handleInputChange}
							/>
							{/**
                 * <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                {loading && <Loader className='w-6 h-6 block absolute top-0 rounded-circle left-0' />}
              </div>
                 * 
                 */}
						</div>
						<motion.section
							initial={'closed'}
							variants={DropVariant}
							animate={
								open ? 'open' : 'closed'
							}
							className={`${
								open ? 'block ' : 'hidden'
							}`}>
							<SearchContent />
						</motion.section>
					</div>
				</motion.div>
			</section>
		</>
	);
}
