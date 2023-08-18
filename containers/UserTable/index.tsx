import Modal from '@/components/Modal';
import { User } from '@/interfaces/user.interface';
import { ModalType } from '@/types/modal.type';
import { useRef, useState } from 'react';

interface IProps {
	users: User[];
}
const UserTable = ({ users }: IProps) => {
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const ref = useRef<ModalType>(null);

	const openModal = (user: User) => {
		setSelectedUser(user);
		if (ref.current) {
			ref.current.open();
		}
	};

	const closeModal = () => {
		setSelectedUser(null);
	};
	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-10'>
			<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Name
						</th>
						<th scope='col' className='px-6 py-3'>
							Email
						</th>
						<th scope='col' className='px-6 py-3'>
							Phone
						</th>
						<th scope='col' className='px-6 py-3'>
							Company
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr
							key={user.id}
							className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'
						>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
							>
								{user.name}
							</th>
							<td className='px-6 py-4'>{user.email}</td>
							<td className='px-6 py-4'>{user.phone}</td>
							<td className='px-6 py-4'>{user.company.name}</td>
							<td className='px-6 py-4'>
								<button
									onClick={() => openModal(user)}
									className='font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer'
								>
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
											d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Modal
				modalTitle='User modal'
				ref={ref}
				buttonType='hide'
				cancel={closeModal}
			>
				{selectedUser && (
					<div className='bg-white dark:bg-transparent p-3 shadow-sm rounded-sm'>
						<div className='text-gray-700 dark:text-white'>
							<div className='grid grid-cols-1 text-sm'>
								<div className='grid grid-cols-2'>
									<div className='px-4 py-2 font-semibold'>Full Name</div>
									<div className='px-4 py-2'>{selectedUser.name}</div>
								</div>

								<div className='grid grid-cols-2'>
									<div className='px-4 py-2 font-semibold'>Username</div>
									<div className='px-4 py-2'>{selectedUser.username}</div>
								</div>
								<div className='grid grid-cols-2'>
									<div className='px-4 py-2 font-semibold'>Contact No.</div>
									<div className='px-4 py-2'>{selectedUser.phone}</div>
								</div>
								<div className='grid grid-cols-2'>
									<div className='px-4 py-2 font-semibold'>Address</div>
									<div className='px-4 py-2'>
										{selectedUser.address?.suite} {selectedUser.address?.street}
										, {selectedUser.address?.city}
									</div>
								</div>

								<div className='grid grid-cols-2'>
									<div className='px-4 py-2 font-semibold'>Email</div>
									<div className='px-4 py-2'>
										<a
											className='text-blue-800 dark:text-blue-500'
											href='mailto:jane@example.com'
										>
											{selectedUser.email}
										</a>
									</div>
								</div>
								<div className='grid grid-cols-2'>
									<div className='px-4 py-2 font-semibold'>Company</div>
									<div className='px-4 py-2'>{selectedUser.company?.name}</div>
								</div>
								<div className='grid grid-cols-2'>
									<div className='px-4 py-2 font-semibold'>Website</div>
									<a href={selectedUser.website} className='px-4 py-2'>
										{selectedUser.website}
									</a>
								</div>
							</div>
						</div>
					</div>
				)}
			</Modal>
		</div>
	);
};

export default UserTable;
