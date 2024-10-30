import Image from 'next/image'
import React from 'react'

const AddPost = () => {
	return (
		<div className='bg-white rounded-lg flex gap-4 justify-between text-sm p-4 shadow-md'>
			{/* avatar */}
			<Image
				src={
					'https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?auto=compress&cs=tinysrgb&w=600'
				}
				alt={''}
				width={48}
				height={48}
				className='w-12 h-12 object-cover rounded-full'
			/>
			{/* post */}
			<div className='flex-1'>
				{/* text input */}
				<div className='flex gap-4 '>
					<textarea
						placeholder="What's on your mind?"
						className='bg-slate-100 rounded-lg flex-1 p-2'
					></textarea>
					<Image
						src={'/emoji.png'}
						alt={''}
						width={20}
						height={20}
						className='w-5 h-5 cursor-pointer self-end'
					/>
				</div>
				{/* post option */}
				<div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
					<div className='flex items-center gap-2 cursor-pointer'>
						<Image src={'/addimage.png'} alt={''} width={20} height={20} />
						Photo
					</div>
					<div className='flex items-center gap-2 cursor-pointer'>
						<Image src={'/addVideo.png'} alt={''} width={20} height={20} />
						Video
					</div>
					<div className='flex items-center gap-2 cursor-pointer'>
						<Image src={'/addevent.png'} alt={''} width={20} height={20} />
						Event
					</div>
					<div className='flex items-center gap-2 cursor-pointer'>
						<Image src={'/poll.png'} alt={''} width={20} height={20} />
						Poll
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddPost
