import { useTheme } from 'next-themes';
import Link from 'next/link';

const Navbar = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<nav className='bg-white border-gray-200 px- bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
			<div className=' mx-auto flex flex-wrap items-center justify-between'>
				<Link href='/' className='flex'>
					<svg
						className='h-10 mr-3'
						viewBox='0 0 52 72'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z'
							fill='#76A9FA'
						/>
						<path
							d='M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z'
							fill='#A4CAFE'
						/>
						<path
							d='M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z'
							fill='#1C64F2'
						/>
					</svg>
					<span className='self-center text-lg font-semibold whitespace-nowrap dark:text-white'>
						Simple Modal Project
					</span>
				</Link>
				<div className='flex md:order-2'>
					<button
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						type='button'
						className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 cursor-pointer'
					>
						{theme === 'dark' ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
								/>
							</svg>
						)}
					</button>
				</div>
				<div
					className='hidden md:flex justify-between items-center w-full md:w-auto md:order-1'
					id='mobile-menu-4'
				></div>
			</div>
		</nav>
	);
};

export default Navbar;
