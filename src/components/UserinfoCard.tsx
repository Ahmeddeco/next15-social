import Link from 'next/link'
import React from 'react'

const UserinfoCard = ({ userId }: { userId?: string }) => {
	return (
		<div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
			{/* top */}
			<div className='flex items-center justify-between font-medium'>
				<span className='text-gray-500 '>Friend Requests</span>
				<Link href={'/'} className='text-blue-500 text-sm'>
					See all
				</Link>
			</div>
		</div>
	)
}

export default UserinfoCard
