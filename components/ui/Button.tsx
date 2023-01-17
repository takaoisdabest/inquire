import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

type ButtonProps = {
	type?: "button" | "submit";
	color?: "primary" | "secondary" | "danger";
	clickHandler?: (event: MouseEvent<HTMLButtonElement>) => void;
	isLoading?: boolean;
	disabled?: boolean;
	ariaLabel: string;
	children?: ReactNode;
};

export function Button({
	type = "button",
	color = "primary",
	clickHandler = () => {},
	isLoading = false,
	disabled = false,
	ariaLabel,
	children
}: ButtonProps) {
	return (
		<button
			type={type}
			onClick={clickHandler}
			className={`flex-1 flex justify-center items-center font-mono font-bold p-2 ${
				color === "primary"
					? "solid-box-shadow bg-black text-white hover:text-accent disabled:shadow-none disabled:bg-slate-600 disabled:hover:text-white active:shadow-none"
					: color === "secondary"
					? "bg-white text-black hover:bg-slate-100 hover:text-accent disabled:bg-slate-100 disabled:text-slate-400 disabled:hover:text-slate-400 active:bg-slate-200"
					: "solid-box-shadow-danger bg-black text-white hover:text-red-600 disabled:shadow-none disabled:bg-slate-600 disabled:hover:text-white active:shadow-none"
			} transition-colors duration-100`}
			disabled={disabled || isLoading === true}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	);
}

type LinkButtonProps = {
	color?: "primary" | "secondary" | "danger";
	href: string;
	ariaLabel: string;
	children?: ReactNode;
};

export function LinkButton({ color = "primary", href, ariaLabel, children }: LinkButtonProps) {
	return (
		<Link
			href={href}
			className={`flex-1 flex justify-center items-center gap-1 font-mono font-bold p-2 ${
				color === "primary"
					? "solid-box-shadow bg-black text-white hover:text-accent active:shadow-none"
					: color === "secondary"
					? "bg-white text-black hover:bg-slate-100 hover:text-accent active:bg-slate-200"
					: "solid-box-shadow-danger bg-black text-white hover:text-red-600 active:shadow-none"
			} transition-colors duration-100`}
			aria-label={ariaLabel}
		>
			{children}
		</Link>
	);
}
