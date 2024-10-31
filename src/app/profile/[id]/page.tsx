'use client'

import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'

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
				<LeftMenu type={ 'profile' } />
			</div>
			<div className='w-full lg:w-[70%] xl:w-[50%]'>
				<div className='flex flex-col gap-6'>
					<Feed />
				</div>
			</div>
			<div className='hidden lg:block lg:w-[30%]'>
				<RightMenu userId='test' />
			</div>
		</main>
	)
}
