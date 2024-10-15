import Link from 'next/link'
import MobileMenu from './MobileMenu'
import { navLinksDesktop } from '@/constant'
import Image from 'next/image'
import {
	ClerkLoaded,
	ClerkLoading,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
	return (
		<header className='w-full bg-white px-2 md:px-8 lg:px-16 xl:px-32'>
			<div className='h-24 flex items-center justify-between'>
				{/* left */}
				<div className='hidden lg:block  w-[20%]'>
					<Link href={'/'} className='font-bold text-xl text-blue-600'>
						AHMSOCIAL
					</Link>
				</div>
				{/* center */}
				<nav className='hidden md:flex w-[50%] text-sm items-center justify-between'>
					{/* links */}
					<div className='flex gap-6 text-gray-600'>
						{navLinksDesktop.map(({ title, path, i, img }) => {
							return (
								<Link href={path} key={i} className='flex gap-2 '>
									<Image
										src={img}
										alt={title}
										width={16}
										height={16}
										className='flex items-center h-auto'
									/>
									<span>{title}</span>
								</Link>
							)
						})}
					</div>
					<div className='hidden xl:flex p-2 items-center bg-slate-100 rounded-xl'>
						<input
							type='text'
							placeholder='search...'
							className='bg-transparent outline-none'
						/>
						<Image src={'/search.png'} alt={'search'} width={14} height={14} />
					</div>
				</nav>
				{/* right */}
				<nav className=' flex items-center gap-4 xl:gap-8 justify-end  w-[30%]'>
					<ClerkLoading>
						<div className='inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white' />
					</ClerkLoading>
					<ClerkLoaded>
						<SignedIn>
							<div className='cursor-pointer'>
								<Image src='/people.png' alt='' width={24} height={24} />
							</div>
							<div className='cursor-pointer'>
								<Image src='/messages.png' alt='' width={20} height={20} />
							</div>
							<div className='cursor-pointer'>
								<Image src='/notifications.png' alt='' width={20} height={20} />
							</div>
							<UserButton />
						</SignedIn>
						<SignedOut>
							<div className='flex items-center gap-2 text-sm'>
								<Image src='/login.png' alt='' width={20} height={20} />
								<Link href='/sign-in'>Login/Register</Link>
							</div>
						</SignedOut>
					</ClerkLoaded>

					<MobileMenu />
				</nav>
			</div>
		</header>
	)
}

export default Navbar
