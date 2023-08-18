import Modal from '@/components/Modal';
import { useRef, useState } from 'react';
import { ModalType } from '@/types/modal.type';
const iValues = {
	email: '',
	password: '',
	confirmPassword: '',
	firstName: '',
	lastName: '',
	phone: '',
	company: '',
};

const FormModalContainer = () => {
	const [values, setValues] = useState(iValues);
	const ref = useRef<ModalType>(null);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const submit = (e: any) => {
		e.preventDefault();
		alert(JSON.stringify(values));
	};

	const clearValues = () => {
		setValues(iValues);
	};

	const openModal = () => {
		if (ref.current) {
			ref.current.open();
		}
	};
	return (
		<>
			<div>
				{/* Modal toggle */}
				<button
					onClick={openModal}
					className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					type='button'
				>
					Form Modal
				</button>
				{/* Main modal */}
			</div>

			<form onSubmit={submit}>
				<Modal
					modalTitle='Form Modal'
					ref={ref}
					submit={submit}
					buttonType='submit'
					cancel={clearValues}
				>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='email'
							name='email'
							value={values.email}
							onChange={handleChange}
							id='floating_email'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
						/>
						<label
							htmlFor='floating_email'
							className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							Email address
						</label>
					</div>
					<div className='relative z-0 w-full mb-6 group'>
						<input
							type='password'
							name='password'
							value={values.password}
							onChange={handleChange}
							id='floating_password'
							className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
							placeholder=' '
							required
						/>
						<label
							htmlFor='floating_password'
							className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
						>
							Password
						</label>
					</div>

					<div className='grid md:grid-cols-2 md:gap-6'>
						<div className='relative z-0 w-full mb-6 group'>
							<input
								type='text'
								name='firstName'
								value={values.firstName}
								onChange={handleChange}
								id='floating_first_name'
								className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
								placeholder=' '
								required
							/>
							<label
								htmlFor='floating_first_name'
								className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
							>
								First name
							</label>
						</div>
						<div className='relative z-0 w-full mb-6 group'>
							<input
								type='text'
								name='lastName'
								value={values.lastName}
								onChange={handleChange}
								id='floating_last_name'
								className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
								placeholder=' '
								required
							/>
							<label
								htmlFor='floating_last_name'
								className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
							>
								Last name
							</label>
						</div>
					</div>
					<div className='grid md:grid-cols-2 md:gap-6'>
						<div className='relative z-0 w-full mb-6 group'>
							<input
								type='tel'
								name='phone'
								value={values.phone}
								onChange={handleChange}
								id='floating_phone'
								className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
								placeholder=' '
								required
							/>
							<label
								htmlFor='floating_phone'
								className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
							>
								Phone number (123-456-7890)
							</label>
						</div>
						<div className='relative z-0 w-full mb-6 group'>
							<input
								type='text'
								name='company'
								value={values.company}
								onChange={handleChange}
								id='floating_company'
								className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
								placeholder=' '
								required
							/>
							<label
								htmlFor='floating_company'
								className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
							>
								Company (Ex. Google)
							</label>
						</div>
					</div>
				</Modal>
			</form>
		</>
	);
};

export default FormModalContainer;
