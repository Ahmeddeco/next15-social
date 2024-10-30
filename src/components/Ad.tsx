import Image from 'next/image'
import React from 'react'

const Ad = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
	return (
		<div className='p-4 bg-white rounded-lg shadow-md text-sm'>
			{/* top */}
			<div className='flex items-center justify-between text-gray-500 font-medium'>
				<span className='capitalize'>sponsored ads</span>
				<Image src={'/more.png'} alt={''} width={16} height={16} />
			</div>
			{/* bottom */}
			<div
				className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}
			>
				<div
					className={`relative w-full ${
						size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'
					}`}
				>
					<Image
						src={
							'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600'
						}
						alt={''}
						fill
						className='rounded-lg object-cover'
					/>
				</div>
				<div className='flex items-center gap-4'>
					<Image
						src={
							'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600'
						}
						alt={''}
						width={24}
						height={24}
						className='rounded-full w-6 h-6 object-cover'
					/>
					<span className='text-blue-500 font-medium'>BigChef Lounge</span>
				</div>
				<p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
					{size === 'sm'
						? 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
						: size === 'md'
						? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ipsa fugit pariatur saepe incidunt. Voluptatibus, velit?'
						: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis laborum dolore quia, harum cumque modi ab maxime ipsa nostrum vel esse debitis numquam veniam?'}
				</p>
				<button className='bg-gray-200 text-gray-600 p-2 text-xs rounded-lg '>
					Learn more
				</button>
			</div>
		</div>
	)
}

export default Ad
