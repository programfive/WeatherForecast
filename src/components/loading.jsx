import { LoaderIcon } from './icons/LoaderIcon';
export function Loading() {
	return (
		<div className='relative grid place-content-center'>
			<div className='flex justify-center items-center h-screen'>
				<LoaderIcon className='animate-spin h-10 w-10 text-primary' />
			</div>
		</div>
	);
}
