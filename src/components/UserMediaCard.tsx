import { userMedia } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// { userId }: { userId?: string }

const UserMediaCard = () => {
	return (
		<div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
			{/* top */}
			<div className='flex items-center justify-between font-medium'>
				<span className='text-gray-500 '>User Media</span>
				<Link href={'/'} className='text-blue-500 text-sm'>
					See all
				</Link>
			</div>
			{/* bottom */}
			<div className='flex gap-4 flex-wrap justify-start'>
				{userMedia.map((img, i) => {
					return (
						<div className='relative w-1/5 h-24' key={i}>
							<Image
								src={img}
								alt={'man'}
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								className='object-cover rounded-md'
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default UserMediaCard
