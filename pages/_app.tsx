import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState, useEffect } from "react";

// Components
import MobileNav from "../components/ui/MobileNav";
import { Button } from "../components/ui/Button";

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
				className={`fixed w-full flex justify-center items-center p-4 ${
					showNavbarShadow ? "drop-shadow-md" : ""
				} bg-white md:px-6 md:justify-between`}
			>
				<Link
					href="/"
					className="solid-text-shadow font-righteous font-bold text-2xl md:text-4xl"
					aria-label-label="home page"
				>
					inquire
				</Link>
				{isLoggedIn ? (
					<div className="hidden gap-4 items-center md:flex">
						<Link
							href="/u/name/dashboard"
							className="font-mono font-bold hover:underline"
							aria-label-label="dashboard page"
						>
							dashboard
						</Link>
						<Link
							href="/u/name/settings"
							className="font-mono font-bold hover:underline"
							aria-label-label="account settings page"
						>
							settings
						</Link>
						<Button ariaLabel="log out">logout</Button>
					</div>
				) : (
					<div className="hidden gap-4 items-center md:flex">
						<Link href="/login" className="font-mono font-bold hover:underline" aria-label-label="log in">
							login
						</Link>
						<Link
							href="/signup"
							className="solid-box-shadow font-mono font-bold bg-black text-white hover:text-accent p-2"
							aria-label-label="sign up"
						>
							SIGN UP FREE
						</Link>
					</div>
				)}
			</nav>

			<Component {...pageProps} />

			{isLoggedIn ? (
				<MobileNav />
			) : (
				<Link
					href="/login"
					className="flex justify-center items-center bg-accent text-white p-4 font-mono font-bold text-lg hover:underline md:hidden"
					aria-label-label="log in"
				>
					Log in to start creating
				</Link>
			)}

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
