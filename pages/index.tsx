import FormModalContainer from '@/containers/FormModalContainer';
import SimpleModalContainer from '@/containers/SimpleModalContainer';
import UserTable from '@/containers/UserTable';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRef } from 'react';
import { User } from '../interfaces/user.interface';
export default function Home({
	users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const ref = useRef(null);

	return (
		<>
			<div className='flex items-center'>
				<SimpleModalContainer />
				<div className='ml-10'>
					<FormModalContainer />
				</div>
			</div>
			<UserTable users={users} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps<{
	users: User[];
}> = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json();
	return { props: { users } };
};
