import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

// Types
import { UserSignUp, UserSignUpSchema } from "../types/Credentials";

// Components
import { EmailInput, PasswordInput, ConfirmPasswordInput, NameInput } from "../components/ui/Input";
import { Button, LinkButton } from "../components/ui/Button";
import { User } from "../types/User";

export default function signup() {
	const { register, handleSubmit, formState, setError } = useForm<UserSignUp>({
		resolver: zodResolver(UserSignUpSchema),
		mode: "onChange"
	});
	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (userData: UserSignUp) => {
		setIsLoading(true);

		try {
			const res = await axios.post<User>("/api/auth/register", userData);
			console.log("User: ", res.data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 500) {
					console.log("server error");
				}

				switch (error.response?.data.code) {
					case "P2002":
						setError("email", { type: "min", message: error.response?.data.message });
						break;
					case 0:
						setError("name", { type: "required", message: error.response?.data.message });
						break;
					case 1:
						setError("name", { type: "max", message: error.response?.data.message });
						break;
					case 2:
						setError("email", { type: "min", message: error.response?.data.message });
						break;
					case 3:
						setError("password", { type: "min", message: error.response?.data.message });
						break;
					case 4:
						setError("confirmPassword", { type: "min", message: error.response?.data.message });
						break;
				}
			}
		}

		setIsLoading(false);
	};

	const passwordToggler = () => {
		setIsVisible((previousState) => !previousState);
	};

	return (
		<>
			<Head>
				<title>Inquire | Sign Up</title>
				<meta name="description" content="Log in to your inquire account." />
			</Head>
			<main className="flex-1 flex flex-col gap-4 items-center justify-center px-4 py-20">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full flex flex-col justify-center items-center gap-4 md:w-1/2 lg:w-1/3"
				>
					<h1 className="font-righteous font-bold text-4xl pb-4">Sign Up</h1>

					<NameInput register={register} error={formState.errors.name?.message} />
					<EmailInput register={register} error={formState.errors.email?.message} />
					<PasswordInput
						register={register}
						isVisible={isVisible}
						passwordToggler={passwordToggler}
						error={formState.errors.password?.message}
					/>
					<ConfirmPasswordInput
						register={register}
						isVisible={isVisible}
						error={formState.errors.confirmPassword?.message}
					/>

					<div className="w-full flex flex-col gap-4 justify-center items-stretch md:flex-row-reverse">
						<Button type="submit" color="primary" ariaLabel="sign up" isLoading={isLoading}>
							Sign Up
						</Button>
						<LinkButton color="secondary" href="/login" ariaLabel="login page">
							Login
						</LinkButton>
					</div>
				</form>
			</main>
		</>
	);
}
