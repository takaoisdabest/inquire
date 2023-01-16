import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// Icons
import { FaHome, FaDesktop, FaCog, FaDoorOpen } from "react-icons/fa";

function MobileNav() {
	const router = useRouter();
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	return (
		<nav className="sticky bottom-0 w-full flex items-stretch border-t-[1px] text-xl bg-white shadow-top md:hidden">
			<Link
				href="/"
				className={`flex-1 flex flex-col justify-center items-center py-6 shadow-hidden hover:bg-slate-100 ${
					router.pathname === `/` ? "text-accent shadow-under" : "hover:text-accent hover:shadow-under"
				} transition-all duration-100`}
				aria-label="home page"
			>
				<FaHome />
			</Link>
			<Link
				href="/u/username/dashboard"
				className={`flex-1 flex flex-col justify-center items-center py-6 shadow-hidden hover:bg-slate-100 ${
					router.pathname === `/u/[name]/dashboard`
						? "text-accent shadow-under"
						: "hover:text-accent hover:shadow-under"
				} transition-all duration-100`}
				aria-label="dashboard page"
			>
				<FaDesktop />
			</Link>
			<Link
				href="/u/username/settings"
				className={`flex-1 flex flex-col justify-center items-center py-6 shadow-hidden hover:bg-slate-100 ${
					router.pathname === `/u/[name]/settings`
						? "text-accent shadow-under"
						: "hover:text-accent hover:shadow-under"
				} transition-all duration-100`}
				aria-label="account settings page"
			>
				<FaCog />
			</Link>
			<button
				className="flex-1 flex flex-col justify-center items-center py-6 shadow-hidden hover:bg-slate-100 hover:text-accent hover:shadow-under transition-all duration-100"
				aria-label="log out"
			>
				<FaDoorOpen />
			</button>
		</nav>
	);
}
export default MobileNav;
