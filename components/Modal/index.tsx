import { forwardRef, useImperativeHandle, useState } from 'react';

interface propsType {
	modalTitle: string;
	buttonType?: string;
	cancel?: () => void;
	submit?: (e?: any) => void;
	children: any;
}
//** We can use ImperativeHandle not just with modals but with any child components which function need to be accessed by it's parent
//** I usually use it with table and modal where i want to show table info in the modal when show action button is clicked

const Modal = (
	{ modalTitle, buttonType, cancel, submit, children }: propsType,
	ref: any
) => {
	const [toggle, setToggle] = useState(false);

	const open = () => {
		setToggle(true);
	};

	const close = () => {
		setToggle(false);
	};

	const cancelModal = () => {
		if (cancel && typeof cancel == 'function') {
			cancel();
		}
		close();
	};

	const submitModal = () => {
		if (submit && typeof submit == 'function') {
			submit();
		}
		close();
	};

	useImperativeHandle(ref, () => ({
		open,
		close,
	}));

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center ${
				toggle ? 'visible opecity-100' : 'invisible opacity-0'
			}`}
		>
			<div
				className='bg-black bg-opacity-30 absolute top-0 left-0 right-0 bottom-0 cursor-pointer'
				onClick={cancelModal}
			></div>
			<div className='relative w-full max-w-2xl max-h-full z-50'>
				{/* Modal content */}
				<div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
					{/* Modal header */}
					<div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
						<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
							{modalTitle}
						</h3>
						<button
							type='button'
							className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
							onClick={close}
						>
							<svg
								className='w-3 h-3'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 14 14'
							>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
								/>
							</svg>
							<span className='sr-only'>Close modal</span>
						</button>
					</div>
					{/* Modal body */}
					<div className='p-6 space-y-6'>{children}</div>
					{/* Modal footer */}
					{buttonType !== 'hide' && (
						<div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
							{buttonType && buttonType === 'submit' ? (
								<button
									type='submit'
									className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
								>
									Submit
								</button>
							) : (
								<button
									onClick={submitModal}
									type='button'
									className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
								>
									I accept
								</button>
							)}
							<button
								onClick={cancelModal}
								type='button'
								className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
							>
								{buttonType && buttonType === 'submit' ? 'Cancel' : 'Decline'}
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default forwardRef(Modal);
