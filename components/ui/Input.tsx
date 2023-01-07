import { MouseEventHandler, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { UseFormGetValues } from "react-hook-form/dist/types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// Types
import { User } from "../../types/User";

type EmailInputProps = {
	register: UseFormRegister<User>;
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
				placeholder="Your email..."
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
	register: UseFormRegister<User>;
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
					className={`w-full py-3 pl-3 pr-2 outline-none`}
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
	label?: string;
	register: UseFormRegister<User>;
	getValues: UseFormGetValues<User>;
	isVisible: boolean;
};

export function ConfirmPasswordInput({
	register,
	getValues,
	label = "Confirm password",
	isVisible = false
}: ConfirmPasswordInputProps) {
	const [error, setError] = useState("");

	return (
		<div className="relative w-full flex flex-col-reverse">
			{error.length ? <p className="text-xs font-bold text-red-600 py-1">{error}</p> : null}

			<input
				type={isVisible ? "text" : "password"}
				id="confirmPassword"
				{...register("confirmPassword", {
					onChange() {
						if (getValues("password") !== getValues("confirmPassword")) {
							setError("Your passwords do not match");
						}
					}
				})}
				placeholder="Confirm your password..."
				className={`peer w-full border py-3 pl-3 pr-12" : "p-3"
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
