import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState, useEffect } from "react";

// Components
import MobileNav from "../components/ui/MobileNav";

export default function App({ Component, pageProps }: AppProps) {
	const [showNavbarShadow, setShowNavbarShadow] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

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
		<div className="flex flex-col min-h-screen">
			<nav
				className={`fixed w-full flex justify-between items-center p-4 ${
					showNavbarShadow ? "drop-shadow-md" : ""
				} bg-white md:px-6`}
			>
				<Link href="/" className="solid-text-shadow font-righteous font-bold text-2xl md:text-4xl">
					inquire
				</Link>
				<div className="flex gap-4 items-center">
					<Link href="/login" className="font-mono font-bold hover:underline" title="Log in to your account">
						login
					</Link>
					<Link
						href="/signup"
						className="solid-box-shadow font-mono font-bold bg-black text-white hover:text-accent p-2"
						title="Create a new account for free"
					>
						SIGN UP FREE
					</Link>
				</div>
			</nav>

			<Component {...pageProps} />

			{isLoggedIn && <MobileNav />}

			<footer className="flex justify-center items-center bg-black text-white p-2">
				<p className="flex gap-3 text-xs">
					<span className="font-righteous text-accent font-bold">inquire</span>
					<span className="font-extralight">-</span>
					<span className="font-extralight">Saheb Khadem</span>
					<span className="font-extralight">-</span>
					<span className="font-extralight">2023</span>
				</p>
			</footer>
		</div>
	);
}
