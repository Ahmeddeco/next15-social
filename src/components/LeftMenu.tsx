import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import Image from 'next/image'
import { leftMenuLinks } from '@/constant'
import Ad from './Ad'

const LeftMenu = ({ type }: { type: 'home' | 'profile' }) => {
	return (
		<div className='flex flex-col gap-6'>
			{type === 'home' && <ProfileCard />}
			<div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2'>
				{leftMenuLinks.map(({ href, image, title }, i) => {
					return (
						<>
							<Link
								href={href}
								className='flex items-center gap-4 p-2 '
								key={i}
							>
								<Image src={image} alt={title} width={20} height={20} />
								<span className='capitalize'>{title}</span>
							</Link>
							<hr className='border-t-1 last:border-none border-gray-50 w-36 self-center ' />
						</>
					)
				})}
			</div>
			<Ad size={'sm'} />
		</div>
	)
}

export default LeftMenu
