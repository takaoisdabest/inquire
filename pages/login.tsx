import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Types
import { UserLogin, UserLoginSchema } from "../types/Credentials";

// Components
import { EmailInput, PasswordInput } from "../components/ui/Input";
import { Button, LinkButton } from "../components/ui/Button";

export default function login() {
	const { register, handleSubmit, formState } = useForm<UserLogin>({
		resolver: zodResolver(UserLoginSchema),
		mode: "onChange"
	});
	const [isVisible, setIsVisible] = useState(false);

	const onSubmit = (data: UserLogin) => {
		console.log(data);
	};

	const passwordToggler = () => {
		setIsVisible((previousState) => !previousState);
	};

	return (
		<>
			<Head>
				<title>Inquire | Login</title>
				<meta name="description" content="Log in to your inquire account." />
			</Head>
			<main className="flex-1 flex flex-col gap-4 items-center justify-center px-4 py-20">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full flex flex-col justify-center items-center gap-4 md:w-1/2 lg:w-1/3"
				>
					<h1 className="font-righteous font-bold text-4xl pb-4">Login</h1>

					<EmailInput register={register} error={formState.errors.email?.message} />
					<PasswordInput
						register={register}
						isVisible={isVisible}
						passwordToggler={passwordToggler}
						error={formState.errors.password?.message}
					/>

					<div className="w-full flex flex-col gap-4 justify-center items-stretch md:flex-row-reverse">
						<Button
							type="submit"
							color="primary"
							clickHandler={() => console.log(formState)}
							ariaLabel="log in"
						>
							Login
						</Button>
						<LinkButton color="secondary" href="/signup" ariaLabel="sign up page">
							Sign Up
						</LinkButton>
					</div>
				</form>
			</main>
		</>
	);
}
