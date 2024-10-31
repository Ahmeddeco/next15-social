import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
	return (
		<div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6 '>
			<div className='h-32 relative'>
				<Image
					src={
						'https://images.pexels.com/photos/28967156/pexels-photo-28967156/free-photo-of-scenic-wooden-bridge-in-a-lush-green-forest.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
					}
					alt={''}
					fill
					className='rounded-md object-cover'
				/>
				<Image
					src={
						'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
					}
					alt={''}
					width={48}
					height={48}
					className='rounded-full w-12 h-12 absolute m-auto left-0 right-0 -bottom-6 ring-1 ring-white z-10 object-cover'
				/>
			</div>
			<div className='h-20 flex flex-col items-center mt-2'>
				<span className='font-semibold capitalize'>ahmed mohamed</span>
				<div className='flex items-center gap-4	'>
					<div className='flex'>
						<Image
							src={
								'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
							}
							alt={''}
							width={12}
							height={12}
							className='rounded-full object-cover w-3 h-3 '
						/>
						<Image
							src={
								'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
							}
							alt={''}
							width={12}
							height={12}
							className='rounded-full object-cover w-3 h-3 '
						/>
						<Image
							src={
								'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
							}
							alt={''}
							width={12}
							height={12}
							className='rounded-full object-cover w-3 h-3 '
						/>
					</div>
					<span className='text-sm text-gray-500'>500 follower</span>
				</div>
				<button className='bg-blue-500 capitalize text-white text-xs p-2 rounded-md'>
					my profile
				</button>
			</div>
		</div>
	)
}

export default ProfileCard
