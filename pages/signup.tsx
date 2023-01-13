import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Types
import { UserSignUp, UserSignUpSchema } from "../types/Credentials";

// Components
import { EmailInput, PasswordInput, ConfirmPasswordInput, NameInput } from "../components/ui/Input";
import { Button, LinkButton } from "../components/ui/Button";

export default function login() {
	const { register, handleSubmit, formState } = useForm<UserSignUp>({
		resolver: zodResolver(UserSignUpSchema),
		mode: "onChange"
	});
	const [isVisible, setIsVisible] = useState(false);

	const onSubmit = (data: UserSignUp) => {
		console.log(data);
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
						<Button
							type="submit"
							color="primary"
							clickHandler={() => console.log(formState)}
							ariaLabel="sign up"
						>
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
