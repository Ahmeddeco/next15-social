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

export default function Page({ params }: Props) {
	const { id } = params

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
							/>
							<Image src={''} alt={''} width={128} height={128} />
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
