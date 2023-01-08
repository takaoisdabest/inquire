import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
	type?: "button" | "submit";
	color?: "primary" | "secondary";
	clickHandler?: MouseEventHandler<HTMLButtonElement>;
	isLoading?: boolean;
	disabled?: boolean;
	children?: ReactNode;
};

export function Button({
	type = "button",
	color = "primary",
	clickHandler = () => {},
	isLoading = false,
	disabled = false,
	children
}: ButtonProps) {
	return (
		<button
			type={type}
			onClick={clickHandler}
			className={`flex-1 font-mono font-bold p-2 ${
				color === "primary"
					? "solid-box-shadow bg-black text-white hover:text-accent disabled:shadow-none disabled:bg-slate-600 disabled:hover:text-white"
					: "bg-white text-black hover:bg-slate-100 hover:text-accent disabled:bg-slate-100 disabled:text-slate-400 disabled:hover:text-slate-400"
			} transition-colors duration-100`}
			disabled={disabled || isLoading === true}
		>
			{children}
		</button>
	);
}

type LinkButtonProps = {
	color?: "primary" | "secondary";
	href: string;
	children?: ReactNode;
};

export function LinkButton({ color = "primary", href, children }: LinkButtonProps) {
	return (
		<Link
			href={href}
			className={`flex-1 flex justify-center font-mono font-bold p-2 ${
				color === "primary"
					? "solid-box-shadow bg-black text-white hover:text-accent"
					: "bg-white text-black hover:bg-slate-100 hover:text-accent"
			} transition-colors duration-100`}
		>
			{children}
		</Link>
	);
}
