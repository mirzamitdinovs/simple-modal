import Modal from '@/components/Modal';
import { useRef } from 'react';
import { ModalType } from '../../types/modal.type';

const SimpleModalContainer = () => {
	const ref = useRef<ModalType>(null);

	const submit = () => {
		alert('modal submitted');
	};

	const openModal = () => {
		if (ref.current) {
			ref.current.open();
		}
	};
	return (
		<div>
			<div>
				{/* Modal toggle */}
				<button
					onClick={openModal}
					className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					type='button'
				>
					Simple Modal
				</button>
				{/* Main modal */}
			</div>

			<Modal modalTitle='Custom Modal' ref={ref} submit={submit}>
				<p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
					With less than a month to go before the European Union enacts new
					consumer privacy laws for its citizens, companies around the world are
					updating their terms of service agreements to comply.
				</p>
				<p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
					The European Union’s General Data Protection Regulation (G.D.P.R.)
					goes into effect on May 25 and is meant to ensure a common set of data
					rights in the European Union. It requires organizations to notify
					users as soon as possible of high-risk data breaches that could
					personally affect them.
				</p>
			</Modal>
		</div>
	);
};

export default SimpleModalContainer;
