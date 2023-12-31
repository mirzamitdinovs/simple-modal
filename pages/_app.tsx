import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
			<Navbar />
			<main className={`h-screen overflow-auto p-5`}>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}
