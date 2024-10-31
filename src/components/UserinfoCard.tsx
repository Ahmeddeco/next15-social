import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserinfoCard = ({ userId }: { userId?: string }) => {
	return (
		<div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
			{/* top */}
			<div className='flex items-center justify-between font-medium'>
				<span className='text-gray-500 '>User Information</span>
				<Link href={'/'} className='text-blue-500 text-sm'>
					See all
				</Link>
			</div>
			{/* bottom */}
			<div className='flex flex-col gap-4 text-gray-500'>
				<div className='flex items-center gap-2'>
					<span className='capitalize text-xl text-black'>
						transporter film
					</span>
					<span className='capitalize text-sm'>ahmed mohamed</span>
				</div>
				<p className=''>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae commodi
					adipisci natus excepturi, modi illum rerum nobis assumenda magni
					libero nulla doloribus ipsum earum deleniti maxime ea corrupti aliquid
					tempore.
				</p>
				<div className='flex items-center gap-2'>
					<Image src={'/map.png'} alt={''} width={16} height={16} />
					<span className='capitalize'>
						living in <b>egypt</b>
					</span>
				</div>
				<div className='flex items-center gap-2'>
					<Image src={'/school.png'} alt={'school'} width={16} height={16} />
					<span className='capitalize'>
						went to <b>al azhar university</b>
					</span>
				</div>
				<div className='flex items-center gap-2'>
					<Image src={'/work.png'} alt={'work'} width={16} height={16} />
					<span className='capitalize'>
						works at <b>meta.</b>
					</span>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex gap-1 items-center '>
						<Image src={'/link.png'} alt={'link'} width={16} height={16} />
						<Link
							href={'https://ahmed-dev-eg.vercel.app/'}
							className='text-blue-500 font-medium capitalize'
							target='_blank'
						>
							ahmed dev
						</Link>
					</div>
					<div className='flex gap-1 items-center '>
						<Image src={'/date.png'} alt={'date'} width={16} height={16} />
						<span className='capitalize'>joined November 2024</span>
					</div>
				</div>
				<button className='bg-blue-500 text-white text-sm rounded-md p-2'>
					Follow
				</button>
				<span className='text-red-400 self-end capitalize text-xs cursor-pointer'>
					Block user
				</span>
			</div>
		</div>
	)
}

export default UserinfoCard
