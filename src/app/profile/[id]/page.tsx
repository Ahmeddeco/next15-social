'use client'

import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import Image from 'next/image'

interface Props {
	params: {
		id: string
	}
}

export default function Page({ params }: { params: { id: string } }) {
	// let { id } = params

	return (
		<main className='flex gap-6 pt-6'>
			<div className='hidden xl:block xl:w-[20%]'>
				<LeftMenu type={'profile'} />
			</div>
			<div className='w-full lg:w-[70%] xl:w-[50%]'>
				<div className='flex flex-col gap-6'>
					<div className='flex flex-col items-center justify-center'>
						<div className='w-full h-64 relative'>
							<Image
								src={
									'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600'
								}
								alt={''}
								fill
								className='object-cover rounded-md'
							/>
							<Image
								src={
									'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600'
								}
								alt={''}
								width={128}
								height={128}
								className='object-cover w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring ring-white'
							/>
						</div>
						<h1 className='capitalize mt-20 mb-4 text-xl font-medium'>ahmed mohamed</h1>
						<div className="flex items-center justify-center gap-12 mb-4">
							<div className="flex flex-col items-center">
								<span className="font-medium">123</span>
								<span className="text-sm">Post</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">1.2k</span>
								<span className="text-sm">Followers</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">13k</span>
								<span className="text-sm">Following</span>
							</div>
						</div>
					</div>
					<Feed />
				</div>
			</div>
			<div className='hidden lg:block lg:w-[30%]'>
				<RightMenu userId='test' />
			</div>
		</main>
	)
}
