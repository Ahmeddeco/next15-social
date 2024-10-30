import Image from 'next/image'
import React from 'react'

const Comments = () => {
	return (
		<div>
			{/* write */}
			<div className='flex items-center gap-4'>
				<Image
					src={
						'https://images.pexels.com/photos/28050583/pexels-photo-28050583/free-photo-of-kapadokya.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
					}
					alt={''}
					width={32}
					height={32}
					className='w-8 h-8 rounded-full'
				/>
				<div className='flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
					<input
						type='text'
						placeholder='Write a comment'
						className='bg-transparent outline-none'
					/>
					<Image
						src={'/emoji.png'}
						alt={''}
						width={16}
						height={16}
						className='cursor-pointer'
					/>
				</div>
			</div>
			{/* Comments */}
			<div className=''>
				{/* Comment */}
				<div className='flex gap-4 justify-between mt-6'>
					{/* avatar */}
					<Image
						src={
							'https://images.pexels.com/photos/28486863/pexels-photo-28486863/free-photo-of-elegant-turkish-coffee-serving-on-ornate-tray.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
						}
						alt={''}
						width={40}
						height={40}
						className='w-10 h-10 rounded-full'
					/>
					{/* desc */}
					<div className='flex flex-col gap-2 flex-1'>
						<span className='font-medium'>Bernice spencer</span>
						<p className=''>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum non
							provident amet nulla corporis accusamus, magnam reiciendis sint
							dolorem est magni, voluptas pariatur quasi natus molestias
							dignissimos. Nulla, ut cum.
						</p>
						<div className='flex items-center gap-8 text-xs text-gray-500'>
							<div className='flex items-center gap-4'>
								<Image
									src={'/like.png'}
									alt={''}
									width={12}
									height={12}
									className='cursor-pointer w-4 h-4'
								/>
								<span className='text-gray-300'>|</span>
								<span className='text-gray-500'>123 Likes</span>
							</div>
							<div className=''>Reply</div>
						</div>
					</div>
					{/* icon */}
					<Image
						src={'/more.png'}
						alt={''}
						width={16}
						height={16}
						className='cursor-pointer w-4 h-4'
					/>
				</div>
			</div>
		</div>
	)
}

export default Comments
