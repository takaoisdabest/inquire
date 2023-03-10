import { MouseEventHandler } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type NameInputProps = {
	register: any;
	label?: string;
	error?: string;
};

export function NameInput({ register, label = "Name", error = "" }: NameInputProps) {
	return (
		<div className="relative w-full flex flex-col-reverse">
			{error.length ? <p className="text-xs font-bold text-red-600 py-1">{error}</p> : null}

			<input
				type="text"
				id="name"
				{...register("name")}
				placeholder="Username..."
				className={`peer w-full border py-3 pl-3 pr-12 outline-none outline-offset-0 ${
					error.length > 0
						? "border-red-600 outline-red-600"
						: "border-gray-400 focus:outline-2 focus:outline-accent focus:border-accent"
				} transition-all duration-100`}
			/>

			<label
				htmlFor="name"
				className={`select-none font-mono font-bold text-sm ${
					error.length > 0 ? "text-red-600" : "text-gray-400 peer-focus:text-accent"
				} transition-all duration-100`}
			>
				{label}
			</label>
		</div>
	);
}

type EmailInputProps = {
	register: any;
	label?: string;
	error?: string;
};

export function EmailInput({ register, label = "Email", error = "" }: EmailInputProps) {
	return (
		<div className="relative w-full flex flex-col-reverse">
			{error.length ? <p className="text-xs font-bold text-red-600 py-1">{error}</p> : null}

			<input
				type="email"
				id="email"
				{...register("email")}
				placeholder="Email..."
				className={`peer w-full border py-3 pl-3 pr-12 outline-none outline-offset-0 ${
					error.length > 0
						? "border-red-600 outline-red-600"
						: "border-gray-400 focus:outline-2 focus:outline-accent focus:border-accent"
				} transition-all duration-100`}
			/>

			<label
				htmlFor="email"
				className={`select-none font-mono font-bold text-sm ${
					error.length > 0 ? "text-red-600" : "text-gray-400 peer-focus:text-accent"
				} transition-all duration-100`}
			>
				{label}
			</label>
		</div>
	);
}

type PasswordInputProps = {
	label?: string;
	register: any;
	isVisible?: boolean;
	passwordToggler?: MouseEventHandler<HTMLButtonElement>;
	isConfirm?: boolean;
	error?: string;
};

export function PasswordInput({
	register,
	label = "Password",
	isVisible = false,
	passwordToggler,
	error = ""
}: PasswordInputProps) {
	return (
		<div className="relative w-full flex flex-col-reverse">
			{error.length ? <p className="text-xs font-bold text-red-600 py-1">{error}</p> : null}

			<div
				className={`peer flex border outline-none outline-offset-0 ${
					error.length > 0
						? "border-red-600 outline-red-600"
						: "border-gray-400 focus-within:outline-2 focus-within:outline-accent focus-within:border-accent"
				} transition-all duration-100`}
			>
				<input
					type={isVisible ? "text" : "password"}
					id="password"
					{...register("password")}
					placeholder="Password..."
					className={`w-full py-3 pl-3 pr-0 outline-none`}
				/>
				<button
					type="button"
					className={`bg-transparent ${
						error.length > 0 ? "text-red-600" : "text-gray-400 peer-focus:text-accent"
					} py-4 px-3`}
					title={isVisible ? "Hide password" : "Show password"}
					onClick={passwordToggler}
				>
					{isVisible ? <FaEyeSlash /> : <FaEye />}
				</button>
			</div>

			<label
				htmlFor="password"
				className={`select-none font-mono font-bold text-sm ${
					error.length > 0 ? "text-red-600" : "text-gray-400 peer-focus-within:text-accent"
				} transition-all duration-100`}
			>
				{label}
			</label>
		</div>
	);
}

type ConfirmPasswordInputProps = {
	register: any;
	label?: string;
	isVisible: boolean;
	error?: string;
};

export function ConfirmPasswordInput({
	register,
	label = "Confirm password",
	isVisible = false,
	error = ""
}: ConfirmPasswordInputProps) {
	return (
		<div className="relative w-full flex flex-col-reverse">
			{error.length ? <p className="text-xs font-bold text-red-600 py-1">{error}</p> : null}

			<input
				type={isVisible ? "text" : "password"}
				id="confirmPassword"
				{...register("confirmPassword")}
				placeholder="Confirm your password..."
				className={`peer w-full border p-3
				outline-none outline-offset-0 ${
					error.length > 0
						? "border-red-600 outline-red-600"
						: "border-gray-400 focus:outline-2 focus:outline-accent focus:border-accent"
				} transition-all duration-100`}
			/>

			<label
				htmlFor="confirmPassword"
				className={`select-none font-mono font-bold text-sm ${
					error.length > 0 ? "text-red-600" : "text-gray-400 peer-focus:text-accent"
				} transition-all duration-100`}
			>
				{label}
			</label>
		</div>
	);
}
