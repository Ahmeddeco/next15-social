'use client'

import { navLinks } from '@/constant'
import Link from 'next/link'
import React, { useState } from 'react'

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='md:hidden'>
			<div
				className='flex flex-col gap-[8px] cursor-pointer'
				onClick={() => setIsOpen(!isOpen)}
			>
				<div
					className={`w-8 h-1 bg-blue-500 rounded-sm ${
						isOpen ? 'rotate-45' : ''
					} origin-left ease-in-out duration-500`}
				/>
				<div
					className={`w-8 h-1 bg-blue-500 rounded-sm ${
						isOpen ? 'opacity-0' : ''
					} ease-in-out duration-500`}
				/>
				<div
					className={`w-8 h-1 bg-blue-500 rounded-sm ${
						isOpen ? '-rotate-45' : ''
					} origin-left ease-in-out duration-500`}
				/>
			</div>
			{isOpen && (
				<div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10 capitalize'>
					{navLinks.map(({ title, path, i }) => {
						return (
							<Link href={path} key={i}>
								{title}
							</Link>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default MobileMenu
