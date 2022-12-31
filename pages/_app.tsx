import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [showNavbarShadow, setShowNavbarShadow] = useState(false);

	const toggleNavbarShadow = () => {
		if (window.pageYOffset > 0) {
			setShowNavbarShadow(true);
		} else {
			setShowNavbarShadow(false);
		}
	};

	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener("scroll", toggleNavbarShadow);
			return () => window.removeEventListener("scroll", toggleNavbarShadow);
		}
	});

	return (
		<>
			<nav
				className={`fixed w-full flex justify-between items-center px-2 py-4 ${
					showNavbarShadow ? "drop-shadow-md" : ""
				} bg-white md:px-6`}
			>
				<Link href="/" className="solid-text-shadow font-righteous font-bold text-2xl md:text-4xl">
					inquire
				</Link>
				<div className="flex gap-4 items-center">
					<Link href="/login" className="font-mono font-bold hover:underline">
						login
					</Link>
					<Link
						href="/signup"
						className="solid-box-shadow font-mono font-bold bg-black text-white hover:text-accent px-2 py-1"
					>
						SIGN UP FREE
					</Link>
				</div>
			</nav>
			<Component {...pageProps} />
		</>
	);
}
