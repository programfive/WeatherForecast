import { GitHupIcon } from '../icons/GitHupIcon';
import { SocialNetworks } from './socialNetworks';
import { YouTubeIcon } from '../icons/YouTubeIcon';
import { FaceBookIcon } from '../icons/FaceBookIcon';
export function Footer() {
	return (
		<footer className='p-4 grid place-content-center md:place-content-end '>
			<div className='w-full flex gap-4 text-onSurface md:w-auto mb-4 md:mb-0'>
				<h3 className='text-lg'> Follow me in: </h3>

				<div className='flex gap-2 '>
					<SocialNetworks href='https://github.com/programfive'>
						<GitHupIcon className='w-6 h-6' />
					</SocialNetworks>
					<SocialNetworks href='https://www.youtube.com/channel/UC57Ih2DlIPan9iWqd2VQSRg'>
						<YouTubeIcon className='w-6 h-6 ' />
					</SocialNetworks>
					<SocialNetworks href='https://www.facebook.com/profile.php?id=100078065295761&mibextid=LQQJ4d'>
						<FaceBookIcon className='w-6 h-6 ' />
					</SocialNetworks>
				</div>
			</div>
		</footer>
	);
}
