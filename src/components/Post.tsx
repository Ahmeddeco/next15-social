import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post = () => {
	return (
		<div className='flex flex-col gap-4'>
			{/* user */}
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<Image
						src={
							'https://images.pexels.com/photos/671618/pexels-photo-671618.jpeg?auto=compress&cs=tinysrgb&w=600'
						}
						alt={''}
						width={40}
						height={40}
						className='w-10 h-10 rounded-full'
					/>
					<span className='font-medium'>Giza Pyramids</span>
				</div>
				<Image src={'/more.png'} alt={''} width={16} height={16} />
			</div>
			{/* desc */}
			<div className='flex flex-col gap-4 '>
				<div className='w-full min-h-96 relative'>
					<Image
						src={
							'https://images.pexels.com/photos/14198834/pexels-photo-14198834.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
						}
						alt={''}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className='object-cover rounded-md'
					/>
				</div>
				<p className='	'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum
					nihil beatae rem quisquam quae consectetur quos eos nemo, quaerat id
					delectus aliquam molestiae libero magnam illum. Repellat esse cum
					aspernatur accusamus libero.
				</p>
			</div>
			{/* interaction */}
			<div className='flex items-center justify-between text-sm my-4'>
				<div className='flex gap-8'>
					<div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
						<Image
							src={'/like.png'}
							alt={''}
							width={16}
							height={16}
							className='cursor-pointer '
						/>
						<span className='text-gray-300 '></span>
						<span className='text-gray-300 '>
							645 <span className='hidden md:inline'>Likes</span>
						</span>
					</div>
					<div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
						<Image
							src={'/comment.png'}
							alt={''}
							width={16}
							height={16}
							className='cursor-pointer '
						/>
						<span className='text-gray-300 '></span>
						<span className='text-gray-300 '>
							645 <span className='hidden md:inline'>Comments</span>
						</span>
					</div>
				</div>
				<div className=''>
					<div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
						<Image
							src={'/share.png'}
							alt={''}
							width={16}
							height={16}
							className='cursor-pointer '
						/>
						<span className='text-gray-300 '></span>
						<span className='text-gray-300 '>
							645 <span className='hidden md:inline'>Shares</span>
						</span>
					</div>
				</div>
			</div>
			<Comments />
		</div>
	)
}

export default Post
